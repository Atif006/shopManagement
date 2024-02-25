import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AddItem from "./components/AddItem";
import SellItem from "./components/SellItem";
import ViewsData from "./components/ViewsData";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AllOrder from "./components/AllOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/additems"
          element={
            <ProtectedRoutes>
              <AddItem />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/smellites"
          element={
            <ProtectedRoutes>
              <SellItem />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/viewdata"
          element={
            <ProtectedRoutes>
              <ViewsData />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/allorders"
          element={
            <ProtectedRoutes>
              <AllOrder />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
