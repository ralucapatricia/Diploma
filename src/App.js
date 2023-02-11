import NavBar from "./components/NavBar";
import FirstPage from "./pages/FirstPage";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Laundry from "./pages/Laundry";
import History from "./pages/History";
import Profile from "./pages/Profile";
import MinifotbalFieldPage from "./pages/MiniFotbalFieldPage";
import HandballFieldPage from "./pages/HandballFieldPage";
import BaschetFieldPage from "./pages/BachetFieldPage";
import TennisFieldPage from "./pages/TennisFieldPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import { AuthContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuth } from './contexts/AuthContext';

function App() {

  // const { user } = UserAuth();
  return (
    <div>
      <AuthContextProvider>
        <NavBar/>
        {/* {user && <NavBar /> } */}
        <main>
          <Routes>
            <Route path="/" element={< FirstPage />} exact />
            <Route path="/Laundry" element={<ProtectedRoute>< Laundry /></ProtectedRoute>} />
            <Route path="/History" element={<ProtectedRoute>< History /></ProtectedRoute>} />
            <Route path="/Profile" element={<ProtectedRoute>< Profile /></ProtectedRoute>} />
            <Route path="/Privacy" element={< Privacy />} />
            <Route path="/Terms" element={< Terms />} />
            <Route path="/AboutUs" element={< AboutUs />} />
            <Route path="/ContactUs" element={< ContactUs />} />
            <Route path="/TerenMinifotfal" element={<ProtectedRoute>< MinifotbalFieldPage /></ProtectedRoute>} />
            <Route path="/TerenHandbal" element={<ProtectedRoute>< HandballFieldPage /></ProtectedRoute>} />
            <Route path="/TerenBaschet" element={<ProtectedRoute>< BaschetFieldPage /></ProtectedRoute>} />
            <Route path="/TerenTenis" element={<ProtectedRoute>< TennisFieldPage /></ProtectedRoute>} />
            <Route path="/CreazaCont" element={< Register />} />
            <Route path="/HomePage" element={<ProtectedRoute>< HomePage /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </AuthContextProvider>

    </div>
  );
}

export default App;