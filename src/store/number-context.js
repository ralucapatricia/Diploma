import { createContext, useState } from "react";

export const NumberContext = createContext({
    number: 0,
    getNumber: (number) => {},
});

function NumberContextProvider({children}){

    const [number, setNumber] = useState(0);

    function getNumber(number){
        setNumber(number);
        return number;
    }

   const value = {
      number: number,
      getNumber: getNumber,  
   };

   return (
   <NumberContext.Provider value={value}>{children}</NumberContext.Provider>
   );  
}

export default NumberContextProvider;