import "./App.css";
import { Route, Routes } from "react-router-dom";
import InboxPage from "./pages/InboxPage";
import SpamPage from "./pages/SpamPage";
import TrashPage from "./pages/TrashPage";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { ContextProvider } from "./contexts/EmailContext";
import MailDetail from "./pages/MailDetail";

function App() {
  return (
    <div className="App">
      <h1>My Mail Box</h1>
      <div className="App2">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<InboxPage />} />
            <Route path="/spam" element={<SpamPage />} />
            <Route path="/trash" element={<TrashPage />} />
            <Route path="/inbox/:mailId" element={<MailDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
