import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </GoogleOAuthProvider>
)
