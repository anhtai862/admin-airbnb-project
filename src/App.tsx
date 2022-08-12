import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "component/Home";
import User from "pages/Admin-User/User";
import Room from "pages/Admin-Room/Room";

import Locations from "pages/Admin-Locations/Locations";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-cols bg-gray-200 h-screen w-screen">
        <Home />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/room" element={<Room />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
