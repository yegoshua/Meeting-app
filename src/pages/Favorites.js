import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
   const favotiresCtx = useContext(FavoritesContext);
   let content;
   if (favotiresCtx.totalFavorites === 0) {
      content = <p>You have no any favorites</p>;
   } else {
      content = <MeetupList meetups={favotiresCtx.favorites} />;
   }
   return (
      <section>
         <h1>My Favorites</h1>
         {content}
      </section>
   );
}

export default FavoritesPage;
