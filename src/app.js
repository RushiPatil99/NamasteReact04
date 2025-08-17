import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";

const AppLayoutComponent = () => (
  <div className="app">
    <HeaderComponent />
    <BodyComponent />
    {/* Add other components here */}
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayoutComponent />);
