import React, {useState} from 'react';


export const ContextNew = React.createContext({
    // prise:0,
    // mode:"Gross",
});
export const  ContextProvider:React.FC =({ children })=> {
    let [prise,setPrise] = useState<number>(0)
    let [mode,setMode] = useState<string>("Gross")
    return (
        <ContextNew.Provider value={prise}>
            {children}
        </ContextNew.Provider>
    )
}
