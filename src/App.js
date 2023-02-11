import NavBar from "./components/NavBar";
import FirstPage from "./pages/FirstPage";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import History from "./pages/History";
import Profile from "./pages/Profile";
import MinifotbalFieldPage from "./pages/MiniFotbalFieldPage";
import HandballFieldPage from "./pages/HandballFieldPage";
import BaschetFieldPage from "./pages/BachetFieldPage";
import TennisFieldPage from "./pages/TennisFieldPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import { AuthContextProvider } from "./contexts/AuthContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
      <AuthContextProvider>
        <NavBar/>
        <main>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={< FirstPage />} exact />
            <Route path="/History" element={< History />} />
            <Route path="/Profile" element={< Profile />} />
            <Route path="/Ajutor" element={< Privacy />} />
            <Route path="/FolosireaAplicatiei" element={< Terms />} />
            <Route path="/DespreNoi" element={< AboutUs />} />
            <Route path="/Contact" element={< ContactUs />} />
            <Route path="/TerenMinifotfal" element={< MinifotbalFieldPage />} />
            <Route path="/TerenHandbal" element={< HandballFieldPage />} />
            <Route path="/TerenBaschet" element={< BaschetFieldPage />} />
            <Route path="/TerenTenis" element={< TennisFieldPage />} />
            <Route path="/CreeazaCont" element={< Register />} />
            <Route path="/HomePage" element={< HomePage />} />
          </Routes>
        </main>
        <Footer />
      </AuthContextProvider>
  );
}
export default App;