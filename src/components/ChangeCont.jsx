import { useContext } from "react";
import { ContContext } from "../context/ContContext";


const ChangeCont = () => {
    const {cont, setCont} = useContext(ContContext)
    return (
    <div>
      <button onClick={() => setCont(cont + 1)}>Click</button>
    </div>
  )
}

export default ChangeCont
