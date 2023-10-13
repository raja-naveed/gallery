import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Gallery from "./pages/Gallery";
import UploadImage from "./pages/UploadImage";
import UserProfile from './pages/UserProfile';
import { auth } from "./firebase/firebase";


function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Auth setUser={setUser} />}
        />
        <Route
          path="/upload"
          element={user ? <UploadImage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Gallery />} />
        <Route
          path="/user"
          element={user ? <UserProfile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
