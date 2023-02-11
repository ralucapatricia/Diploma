import { createContext, useState } from "react";

export const ProfilContext = createContext({
    profilData: [],
    getProfilData: (param) => {},
});

function ProfilContextProvider({children}){

    const [profilData, setProfilData] = useState([]);

    function getProfilData(param){
        setProfilData(param);
    }

   const value = {
    profilData: profilData,
    getProfilData: getProfilData,
   }

    return (
        <ProfilContext.Provider value={value}>{children}</ProfilContext.Provider>
    )
}
export default ProfilContextProvider;