import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RickAndMortyApp } from './RickAndMortyApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Goodbye World</h1>
    <RickAndMortyApp />
  </StrictMode>,
)
