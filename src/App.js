import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Vetrina from "./pages/Vetrina";
import { useWindowSize } from "./utils/WindowResizeHook";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [width, height] = useWindowSize();

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="bg-bgColor h-screen">
      <Header toggleSidebar={toggleSidebar} />
      {width > parseFloat(765) ? (
        <Sidebar toggleSidebar={toggleSidebar} />
      ) : (
        openSidebar && <Sidebar toggleSidebar={toggleSidebar} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vetrina" element={<Vetrina />} />
      </Routes>
    </div>
  );
}

export default App;
