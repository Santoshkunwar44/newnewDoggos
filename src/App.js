import "./App.css";
import FormPages from "./pages/FormPages/FormPages";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home";
import PositionedSnackbar from "./components/snackbar/Snackbar";
//http://www.omdbapi.com/?apikey=c032e2d7

const App = () => {

  return (
    <div className="app">
      <PositionedSnackbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt&release" element={<FormPages />} />
      </Routes>
    </div>
  );
};

export default App;
