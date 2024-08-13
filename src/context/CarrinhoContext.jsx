import { createContext } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({children}) => {
  const [carrinho, setCarrinho] = useState([]);
  return (
    <CarrinhoContext.Provider>
      {children}
    </CarrinhoContext.Provider>
  )
}