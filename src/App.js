import { Routes, Route, NavLink } from "react-router-dom";
import Urunler from './pages/Urunler';
import UrunEkle from './pages/UrunEkle';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container px-5 mt-5">
      <ul>
          <li><NavLink activeclassname="active" to='/' >Ürünler</NavLink></li>
          <li><NavLink activeclassname="active" to='/urun-ekle'>Ürün Ekle</NavLink></li>
      </ul> 
      <Routes>
        <Route path="/" element={<Urunler />} />
        <Route path="/urun-ekle" element={<UrunEkle />} />
      </Routes>
    </div>
  );
}

export default App;
