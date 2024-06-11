<template>
  <section>
    <div class="jumbotron">
      <h2>Formulario</h2>
      <form novalidate @submit.prevent="enviarDatos()">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre"  
            class="form-control" 
            v-model.trim="datosLimpios.nombre" 
            placeholder="Ingrese un nombre"
            @input="datosSucios.nombre = true"
          >
          <div v-if="validarNombre()" class="alert alert-danger mt-1">
            <span v-if="!datosLimpios.nombre">Campo requerido</span>
            <span v-else-if="datosLimpios.nombre.length < 5 || datosLimpios.nombre.length > 15">Nombre debe tener entre 5 y 15 caracteres</span>
          </div>
        </div>
        <div class="form-group">
          <label for="edad">Edad:</label>
          <input 
          type="number"
          id="edad"
          class="form-control"
          v-model.number="datosLimpios.edad"
          placeholder="Ingrese una edad"
          @input="datosSucios.edad = true"
          >
          <div v-if="validarEdad()" class="alert alert-danger mt-1">
            <span v-if="!datosLimpios.edad && datosSucios.edad">Campo Requerido</span>
            <span v-else-if="datosLimpios.edad > 18 || datosLimpios.edad < 120">Edad debe estar entre 18 y 120 años</span>
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
          type="email"
          id="email"
          class="form-control"
          v-model="datosLimpios.email"
          placeholder="Ingrese un email"
          @input="datosSucios.email = true"
          >
          <div v-if="!datosLimpios.email && datosSucios.email" class="alert alert-danger mt-1">
            Campo Requerido
          </div>
        </div>
        <button class="btn btn-success my-3" :disabled="validarBoton()">Enviar</button>
      </form>
      <div class="table-responsive">
        <table v-if="datos.length" class='table table-dark'>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Email</th>
        </tr>
        <tr v-for="(dato, index) in datos" :key="index">
          <td>{{ dato.nombre }}</td>
          <td>{{ dato.edad }}</td>
          <td>{{ dato.email }}</td>
        </tr>
      </table>
      </div>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {
    },
    data () {
      return{ 
        datosLimpios: this.inicializarDatos(),
        datosSucios: this.inicializarDatos(),
        datos:[]
      };
    },
    methods: {
      inicializarDatos(){
        return{
          nombre: null,
          edad: null,
          email: null
        }
      },
      enviarDatos(){
        const dato = {...this.datosLimpios}
        this.datos.push(dato)
        console.log(dato)
        this.datosLimpios = this.inicializarDatos()
        this.datosSucios = this.inicializarDatos()
      },
      validarNombre(){
        return(
              !this.datosLimpios.nombre || 
              this.datosLimpios.nombre.length < 5 || 
              this.datosLimpios.nombre.length > 15) && this.datosSucios.nombre
      },
      validarEdad(){
        return(  
              !this.datosLimpios.edad ||
              this.datosLimpios.edad < 18 ||
              this.datosLimpios.edad > 120) && this.datosSucios.edad
      },
      validarBoton(){
        return(
          this.validarNombre() || this.validarEdad() || !this.datosLimpios.email
        )
      }, 
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
.jumbotron{
  padding-top: 10px;
  background-color: #5DADE2;
  color: white;
}
</style>
