 

<template>


<div ref="container" class="container container_land">

  <div class="hero">
    <div class="hero_image">
      <img class="hero_image_music" src="../assets/landing-22.jpg" alt="">
      <img class="hero_image_music" src="../assets/landing-2.jpg" alt="">
    </div>
  </div>

  <div class="icon">
    <img class="icon_img icon_img_music" src="../assets/noun-music-icon.svg" alt="">
    <img class="icon_img icon_img_play"  src="../assets/noun-play.svg" alt="">
    <img class="icon_img icon_img_star"  src="../assets/noun-star.svg" alt="">
    <img class="icon_img icon_img_noun-trumpet"  src="../assets/trumpet.svg" alt="">
    <img class="icon_img icon_img_saxophone"  src="../assets/saxophone.svg" alt="">
    <img class="icon_img icon_img_trumpet"  src="../assets/trumpet.svg" alt="">
  </div>
  <div class="cursor"></div>

</div>

 
   

  
</template>




<script setup>

import { ref, onMounted } from 'vue';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


let mouseX = ref(0);
let mouseY = ref(0);
let angleDegV = ref(undefined)
let cursorFluid = 6;
const delay = ref(50);  
const easing = ref(0.01); 
let deltaX = ref(0)
let deltaY = ref(0)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const cursor = document.querySelector('.cursor')
  const container = document.querySelector('.container')
  console.log(container)
  container.addEventListener('mousemove', (e) => {
  
  mouseX.value = e.pageX;
  mouseY.value = e.pageY;
  
  // console.log(mouseX.value, mouseY.value)
  
  });


 
  

 
   










  function updateCursor() {
     deltaX.value = (mouseX.value - cursor.offsetLeft) * easing.value ;
   deltaY.value = (mouseY.value - cursor.offsetTop) * easing.value ;

  let avgDelta = (deltaX.value + deltaY.value) / 2;
 let avgDeltaReduced = avgDelta / 6; 
 let deltaYDouble = deltaY.value * 10
 let deltaXDouble = 4 * -deltaX.value
 
  // console.log(avgDelta)

  // console.log(avgDelta)
  
  cursor.style.left = cursor.offsetLeft + deltaX.value + 'px';
  cursor.style.top = cursor.offsetTop + deltaY.value + 'px';
   

 
  


 

  gsap.to('.icon_img_music', {x: deltaXDouble, y:2 * deltaYDouble, duration:3, ease:'sine.out'})
  gsap.to('.icon_img_play', {x:deltaXDouble, y:deltaY * 5, duration:3, ease:'sine.out'})
  gsap.to('.icon_img_saxophone', {x:deltaXDouble, y:deltaYDouble, duration:3, ease:'sine.out'})
  gsap.to('.icon_img_star', {x:2 * -deltaX.value, y:deltaYDouble, duration:3, ease:'sine.out'})
  gsap.to('.icon_img_noun-trumpet, .icon_img_trumpet', {x: -deltaX.value, y:2 * deltaYDouble, duration:3, ease:'sine.out'})
   
 
  requestAnimationFrame(updateCursor);
}



updateCursor()


gsap.to('.icon_img', {
  y:30,
  scrollTrigger: {
    trigger:'.section',
    scrub:true,
  }
})

})
 




</script>






<style scoped lang="scss">
.container {
  position: relative;
}
.hero_image {
  display: flex;
  position: relative;

  &::after {
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(27, 27, 27, .4);
  }
}
.hero_image_music {
 width: 100%;
 flex-grow: 1;
 height: 100vh;
 object-fit: cover;
 min-height: -webkit-fill-abailable;


}
.icon_img {
  position: absolute;
   fill: white;

  &_music {
    top: 32%;
    left: 14%;
  }
  &_play {
    top: 10%;
    left: 70%;
  }
  &_star {
    top: 89%;
    left: 23%;
  }
  &_noun-trumpet {
    top: 88%;
    left: 78%;

  }
  &_saxophone {
    top: 44%;
    left: 90%;
  }
  &_trumpet {
    top: 69%;
    left: 1%;
  }
}

.cursor {
  position: absolute;
  inset: 0;
  // width:4px;
  // height: 4px;
  // border-radius: 50%;
  // z-index:30000;
  // background-color: blue;
}

</style>
