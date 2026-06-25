// usePerkPool.js — Custom Hook de React
//
// ¿Qué es un Custom Hook?
// Es una función JavaScript que usa hooks internos de React (useState, useMemo, etc.)
// y encapsula lógica que puede ser reutilizada en varios componentes.
// Por convención siempre empiezan con "use".
//
// Este hook maneja:
// 1. Qué personajes tiene el usuario desbloqueados (guardado en localStorage)
// 2. Calcula el pool de perks disponibles basado en la selección
// 3. Genera una build aleatoria de 4 perks

import { useState, useMemo, useCallback, useEffect } from 'react'

// ─── Lógica de generación aleatoria ───────────────────────────────────────────

/**
 * Mezcla un array de forma aleatoria (algoritmo Fisher-Yates)
 * Esto es más justo que array.sort(() => Math.random() - 0.5)
 */
function shuffleArray(array) {
  const arr = [...array] // clonamos para no mutar el original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/**
 * Saca N elementos aleatorios distintos de un array
 */
function pickRandom(array, n) {
  return shuffleArray(array).slice(0, n)
}

// ─── El Hook ───────────────────────────────────────────────────────────────────

/**
 * @param {Array} allCharacters - array de survivors o killers
 * @param {string} storageKey - clave para localStorage ('unlocked_survivors' o 'unlocked_killers')
 */
export function usePerkPool(allCharacters, storageKey) {

  // ── Estado 1: qué personajes están desbloqueados ──────────────────────────
  // useState inicializa con los personajes que tienen isDefault: true
  // o lo que haya guardado en localStorage
  const [unlockedIds, setUnlockedIds] = useState(() => {
    // Esta función solo se ejecuta una vez al montar el componente
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.warn('Error leyendo localStorage:', e)
    }
    // Default: solo los personajes base
    return allCharacters
      .filter(c => c.isDefault)
      .map(c => c.id)
  })

  // ── Estado 2: la build actual (4 perks) ──────────────────────────────────
  const [currentBuild, setCurrentBuild] = useState([])

  // ── Estado 3: modo "manual" — qué perk está bloqueada por el usuario ──────
  // Un Set de IDs de perks que el usuario ha bloqueado (no quiere que se cambien)
  const [lockedPerks, setLockedPerks] = useState(new Set())

  // ── Efecto: guardar en localStorage cuando cambia unlockedIds ──────────────
  // useEffect se ejecuta después de cada render donde cambien las dependencias
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(unlockedIds))
  }, [unlockedIds, storageKey])

  // ── useMemo: calcular el pool de perks ────────────────────────────────────
  // useMemo solo recalcula cuando cambian sus dependencias (unlockedIds o allCharacters)
  // Sin esto, recalcularía en cada render aunque no cambie nada
  const perkPool = useMemo(() => {
    const pool = []
    const seen = new Set() // para evitar duplicados de perks con mismo id

    allCharacters.forEach(character => {
      // Solo incluir perks de personajes desbloqueados
      if (!unlockedIds.includes(character.id)) return

      character.perks.forEach(perk => {
        if (!seen.has(perk.id)) {
          seen.add(perk.id)
          pool.push({
            ...perk,
            characterId: character.id,
            characterName: character.name,
          })
        }
      })
    })

    return pool
  }, [unlockedIds, allCharacters])

  // ── useCallback: funciones memorizadas ───────────────────────────────────
  // useCallback es como useMemo pero para funciones
  // Sin esto, cada render crea una nueva instancia de la función (mala práctica)

  /** Togglear si un personaje está desbloqueado */
  const toggleCharacter = useCallback((characterId) => {
    setUnlockedIds(prev => {
      if (prev.includes(characterId)) {
        // No permitir desbloquear todos (necesitas al menos 1 personaje con perks)
        if (prev.length <= 1) return prev
        return prev.filter(id => id !== characterId)
      } else {
        return [...prev, characterId]
      }
    })
  }, [])

  /** Desbloquear/bloquear todos los personajes */
  const toggleAll = useCallback((unlock) => {
    if (unlock) {
      setUnlockedIds(allCharacters.map(c => c.id))
    } else {
      setUnlockedIds(allCharacters.filter(c => c.isDefault).map(c => c.id))
    }
  }, [allCharacters])

  /** Generar una build completamente aleatoria */
  const generateBuild = useCallback(() => {
    if (perkPool.length < 4) return
    const build = pickRandom(perkPool, 4)
    setCurrentBuild(build)
    setLockedPerks(new Set()) // reset de bloqueos al regenerar todo
  }, [perkPool])

  /** Regenerar solo las perks no bloqueadas */
  const rerollUnlocked = useCallback(() => {
    if (perkPool.length < 4) return

    // Separar las perks bloqueadas de las no bloqueadas en el build actual
    const locked = currentBuild.filter(p => lockedPerks.has(p.id))
    const lockedIds = new Set(locked.map(p => p.id))

    // El pool disponible excluye las que ya están bloqueadas
    const availablePool = perkPool.filter(p => !lockedIds.has(p.id))
    const slotsToFill = 4 - locked.length

    if (availablePool.length < slotsToFill) return

    const newPerks = pickRandom(availablePool, slotsToFill)

    // Reconstruir el build manteniendo posiciones
    const newBuild = currentBuild.map(p => {
      if (lockedPerks.has(p.id)) return p // mantener la bloqueada
      return newPerks.shift() // reemplazar con nueva
    })

    setCurrentBuild(newBuild)
  }, [perkPool, currentBuild, lockedPerks])

  /** Cambiar una sola perk por una aleatoria del pool */
  const rerollSinglePerk = useCallback((perkIndex) => {
    if (perkPool.length < 4) return

    const currentIds = new Set(currentBuild.map(p => p.id))
    const available = perkPool.filter(p => !currentIds.has(p.id))
    if (available.length === 0) return

    const [newPerk] = pickRandom(available, 1)
    setCurrentBuild(prev => {
      const next = [...prev]
      next[perkIndex] = newPerk
      return next
    })
  }, [perkPool, currentBuild])

  /** Establecer una perk específica en un slot */
  const setPerkInSlot = useCallback((slotIndex, perk) => {
    setCurrentBuild(prev => {
      const next = [...prev]
      next[slotIndex] = perk
      return next
    })
  }, [])

  /** Toggle de bloqueo de una perk (para modo con build activa) */
  const togglePerkLock = useCallback((perkId) => {
    setLockedPerks(prev => {
      const next = new Set(prev)
      if (next.has(perkId)) next.delete(perkId)
      else next.add(perkId)
      return next
    })
  }, [])

  return {
    // Estado
    unlockedIds,
    perkPool,
    currentBuild,
    lockedPerks,
    // Acciones
    toggleCharacter,
    toggleAll,
    generateBuild,
    rerollUnlocked,
    rerollSinglePerk,
    setPerkInSlot,
    togglePerkLock,
    // Computed
    unlockedCount: unlockedIds.length,
    totalCount: allCharacters.length,
    poolSize: perkPool.length,
  }
}
