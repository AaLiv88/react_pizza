import React from  "react"
import App from "./App"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./redux/store";
import { Provider } from "react-redux";

const rootElem = document.getElementById('root');
const store = setupStore();

if (rootElem) {
    const root = createRoot(rootElem);
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
}
