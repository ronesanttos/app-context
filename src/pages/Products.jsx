import { useContContex } from "../hooks/useContContext";
import { useTitleContext } from "../hooks/useTitleContext";

const Products = () => {
  const { cont } = useContContex()
  const {color} = useTitleContext()

  return (
    <div>
      <h1 style={{color:color}}>Lista de produtos</h1>
      <p>Valor contador: {cont}</p>
    </div>
  );
};

export default Products;