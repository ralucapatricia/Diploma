import NavBar from "./components/NavBar";
import FirstPage from "./pages/FirstPage";
import { Route, Switch } from "react-router-dom";
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
import Register from "./pages/Register";

function App()
{
  return(
    <div>
    <NavBar />
      <main>
        <Switch>
           <Route path="/" component={FirstPage} exact/>
           <Route path="/Laundry" component={Laundry}/>
           <Route path="/History" component={History}/>
           <Route path="/Profile" component={Profile}/>
           <Route path="/Privacy" component={Privacy} />
           <Route path="/Terms" component={Terms} />
           <Route path="/AboutUs" component={AboutUs}/>
           <Route path="/ContactUs" component={ContactUs}/>
           <Route path="/TerenMinifotfal" component={MinifotbalFieldPage}/>
           <Route path="/TerenHandbal" component={HandballFieldPage}/>
           <Route path="/TerenBaschet" component={BaschetFieldPage}/>
           <Route path="/TerenTenis" component={TennisFieldPage}/>
           <Route path="/CreazaCont" component={Register}/>
        </Switch>
        </main>
        <Footer />
        </div>
  );
}

export default App;