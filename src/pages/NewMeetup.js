import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
   const navigate = useNavigate();
   function addMeetupHamdler(meetupData) {
      fetch(
         "https://react-start-60dd5-default-rtdb.firebaseio.com/meetups.json",
         {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: { "Content-Type": "aplication/json" },
         }
      ).then(() => {
         navigate("/");
      });
   }
   return (
      <section>
         <h1>New Meetup Page</h1>
         <NewMeetupForm onAddMeetup={addMeetupHamdler} />
      </section>
   );
}

export default NewMeetupPage;
