import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)

// can return only one element in each jsx file
// createRoot is used to render the jsx file in the root element
// StrictMode is used to check for potential problems in the application(error signal on the webpage)
// useState is used to store the state of the application
// useEffect is used to perform side effects in the application like fetching data from API
// Hooks are functions that start with the word 'use' and are used to add state and other features to functional components
