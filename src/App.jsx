import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DonorListPage from "./page/DonorListPage";
import DonorCreatePage from "./page/DonorCreatePage";
import DonorEditPage from "./page/DonorEditPage";
import DonorDetailsPage from "./page/DonorDetailsPage";
import Homepage from "./page/HomePage";



function App() {
  return (
    <div className="App">
      {/* <h1>Blood bank</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/donors' element={<DonorListPage />}></Route>
          <Route path='/donor/create' element={<DonorCreatePage />}></Route>
          <Route path='patient/:donorid' element={<DonorDetailsPage />}></Route>
          <Route path='/update-patient/:donorid' element={<DonorEditPage />}></Route>
        </Routes >
      </BrowserRouter >
    </div>
  );
}

export default App;
