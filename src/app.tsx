import * as React from "react";
import { RouterComponent } from "./core/router";
import { SessionProvider } from "./core/session.context";
import { LoadingSpinerComponent } from "./components/spiner/spiner.component";

export const App = () => {
  return (
    <div>
      <SessionProvider>
        <RouterComponent />
      </SessionProvider>
      <LoadingSpinerComponent />
    </div>
  );
};
