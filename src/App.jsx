import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
};

const Cartboard = () => {
  return (
    <div>
      <Header />
      <CartPage />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/cart",
    element: <Cartboard />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
