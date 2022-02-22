import { Routes, Route } from "react-router-dom";

import AllMeet from "./pages/AllMeet.js";
import FavouritesPage from "./pages/Favourites";
import NewMeet from "./pages/NewMeet.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeet />}></Route>
        <Route path="/favourites" element={<FavouritesPage />}></Route>
        <Route path="/new-meetup" element={<NewMeet />}></Route>
      </Routes>
    </div>
  );
}

export default App;
