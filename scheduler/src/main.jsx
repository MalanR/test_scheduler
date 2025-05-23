import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NNaF1cWGhPYVF3WmFZfVtgcV9GZ1ZRTGYuP1ZhSXxWdkBhW39ZcHBRR2RdVkx9XUs=');

// Ngo9BigBOggjHTQxAR8/V1NNaF1cWGhPYVF3WmFZfVtgcV9GZ1ZRTGYuP1ZhSXxWdkBhW39ZcHBRR2RdVkx9XUs=
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
