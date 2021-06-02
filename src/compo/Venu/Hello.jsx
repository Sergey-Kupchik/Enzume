import React, {useContext} from 'react';
import { useVenuContext } from './VenuContext';



const Hello=props=> {
    const {color} = useVenuContext()
    return <h1 style={{color:color}}> Hello {color}</h1>
}

export default Hello;