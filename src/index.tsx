import { createRoot } from "react-dom/client";
import { Amplify } from "@aws-amplify/core";
import { Providers } from "./components/Providers";
import "./index.css";
import { Application } from "./components/Application";

Amplify.configure({
  Auth: {
    region: process.env.REACT_APP_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID,
  },
});

const container = document.getElementById("root")!;

const root = createRoot(container);

root.render(
  <Providers>
    <Application />
  </Providers>,
);
