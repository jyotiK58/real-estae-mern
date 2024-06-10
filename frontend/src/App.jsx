import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import LogOut from "./pages/LogOut";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/logout" element={<LogOut />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
