import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export const renderWithRouter = (
  ui: React.ReactElement,
  { route = "/" } = {}
) => {
  window.history.pushState({}, "Craftverse", route);

  return render(ui, { wrapper: BrowserRouter });
};
