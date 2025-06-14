import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// container.append(App()); //direct js
