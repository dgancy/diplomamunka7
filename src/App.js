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
import BackTrackAssignment from "./Components/Assignments/BacktrackingAssignment";
import RecursionTreeAssignment from "./Components/Assignments/RecursionTreeAssignment";
import MasterTheoramAssignment from "./Components/Assignments/MasterTheoramAssignment";
import BinaryTreeAssignment from "./Components/Assignments/BinaryTreeAssignments";
import HashTableAssignment from "./Components/Assignments/HashTableAssignment";
import RedBlackTreeAssignment from "./Components/Assignments/RedBlackTreeAssignment";
import TestPage from "./Components/Test/TestPage";
import RecursionTreeTest from "./Components/Test/RecursionTreeTest";
import MasterTheoramTest from "./Components/Test/MaterTheoramTest";
import BinaryTreeTest from "./Components/Test/BinaryTreeTest";
import HashTableTest from "./Components/Test/HashTableTest";
import BackTrackingTest from "./Components/Test/BackTrackingTest";
import RedBlackTreeTest from "./Components/Test/RedBlackTreeTest";
import Home from "./Components/Home";
import LogMoreData from "./Components/Login/LogMoreData";
import ChatbotOne from "./Components/ChatBottest";

function App() {
  return (
    <>
      <Router>
        <NavbarMenu />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Register />} />

          <Route path="/chatbot" element={<ChatbotOne />} />

          <Route path="/binary-tree" element={<BinaryTree />} />
          <Route path="/master-theorem" element={<MasterTheorem />} />
          <Route path="/backtracking" element={<BackTracking />} />
          <Route path="/hash-table" element={<Hashtable />} />
          <Route path="/recursion-tree" element={<RecursionTree />} />
          <Route path="/red-black-tree" element={<RedBlackTree />} />

          <Route
            path="/recursion-tree-assignment"
            element={<RecursionTreeAssignment />}
          />
          <Route
            path="/master-theorem-assignment"
            element={<MasterTheoramAssignment />}
          />
          <Route
            path="/binary-tree-assignment"
            element={<BinaryTreeAssignment />}
          />
          <Route
            path="/hash-table-assignment"
            element={<HashTableAssignment />}
          />
          <Route
            path="/red-black-tree-assignment"
            element={<RedBlackTreeAssignment />}
          />
          <Route
            path="/backtracking-assignment"
            element={<BackTrackAssignment />}
          />

          <Route path="/home" element={<Home />} />

          <Route path="/test" element={<TestPage />} />

          <Route path="/recursion-tree-test" element={<RecursionTreeTest />} />
          <Route path="/master-theorem-test" element={<MasterTheoramTest />} />
          <Route path="/binary-tree-test" element={<BinaryTreeTest />} />
          <Route path="/hash-table-test" element={<HashTableTest />} />
          <Route path="/backtracking-test" element={<BackTrackingTest />} />
          <Route path="/red-black-tree-test" element={<RedBlackTreeTest />} />

          <Route path="/logdata" element={<LogMoreData />} />

        </Routes>
      </Router>

      
    </>
  );
}

export default App;
