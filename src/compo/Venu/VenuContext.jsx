import React, {useContext} from 'react';

export const useVenuContext =()=>useContext(VenuContext)

const defaultValue = {
    color:"green"
}

const VenuContext = React.createContext(defaultValue)


export default VenuContext;