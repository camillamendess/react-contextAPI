import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer } from "../reducers/carrinhoReducer.js";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
  // Quando dispatch é chamada, ela envia uma ação para a função reducer (carrinhoReducer), que recebe o estado atual e a ação enviada como argumentos.
  const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  // A função useMemo é usada para memorizar o resultado de uma função de alto custo computacional.
  const { totalTemp, quantidadeTemp } = useMemo(() => {
    return carrinho.reduce(
      (acumulador, produto) => ({
        quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
        totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
      }),
      {
        quantidadeTemp: 0,
        totalTemp: 0,
      }
    );
  }, [carrinho]);

  useEffect(() => {
    setQuantidade(quantidadeTemp);
    setValorTotal(totalTemp);
  });

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatch,
        quantidade,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
