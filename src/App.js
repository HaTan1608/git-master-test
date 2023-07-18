import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/login/SignIn";
import Connect from "./pages/connect/Connect";
import Main from "./components/layout/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route element={<Main />}>
          <Route path="/connect" element={<Connect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
