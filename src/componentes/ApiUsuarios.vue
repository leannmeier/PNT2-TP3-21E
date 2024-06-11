<template>
  <section class="src-componentes-api">
    <button class="btn btn-success my-3 mr-2" @click="mostrar()">
      {{ mensajeBoton() }}
    </button>
    <button class="btn btn-warning my-3 mr-2" @click="editar()">Editar</button>
    <div v-show='visibilidad()' class="table-responsie">
      <table class="table table-info">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Número de Teléfono</th>
        </tr>
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.phone }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
  import * as usuarios from '../servicios/usuarios'

  export default  {
    name: 'src-componentes-api',
    props: [],
    
    mounted () { 
      this.getUsuarios()
    },
    data () {
      return{
       usuarios: [],
       visible: false,
      }
    },
    methods: {
     async getUsuarios(){
        const usuario = await usuarios.getAllUsers()
        this.usuarios = usuario;
     },
     mostrar(){
      this.visible = !this.visible
     },
     visibilidad(){
      return this.visible
     },
     mensajeBoton(){
      return this.visible? 'Ocultar' : 'Mostrar'
     },

     /* ------------------------------------------------------------------- */

     editar(){

     }

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  h2{
    color: blue
  }
</style>
