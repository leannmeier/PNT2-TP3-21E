import axios from "axios";

const url = 'https://66551b203c1d3b6029384072.mockapi.io/apibackend/users'

export const getAllUsers = async () => {
    try{
        const { data: USUARIOS } = await axios.get(url)
        return USUARIOS
    }
    catch(error){
        console.error("Error productos GET ", error)
         return []
    }
}

/* export const post = async producto => {
    try{
        const { data: productoGuardado } = await axios.post(url, producto)
        return productoGuardado
     }
    catch(error){
         console.error("Error productos POST ", error)
         return {}
    }
}

export const put = async (id,producto) => {
    try{
        const { data: productoActualizado } = await axios.put(url+id, producto)
        return productoActualizado
     }
    catch(error){
         console.error("Error productos PUT ", error)
         return {}
    }
}
export const _delete = async id => {
    try{
        const { data: productoEliminado } = await axios.delete(url+id)
        return productoEliminado
     }
    catch(error){
         console.error("Error productos DELETE ", error)
         return {}
    }
} */


/* export const get = cb =>{
    axios.get(url)
        .then(response => {
            const datos = response.data
            console.log(datos)
            cb(datos)

         })
        .catch(error => {
             console.error("Hubo un error en la solicitud: ", error)
             cb([])
    });
  }
  
  export const post = producto => {console.log(producto)} */