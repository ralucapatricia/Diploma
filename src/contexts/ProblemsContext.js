import { createContext, useState } from "react";

export const ProblemContext = createContext({
    problems: [],
    getProblems: (param) => {},
});

function ProblemContextProvider({children}){

    const [problems, setProblems] = useState([]);

    function getProblems(param){
        setProblems(param);
    }

   const value = {
    problems: problems,
    getProblems: getProblems,
   }

    return (
        <ProblemContext.Provider value={value}>{children}</ProblemContext.Provider>
    )
}

export default ProblemContextProvider;