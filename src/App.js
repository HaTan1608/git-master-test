import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/login/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
