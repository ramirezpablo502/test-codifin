import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Switch>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} component={Component} />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
