import React, { useContext, useState } from 'react';
import UrunContext from '../context/UrunContext';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UrunEkle() {

  const navigate = useNavigate();
  const { urunler, urunEkle } = useContext(UrunContext);
  const [urunAdi, setUrunAdi] = useState('');
  const [urunAciklamasi, setUrunAciklamasi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const urun = {
      id: urunler.length + 1,
      urunAdi: urunAdi,
      urunAciklamasi: urunAciklamasi
    }

    if (urunAdi === '' || urunAciklamasi === '') {
      toast.error('Lütfen tüm alanları doldurunuz.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: "#f8d7da",
          color: "#721c24",
        },
      });
      return false;
    }else{
      urunEkle(urun);
      navigate('/');
    }
  }

  
  

  return (
    <>
    <ToastContainer />
    <h4 className="mt-5">ÜRÜN EKLE</h4>
    <div className="card">
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="urunAdi" className="form-label">Ürün Adı</label>
          <input type="text" className="form-control" id="urunAdi" autoComplete="off" value={ urunAdi } onChange={(e) => setUrunAdi(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="urunAciklamasi" className="form-label">Açıklama</label>
          <textarea className="form-control" id="urunAciklamasi" autoComplete="off" rows="3" value={urunAciklamasi} onChange={(e) => setUrunAciklamasi(e.target.value)}></textarea>
        </div>
        <div className="col-auto" style={{ textAlign: "right" }}>
          <button type="submit" className="btn btn-primary mb-3" onClick={ handleSubmit } >Ekle</button>
        </div>
      </div>
    </div>
    </>
  )
}
