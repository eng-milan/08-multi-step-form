import "./index.css"
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const el = document.getElementById("root")

const root = createRoot(el)

root.render(<BrowserRouter>
    <App />
</BrowserRouter>)