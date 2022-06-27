import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if(rootElement){
  const root = createRoot(rootElement);
 root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
  
);
}


