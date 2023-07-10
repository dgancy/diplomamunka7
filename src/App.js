import "./App.css";
import NavbarMenu from "./Components/NavbarMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import BinaryTree from "./Components/Algorithm2/BinaryTree";
import MasterTheorem from "./Components/Algorithm2/MasterTheorem";
import BackTracking from "./Components/Algorithm2/BackTracking";
import Hashtable from "./Components/Algorithm2/HashTable";
import RecursionTree from "./Components/Algorithm2/RecursionTree";
import RedBlackTree from "./Components/Algorithm2/RebBlackTree";

function App() {
  return (
    <div>
      <Router>
        <NavbarMenu />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Register />} />
          <Route path="/binary-tree" element={<BinaryTree />} />
          <Route path="/master-theorem" element={<MasterTheorem />} />
          <Route path="/backtracking" element={<BackTracking />} />
          <Route path="/hash-table" element={<Hashtable />} />
          <Route path="/recursion-tree" element={<RecursionTree />} />
          <Route path="/red-black-tree" element={<RedBlackTree />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
