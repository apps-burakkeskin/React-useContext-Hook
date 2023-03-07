import { createContext } from "react";

const data = {
    urunler: [],
    urunEkle: (urun) => {
        data.urunler.push(urun);
    }
};

const UrunContext = createContext(data);

export default UrunContext;