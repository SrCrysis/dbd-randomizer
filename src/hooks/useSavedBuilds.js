// useSavedBuilds.js — Hook para guardar builds en localStorage
//
// Esto demuestra un patrón muy común: "persist state to localStorage"

import { useState, useCallback } from 'react'

const STORAGE_KEY = 'dbd_saved_builds'

function loadBuilds() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function saveBuilds(builds) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(builds))
}

export function useSavedBuilds() {
  const [builds, setBuilds] = useState(loadBuilds)

  const saveBuild = useCallback((build, role, label = '') => {
    const newBuild = {
      id: Date.now(), // timestamp como ID único simple
      label: label || `Build ${new Date().toLocaleDateString('es-CL')}`,
      role, // 'survivor' o 'killer'
      perks: build,
      createdAt: new Date().toISOString(),
    }
    setBuilds(prev => {
      const updated = [newBuild, ...prev].slice(0, 50) // max 50 builds guardadas
      saveBuilds(updated)
      return updated
    })
    return newBuild.id
  }, [])

  const deleteBuild = useCallback((id) => {
    setBuilds(prev => {
      const updated = prev.filter(b => b.id !== id)
      saveBuilds(updated)
      return updated
    })
  }, [])

  const clearAll = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setBuilds([])
  }, [])

  return { builds, saveBuild, deleteBuild, clearAll }
}
