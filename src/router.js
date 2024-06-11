import { createRouter, createWebHistory } from 'vue-router'
import Formulario from './componentes/Formulario.vue'
import ApiUsuarios from './componentes/ApiUsuarios.vue'

const routes = [
    { path : '/', redirect: '/formulario' },
    { path : '/:pathmatch(.*)*', redirect: '/formulario' },
    { path : '/formulario', component: Formulario },
    { path : '/usuarios', component: ApiUsuarios },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router