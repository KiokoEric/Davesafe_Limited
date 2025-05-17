import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { fas } from '@fortawesome/free-solid-svg-icons'; // fas: Font Awesome Solid
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the imported icons to the library
library.add(fas);

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
