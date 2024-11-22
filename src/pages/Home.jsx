//import { useContext } from "react"
//import {ContContext} from '../context/ContContext'
import ChangeCont from "../components/ChangeCont"
import { useContContex } from "../hooks/useContContext"
import {useTitleContext} from "../hooks/useTitleContext"

const Home = () => {
 // const {cont} = useContext(ContContext)
 const {cont} = useContContex()

 const {color, dispatch} = useTitleContext()

 const setColor = (color) => {
  dispatch({type: color})
 }
  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>O valor do contador é {cont}
      </p>
      <ChangeCont/>

      <div>
        <button onClick={() => setColor("RED")}>Vermelho</button>
        <button onClick={() => setColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home
