import React, { useContext } from 'react'
import UrunContext from '../context/UrunContext'
import { NavLink } from "react-router-dom";

export default function Urunler() {

  const { urunler } = useContext(UrunContext);
  
  return (
    <>
    <h4 className="mt-5">ÜRÜNLER</h4>
    <div className="card">
      <div className="card-body">

        {
          urunler.length === 0 && (
            <div className="alert alert-danger" role="alert">
              Ürün bulunamadı! Yeni ürün eklemek için <NavLink style={{ fontWeight: "bold" }} to="/urun-ekle">tıklayınız</NavLink>.
            </div>
          )
        }

        
        {
          urunler.length > 0 && (
            <div className="alert alert-success" role="alert">
              { urunler.length } adet ürün bulundu!
            </div>
          )
        }

        <table className={ urunler.length === 0 ? "d-none" : "table table-striped" }>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ürün Adı</th>
              <th scope="col">Açıklama</th>
            </tr>
          </thead>
          <tbody>
          {
            urunler.sort((a, b) => b.id - a.id).map((urun, index) => (
              <tr key={ index }>
                <th scope="row">{ index + 1 }</th>
                <td>{ urun.urunAdi }</td>
                <td>{ urun.urunAciklamasi }</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
