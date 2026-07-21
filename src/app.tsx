import { MetaProvider, Title, Link } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Moje Portfolio</Title>
          <Link 
            rel="stylesheet" 
            type="text/css" 
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" 
          />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}