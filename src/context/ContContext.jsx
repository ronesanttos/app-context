import { createContext, useState } from "react";

export const  ContContext = createContext()

export const ContContextProvider = ({children}) => {
    const [cont, setCont] = useState(0)

    return (
        <ContContext.Provider value={{cont,setCont}}>
            {children}
        </ContContext.Provider>
    )
}