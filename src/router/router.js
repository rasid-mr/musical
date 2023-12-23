import { createRouter, createWebHistory } from "vue-router";
 import TheHome from '../views/TheHome.vue'
 import TheWork from '../views/TheWork.vue'
 import TheAbout from '../views/TheAbout.vue'

const routes = [
  {
    path:'/',
    redirect:'/home',
    component:TheHome,
  },
   
{
  path:"/home",
  name:'TheHome',
  component:TheHome,
 

},

{
  path:"/work",
  component:TheWork,
  name:'TheWork',
 
},
{
path:'/about',
component:TheAbout,
name:'TheAbout'
},

];

const router = createRouter({
  
  behavior: "smooth",
  history: createWebHistory(),
  routes,
});

 

export default router;
