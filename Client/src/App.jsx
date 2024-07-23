import GetStarted from "./Pages/GetStarted/GetStarted";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Explore from "./Pages/Explore/Explore";
import EventCard from "./Pages/EventCard/EventCard";
import CreateEvent from "./Pages/CreateEvent/CreateEvent";
import ManageEvents from "./Pages/ManageEvents/ManageEvents";
import Admin from "./Admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/event-card" element={<EventCard />} />
          <Route path="/manage-events" element={<ManageEvents />} />
        </Routes>
        {/* <Footer /> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
