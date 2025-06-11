import { createRoot } from "react-dom/client";
import { App } from "./App";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// container.append(App()); //direct js
