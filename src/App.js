// import logo from './logo.svg';
// import './App.css';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<Main />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
}

export default App;
