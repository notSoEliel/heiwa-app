import clienteAxios from "../config/axios.js";

const crearReserva = async reserva => {

   try {
      const response = await clienteAxios.post("/reserva", reserva)
      return {
         msg: response.data.msg,
         response,
         error: false
      }

   } catch (error) {
      return{
         msg: "Error al momento de crear la reserva",
         error: true
      }
   }
}

export {
   crearReserva
}