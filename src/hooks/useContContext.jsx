import { useContext } from "react";
import { ContContext } from "../context/ContContext";


export const useContContex = () => {
    const context = useContext(ContContext)

    if (!context) {
        console.log("Contexto não encontrado")
    }
    
    return context
}