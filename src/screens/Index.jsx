import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Library from "./Library";
import Feed from "./Feed";
import Trending from "./Trending";
import Player from "./Player";
import Favorites from "./Favorites";

function Index() {
  return (
    <Router>
      <div className="home-container">
        <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
    </Router>
  );
}

export default Index;
