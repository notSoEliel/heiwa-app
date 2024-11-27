import useOrders from "../hooks/useOrders";

const PedidosCard = () => {
   const { orders, loading, error } = useOrders()

   if (loading) {
      return <h5 className="text-center text-uppercase mt-5">Cargando pedidos...</h5>;
   }

   if (error) {
      return <p>Error: {error}</p>;
   }

   return (
      <div className="container mt-5">
         <div className="row">
            {orders.length === 0 ? (
               <h5 className="text-center">No hay pedidos disponibles</h5>
            ) : (
               orders.map((pedido, index) => (
                  <div className="col-md-4 mb-4" key={pedido.id || index}>
                     <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                           <h5 className="card-title text-primary font-weight-bold">{pedido.producto}</h5>
                           <p className="card-text text-muted">{pedido.cliente}</p>
                           <p className="card-text mt-auto">
                              <strong>Orden# </strong><span className="">{pedido.id}</span>
                           </p>
                        </div>
                     </div>
                  </div>
               ))
            )}
         </div>
      </div>
   );
};

export default PedidosCard;
