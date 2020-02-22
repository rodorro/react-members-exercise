import * as React from "react";
import { RouterComponent } from "./core/router";
import { SessionProvider } from "./core/session.context";

export const App = () => {
  return (
    <SessionProvider>
      <RouterComponent />
    </SessionProvider>
  );
};
