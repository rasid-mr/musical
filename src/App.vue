<script setup>
 
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <TheHeader></TheHeader>
   
   
  <router-view> 
  </router-view>
</template>

<style >
:root {
  --font-size-fluid-0: clamp(.75rem, 1.5vw, 1rem);
--font-size-fluid-1: clamp(1rem, 2vw, 1.5rem);
--font-size-fluid-2: clamp(1.5rem, 3vw, 2.5rem);
--font-size-fluid-3: clamp(2rem, 4vw, 3.5rem);




--size-fluid-1: clamp(.5rem, 1vw, 1rem);
--size-fluid-2: clamp(1rem, 2vw, 1.5rem);
--size-fluid-3: clamp(1.5rem, 3vw, 2rem);
--size-fluid-4: clamp(2rem, 4vw, 3rem);
--size-fluid-5: clamp(4rem, 5vw, 5rem);
--size-fluid-6: clamp(5rem, 7vw, 7.5rem);
--size-fluid-7: clamp(7.5rem, 10vw, 10rem);
--size-fluid-8: clamp(10rem, 20vw, 15rem);
--size-fluid-9: clamp(15rem, 30vw, 20rem);
--size-fluid-10: clamp(20rem, 40vw, 30rem);
}

</style>
