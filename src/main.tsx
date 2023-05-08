import React from 'react'
import ReactDOM from 'react-dom/client'
import './componentes/global.css'
import { RouterProvider } from 'react-router-dom'  // Biblioteca que faz com que conseguimos linkar as coisas
import { router } from './componentes/routes'

// foreach / .map -> Ambos percorrem um array [];

//foreach -> Nao tem retorno
// .map -> Possui um retorno; Quando fizer um map, na primeira tag tem que colocar uma key ={}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   
  </React.StrictMode>
)
