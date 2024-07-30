import "./App.css";
// import Rive from "@rive-app/react-canvas";
// import riveUrl from "./assets/rive/spiral.riv";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SpeakersPage from "./pages/SpeakersPage";
import SchedulesPage from "./pages/SchedulesPage";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./components/Footer";
import TopNav from "./components/nav/TopNav";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="speakers" element={<SpeakersPage />} />
      <Route path="schedules" element={<SchedulesPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <TopNav />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
