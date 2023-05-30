import '../styles/index.css'
import Header from "./Header";
import Telegram from "./Telegram";
import Footer from "./Footer";
// import Items from "./Items";
// import { state } from '../Constants'
import { Routes, Route } from 'react-router-dom'
import Authorization from './Authorization';
// import { useDispatch, useSelector } from "react-redux";
// import {SHOW_WOMAN_ITEMS, SHOW_MAN_ITEMS} from "./store/actions";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <Routes>
        {/* <Route path='/Man' element={<Items itemsMan={state.itemsMan} />} /> */}
        <Route path='/account' element={<Authorization />} />
      </Routes>
      <Telegram />
      <Footer />
    </div>
  );
}

export default App;