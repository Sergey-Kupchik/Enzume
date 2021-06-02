import React, {useContext, useState} from 'react';

export type ContextType = {
    contractID: string,
    totalValue?: number
}

const defoultContext:ContextType = {
    contractID: "",
    totalValue: undefined
}

export const useSpaContextState =()=>useContext(SpaContextState)
export const SpaContextState = React.createContext<ContextType>(defoultContext);



export const  BannerProvider:React.FC =({ children })=> {
    let [contractID,setContractID] = useState<string>("contractID")
    let [totalValue,setTotalValue] = useState<number|undefined>()
    const provider = {
        contractID,
        totalValue,
    }
debugger
    return (
        <SpaContextState.Provider value={provider}>
            {children}
        </SpaContextState.Provider>
    )
}
