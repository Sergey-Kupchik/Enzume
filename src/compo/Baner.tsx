import React, {useContext, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useSpaContextState} from './BannerContext';
import Link from '@material-ui/core/Link';
import {Checkbox} from '@material-ui/core';


type BannerPropsTYpe = {
    contractID: string
    totalValue?: number
    checked: boolean
    click: (checked: boolean) => void
}

// export const SpaContextState = React.createContext({});
// export const ContractIDContext = React.createContext({});

// export function BannerWrapp() {
//     let [contractID, setContractID] = useState<'null' | number>('null')
//     let [totalValue, setTotalValue] = useState<number>(9999999999999)
//     return (
//         <SpaContextState.Provider value={totalValue}>
//             <ContractIDContext.Provider value={contractID}>
//                 <Banner/>
//             </ContractIDContext.Provider>
//         </SpaContextState.Provider>
//     )
// }


export function Banner(props: BannerPropsTYpe) {
    const {contractID, totalValue, checked, click} = props
    //
    // const onChange = (event: { target: { checked: boolean } }) => {
    //     click(event.target.checked)
    // }

    if (contractID !== '') {
        return (
            <div className={'banner'} >
            </div>
        )
    }
}

