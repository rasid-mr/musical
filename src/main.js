import { createApp } from 'vue'
import router from "./router/router";
import './style.css'
import App from './App.vue'
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const app = createApp(App)
app.use(router);

app.mount('#app')
