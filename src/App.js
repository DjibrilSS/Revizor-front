import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./app.css";
import MainPage from "./pages/Mainpage/MainPage";
import Diner from "./components/Diner/Diner";
import PersonalArea from "./components/PersonalArea/PersonalArea";
import ChatPage from "./pages/Chat/ChatPage";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/personal/:id" element={<PersonalArea />} />
        <Route path="/diner/:dinerId" element={<Diner />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
