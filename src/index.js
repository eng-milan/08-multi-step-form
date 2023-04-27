import "./index.css"
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import { Provider } from "./context/FormStep";
import App from "./App"

const el = document.getElementById("root")

const root = createRoot(el)

root.render(<Provider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>)