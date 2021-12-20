import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
   return (
      <div>
         <Layout>
            <Routes>
               <Route exact path="/" element={<AllMeetupsPage />} />
               <Route path="/new-meetup" element={<NewMeetupPage />} />
               <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
         </Layout>
      </div>
   );
}

export default App;
