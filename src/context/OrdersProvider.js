import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
   const [orders, setOrders] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const getOrders = async () => {
         try {
            const response = await clienteAxios.get("/Pedido");
            // Aquí asumimos que response.data es el arreglo de pedidos
            setOrders(response.data);
         } catch (error) {
            // Manejo de errores
            setError(error.response?.data?.message || "Error al obtener los pedidos");
         } finally {
            setLoading(false); // Terminar el estado de carga
         }
      };
      getOrders();
   }, []);

   return (
      <OrdersContext.Provider value={{ orders, loading, error }}>
         {children}
      </OrdersContext.Provider>
   );
};

export default OrdersContext;
