<template>
   <nav class="nav-parent theme-nav-dark nav-mobile-not-active">
      <div class="nav-links">
         <div class="nav-links-wrapper">

            <ul class="ul-desktop">
               <li @click="activeClass" class="btn btn-link" data-barba-update="">
                  <router-link to="./home" class="btn-click">
                     <div class="btn-fill btn-original-fill"></div>
                     <div class="btn-text btn-original-text">
                        <span>Home</span>
                     </div>
                     <div class="btn-fill btn-duplicate-fill"></div>
                     <div class="btn-text btn-duplicate-text">
                        <span>Home</span>
                     </div>
                  </router-link>
               </li>
               <li @click="activeClass" class="btn btn-link" data-barba-update="">
                  <router-link to="./work" class="btn-click">
                     <div class="btn-fill btn-original-fill"></div>
                     <div class="btn-text btn-original-text">
                        <span>Work</span>
                     </div>
                     <div class="btn-fill btn-duplicate-fill"></div>
                     <div class="btn-text btn-duplicate-text">
                        <span>Work</span>
                     </div>
                  </router-link>
               </li>
              
               <li @click="activeClass" class="btn btn-link" data-barba-update="">
                  <router-link to="./about" class="btn-click">
                     <div class="btn-fill btn-original-fill"></div>
                     <div class="btn-text btn-original-text">
                        <span>About</span>
                     </div>
                     <div class="btn-fill btn-duplicate-fill"></div>
                     <div class="btn-text btn-duplicate-text">
                        <span>About</span>
                     </div>
                  </router-link>
               </li>
              
            </ul>
            <div class="wrap-right-corner">
                
               <div @click="initBasicFunctions" class="hamburger-wrap">
                  <div class="hamburger" data-toggle="modal-nav-mobile">
                     <div class="hamburger-bar"></div>
                     <div class="hamburger-bar"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="modal-nav-mobile">
         <div class="modal-block">
            <div class="modal-block-background"></div>
            <ul class="ul-mobile">
               <span class="modal-small-title">Menu</span>
               <router-link to="./home">
                  <span>Home</span>
               </router-link>
               <router-link to="./work">
                  <span>Work</span>
               </router-link> 
               <router-link to="./about">
                  <span>About</span>
               </router-link> 
               <router-link to="./about">
                  <span>About</span>
               </router-link> 
               <router-link to="./about">
                  <span>Responsibility</span>
               </router-link> 

            </ul>
         </div>
      </div>
      <div class="modal-nav-background" data-close="modal"></div>
   </nav>
</template>



<script setup>
import { onMounted } from 'vue';


onMounted(() => {
   window.addEventListener('DOMContentLoaded', () => {

      const linksd = document.querySelector('.router-link-active')
      linksd.closest('.btn-link').classList.add('active')
   });


   function initBasicFunctions() {
      // Navigation toggle
      const nav = document.querySelector('.nav-parent')
      const navToggle = document.querySelectorAll("[data-toggle='modal-nav-mobile']");

      navToggle.forEach(btn => {
         btn.addEventListener('click', () => {

            if (nav.classList.contains('nav-mobile-not-active')) {
               nav.classList.add('nav-mobile-active');
               nav.classList.remove('nav-mobile-not-active');
               nav.classList.add('scroll-direction-down');
               console.log('if')
            } else {
               nav.classList.add('nav-mobile-not-active');
               nav.classList.remove('nav-mobile-active');
               nav.classList.remove('scroll-direction-down');
               console.log('else');

            }
         });
      });

      // Close modal on click
      const closeModalButtons = document.querySelectorAll("[data-close='modal']");
      closeModalButtons.forEach(btn => {
         btn.addEventListener('click', () => {

            nav.classList.add('nav-mobile-not-active');
            nav.classList.remove('nav-mobile-active');
            nav.classList.remove('scroll-direction-down');
         });
      });

      // Keyboard escape to close
      document.addEventListener('keydown', (e) => {
         if (e.keyCode === 27) {
            if (document.querySelector(".modal").classList.contains('active')) {

               nav.classList.add('nav-mobile-not-active');
               nav.classList.remove('nav-mobile-active');
               nav.classList.remove('scroll-direction-down');
               // Start scroll if any
               if (typeof scroll !== 'undefined' && typeof scroll.start === 'function') {
                  scroll.start();
               }
            }
            

         }
      });
   }

   initBasicFunctions()
   // activeClass()

})

const activeClass = ($event) => {
   console.log('acti', $event.target)
   const link = $event.target.closest('.btn-link')
   const lists = document.querySelectorAll('.btn-link')
   lists.forEach(el => {
      if (link == el) {
         link.classList.add('active')

      } else {
         el.classList.remove('active')

      }
   })

}
</script>









<style lang="scss">
 

.router-link-exact-active {
   opacity: 1 !important;
}

:root {

   --color-dark-rgb: 24, 24, 26;
   --color-dark: rgba(var(--color-dark-rgb), 1);
   --color-dark: #ffffff;
   --color-light-rgb: 255, 255, 255;
   --color-light: rgba(var(--color-light-rgb), 1);
   --color-white: #FFFFFF;
   --color-black-rgb: 0, 0, 0;
   --color-black: rgba(var(--color-black-rgb), 1);
   // --color-primary: #70ff4d;
   --color-primary:  #FFC31B;
   --color-primary-dark: #65f242;
   --color-gray: #828282;
   --color-darkgray-rgb: 30, 30, 32;
   --color-darkgray: rgba(var(--color-darkgray-rgb), 1);
   --color-lightgray: #e4e4e4;

   --color-border: rgba(var(--color-dark-rgb), 0.2);
   --color-border-light: rgba(var(--color-light-rgb), 0.25);

   --color-text: rgba(var(--color-dark-rgb), 0.7);
   --color-text-light: rgba(var(--color-light-rgb), 0.7);

   --color-alert-error: #ff213e;
   --color-alert-success: var(--color-primary);

   --animation-primary: 0.4s cubic-bezier(.75, 0, .25, 1);
   --animation-primary: 0.4s cubic-bezier(0.5, 0.75, 0, 1);
   --animation-thumb: 0.4s cubic-bezier(0.5, 0, .25, 1);
   --animation-smooth: 0.7s cubic-bezier(0.5, 0.5, 0, 1);

   --section-padding-big: min(10vw, 10em);
   --section-padding: min(8vw, 8em);
   --section-padding-medium: min(6vw, 6em);
   --section-padding-small: min(3.5vw, 3.5em);
   --container-padding: min(4vw, 4em);
   /* --container-padding: min(6vw, 6em); */
   --gap-padding: min(4vw, 4em);

   --title-size: clamp(5em, 7.5vw, 7.5em);
   --border-radius: 4vh;

}

nav {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: transparent;
   pointer-events: none;
   z-index: 900;

}

nav .nav-links {
   position: absolute;
   top: 0;
   width: 100%;
   padding: var(--section-padding-small) var(--gap-padding) 1em var(--gap-padding);
   z-index: 10;
}

.nav-links-back {
   height: 10em;
   background: linear-gradient(0deg, rgba(var(--color-dark-rgb), 0) 0%, rgba(var(--color-dark-rgb), 1) 100%);
   z-index: 10;
   background: linear-gradient(to bottom, rgba(var(--color-dark-rgb), 1) 0%, rgba(var(--color-dark-rgb), 0.738) 19%, rgba(var(--color-dark-rgb), 0.541) 34%, rgba(var(--color-dark-rgb), 0.382) 47%, rgba(var(--color-dark-rgb), 0.278) 56.5%, rgba(var(--color-dark-rgb), 0.194) 65%, rgba(var(--color-dark-rgb), 0.126) 73%, rgba(var(--color-dark-rgb), 0.075) 80.2%, rgba(var(--color-dark-rgb), 0.042) 86.1%, rgba(var(--color-dark-rgb), 0.021) 91%, rgba(var(--color-dark-rgb), 0.008) 95.2%, rgba(var(--color-dark-rgb), 0.002) 98.2%, rgba(var(--color-dark-rgb), 0) 100%);
   opacity: .5;
   pointer-events: none;
}

nav .nav-links-wrapper {
   position: relative;
   width: 100%;
   z-index: 5;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 3em;
}

nav .nav-links-wrapper>* {
   pointer-events: all;
}

nav.theme-nav-transitioning .nav-links-wrapper>* {
   pointer-events: none;
}

@media screen and (max-width: 1024px) {

   nav .nav-links {
      padding: var(--section-padding-small) var(--container-padding);
   }
}

/* ------------------------- Nav Logo -------------------------------------------------- */

nav .nav-links .logo {
   height: 1.5em;
   position: absolute;
   transform: translateY(-7.5%) rotate(0.001deg);
   left: 0;
   transition: transform var(--animation-primary);
}

/* @media (hover: hover) {
 nav .nav-links .logo:hover {
    transform: translateY(-7.5%) scale(0.95) rotate(0.001deg);
 }
} */

nav .nav-links .logo svg {
   width: unset;
   height: 50px;
   margin-top: -18%;

}

nav.theme-nav-dark .logo svg path {
   fill: var(--color-light);
   transition: fill 0.2s ease-in-out, transform var(--animation-smooth);
}

nav.theme-nav-light .logo svg path,
nav.theme-nav-transitioning .logo svg path {
   fill: var(--color-dark);
   transition: fill 0.2s ease-in-out, transform var(--animation-smooth);
}

/* Nav Not Scrolled */

nav .logo svg {
   position: relative;
   overflow: hidden;
   transform: translateX(0%) rotate(0.001deg);
   transition: transform var(--animation-smooth);
}




/* ------------------------- Nav - Center -------------------------------------------------- */

nav .ul-desktop {
   display: flex;
   align-items: center;
   gap: 0.5em;
   overflow: hidden;
   padding: 0.5em 0;
}

nav.scroll-scrolled .ul-desktop {
   pointer-events: none;
}

nav .ul-desktop .btn {
   transform: translateY(0%) rotate(0.001deg);
   transition: transform var(--animation-smooth);
}

nav.theme-nav-dark ul li.btn.btn-link .btn-original-text span {
   color: var(--color-light);
   transition: color 0.2s ease-in-out;
}

nav.theme-nav-light ul li.btn.btn-link span,
nav.theme-nav-transitioning ul li.btn.btn-link .btn-original-text span {
   color: var(--color-dark);
   transition: color 0.2s ease-in-out;
}

nav.theme-nav-dark ul li.btn.btn-link .btn-duplicate-fill {
   background-color: var(--color-primary);
}

nav.theme-nav-light ul li.btn.btn-link .btn-duplicate-fill,
nav.theme-nav-transitioning ul li.btn.btn-link .btn-duplicate-fill {
   background-color: var(--color-dark);
}

nav.theme-nav-light ul li.btn.btn-link .btn-duplicate-text span,
nav.theme-nav-transitioning ul li.btn.btn-link .btn-duplicate-text span {
   color: var(--color-light);
}

/* Scrolled */

.scroll-scrolled .ul-desktop .btn {
   transform: translateY(-150%) rotate(0.001deg);
}

nav .ul-desktop .btn:nth-child(2) {
   transition-delay: 0.05s;
}

nav .ul-desktop .btn:nth-child(3) {
   transition-delay: 0.1s;
}

nav .ul-desktop .btn:nth-child(4) {
   transition-delay: 0.15s;
}

nav .ul-desktop .btn:nth-child(5) {
   transition-delay: 0.2s;
}

@media screen and (max-width: 1024px) {

   nav .ul-desktop {
      display: none;
   }
}


/* ------------------------- Nav - Wrap Right Corner -------------------------------------------------- */

.wrap-right-corner {
   right: 0;
   position: absolute;
   height: 4em;
   display: flex;
   align-items: center;
   overflow: hidden;
   min-width: 7em;
   pointer-events: none;
}

.wrap-right-corner>* {
   pointer-events: all;
}

/* ------------------------- Nav - Contact -------------------------------------------------- */

.btn.btn-contact {
   position: absolute;
   right: 0;
}

nav .btn.btn-contact .btn-fill {
   left: unset;
   right: 0;
}

nav .btn.btn-contact .btn-text {
   overflow: hidden;
   padding: 0;
   margin: 0 1.25em;
}

nav .btn.btn-contact .btn-duplicate-text {
   justify-content: flex-start;
}

nav.theme-nav-dark .btn.btn-contact .btn-duplicate-fill {
   background-color: var(--color-primary);
}

nav.theme-nav-light .btn.btn-contact .btn-duplicate-fill,
nav.theme-nav-transitioning .btn.btn-contact .btn-duplicate-fill {
   background-color: var(--color-dark);
}

nav.theme-nav-dark .btn.btn-contact .btn-duplicate-text span {
   color: var(--color-dark);
}

nav.theme-nav-light .btn.btn-contact .btn-duplicate-text span,
nav.theme-nav-transitioning .btn.btn-contact .btn-duplicate-text span {
   color: var(--color-light);
}

.btn.btn-contact .btn-duplicate-text span {
   color: var(--color-light);
}
.btn-original-text  {
   /* text-decoration: underline; */
   position: relative;
   &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      border-bottom: 2px solid $color-primary-orange;
      text-decoration: underline;
   }
}
nav.theme-nav-dark .btn-contact .btn-original-text span {
   color: var(--color-light);
   transition: color 0.2s ease-in-out;
   
}

nav.theme-nav-dark .btn-contact .btn-original-fill {
   border: 1.5px solid rgba(var(--color-light-rgb), 0.3);
}

nav.theme-nav-light .btn-contact .btn-original-text span,
nav.theme-nav-transitioning .btn-contact .btn-original-text span {
   color: var(--color-dark);
   transition: color 0.2s ease-in-out;
}

nav.theme-nav-light .btn-contact .btn-original-fill,
nav.theme-nav-transitioning .btn-contact .btn-original-fill {
   border: 1.5px solid rgba(var(--color-dark-rgb), 0.3);
}

nav.scroll-scrolled .btn.btn-contact {
   pointer-events: none;
}

nav.scroll-scrolled .btn.btn-contact .btn-fill {
   width: 3em;
}

nav .btn.btn-contact .btn-text .extra-layer {
   transition: transform var(--animation-primary) 0s, opacity var(--animation-primary) 0s;
   transform: translateX(0%) scale(1) rotate(0.001deg);
   opacity: 1;
}

nav.scroll-scrolled .btn.btn-contact .btn-text .extra-layer {
   opacity: 0;
   position: relative;
   transform: translateX(50%) scale(1) rotate(0.001deg);
}

@media screen and (max-width: 1024px) {

   .btn.btn-contact {
      display: none;
   }

}

/* ------------------------- Nav - Hamburger -------------------------------------------------- */

nav .hamburger-wrap {
   position: absolute;
   right: 0;
   padding: 0.75em 0;
   transform: translateY(0%) scale(0) rotate(0.001deg);
   transition: transform var(--animation-smooth) 0s;
}

nav.nav-mobile-active .hamburger-wrap {
   transform: translateY(0%) scale(1) rotate(0.001deg);
}

nav .hamburger {
   display: flex;
   height: 3em;
   width: 3em;
   background-color: var(--color-light);
   position: relative;
   right: 0;
   border-radius: 50%;
   transition: var(--animation-smooth), background-color 0.2s ease-in-out;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   transform: translate(0%, 0%) rotate(0.001deg);
   cursor: pointer;
   top: 0;
}

nav.theme-nav-light .hamburger,
nav.theme-nav-transitioning .hamburger {
   background-color: var(--color-dark);
}

nav.nav-mobile-active .hamburger {
   transform: translate(-0.9em, 0.9em) rotate(0.001deg);
}

nav .hamburger .hamburger-bar {
   position: absolute;
   width: 40%;
   height: 1.5px;
   background-color: var(--color-dark);
   transition: var(--animation-smooth), background-color 0.2s ease-in-out;
}

nav .hamburger .hamburger-bar:nth-child(1) {
   transform: translateY(-0.15em) rotate(0.001deg);
}

nav .hamburger .hamburger-bar:nth-child(2) {
   transform: translateY(0.15em) rotate(0.001deg);
}

nav.nav-mobile-active .hamburger .hamburger-bar:nth-child(1) {
   transform: translateY(0em) rotate(45deg);
}

nav.nav-mobile-active .hamburger .hamburger-bar:nth-child(2) {
   transform: translateY(0em) rotate(-45deg);
}

nav.theme-nav-light .hamburger .hamburger-bar,
nav.theme-nav-transitioning .hamburger .hamburger-bar {
   background-color: var(--color-light);
}

/* Scrolled */

nav.scroll-scrolled .hamburger-wrap {
   transform: translateY(0%) scale(1) rotate(0.001deg);
}


@media (hover: hover) {
   nav .hamburger:hover .hamburger-bar:nth-child(1) {
      transform: translateY(0.15em) rotate(0.001deg);
   }

   nav .hamburger:hover .hamburger-bar:nth-child(2) {
      transform: translateY(-0.15em) rotate(0.001deg);
   }

   nav.nav-mobile-active .hamburger:hover .hamburger-bar:nth-child(1) {
      transform: translateY(0em) rotate(45deg) scaleX(1.2);
   }

   nav.nav-mobile-active .hamburger:hover .hamburger-bar:nth-child(2) {
      transform: translateY(0em) rotate(-45deg) scaleX(1.2);
   }

}

@media screen and (max-width: 1024px) {
   nav .hamburger-wrap {
      transform: translateY(0%) scale(1) rotate(0.001deg);
   }
}

/* ------------------------- Nav - Modal Mobile -------------------------------------------------- */


nav .modal-nav-mobile {
   top: var(--section-padding-small);
   bottom: var(--section-padding-small);
   left: var(--container-padding);
   right: var(--container-padding);
   z-index: 5;
   position: fixed;
   display: flex;
   align-items: flex-start;
   justify-content: flex-end;
   pointer-events: none;
   height: 100vh;
}

nav .modal-nav-mobile .modal-block {
   border-radius: 1.5em;
   padding: 0.25em 0.75em;
   pointer-events: none;
   position: relative;
   border-radius: 1.5em;
}

nav.nav-mobile-active .modal-nav-mobile .modal-block {
   pointer-events: all;
}

nav .modal-nav-mobile .modal-block-background {
   background-color: var(--color-light);
   border-radius: 1.5em;
   transition: all var(--animation-smooth), background-color 0.2s ease-in-out, transform var(--animation-smooth) 0s;
   position: absolute;
   right: 0;
   top: 0;
   width: 3em;
   height: 3em;
   transform: scale(0) rotate(0.001deg);
}

nav.scroll-scrolled .modal-nav-mobile .modal-block-background {
   transform: scale(1) rotate(0.001deg);
}

nav.theme-nav-light .modal-nav-mobile .modal-block-background,
nav.theme-nav-transitioning .modal-nav-mobile .modal-block-background {
   background-color: var(--color-dark);
}

nav.nav-mobile-active .modal-nav-mobile .modal-block-background {
   width: 100%;
   height: 100%;
   transform: scale(1) rotate(0.001deg);
}

nav .modal-nav-background {
   z-index: 4;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(var(--color-black-rgb), 0.5);
   position: fixed;
   transition: var(--animation-smooth);
   visibility: hidden;
   opacity: 0;
   pointer-events: all;
}

nav.nav-mobile-active .modal-nav-background {
   visibility: visible;
   opacity: 1;
}

@media (hover: hover) {
   .modal-nav-background {
      background: rgba(var(--color-black-rgb), 0.5);
   }
}

nav .modal-nav-mobile .ul-mobile {
   position: relative;
   display: flex;
   flex-direction: column;
   transform: translateY(0) scale(0.1) rotate(0.001deg);
   transition: all var(--animation-smooth);
   transform-origin: top right;
   padding: 1.5em 1.7em 1.5em 1.4em;
   opacity: 0;
}

nav.nav-mobile-active .ul-mobile {
   transform: translateY(0) scale(1) rotate(0.001deg);
   opacity: 1;
}

@media (hover: hover) {

   nav.scroll-scrolled.nav-mobile-active .ul-mobile {
      transform: translateY(0) scale(1) rotate(0.001deg);
      opacity: 1;
   }
}

nav .ul-mobile li a>span {
   font-size: calc(var(--title-size) * 0.25);
   color: var(--color-dark);
   transition: all var(--animation-smooth), color 0.2s ease-in-out;
   font-weight: 450;
   position: relative;
   display: block;
   padding-right: 1em;
}

nav .ul-mobile li a>span::before {
   content: "";
   position: absolute;
   right: 0;
   top: 50%;
   transform: translate(calc(50%), -10%) scale(0) rotate(0.001deg);
   width: 0.3em;
   height: 0.3em;
   border-radius: 0.15em;
   background-color: var(--color-dark);
   transition: all var(--animation-smooth), transform var(--animation-primary), background-color 0.2s ease-in-out;
}

nav .ul-mobile li a>span .count {
   font-size: 0.5em;
   font-weight: 500;
   margin-left: 0.3em;
   transform: translateY(-50%);
   display: inline-block;
}

nav.theme-nav-light .ul-mobile li a>span::before,
nav.theme-nav-transitioning .ul-mobile li a>span::before {
   background-color: var(--color-primary);
}

nav .modal-nav-mobile .ul-mobile .modal-small-title {
   color: var(--color-dark);
   transform: translateY(0em);
   text-transform: uppercase;
   font-weight: 500;
   font-size: 0.8em;
   opacity: 0.5;
   margin-bottom: 0.75em;
   margin-top: 0.2em;
}

nav.theme-nav-light .modal-nav-mobile .ul-mobile .modal-small-title,
nav.theme-nav-transitioning .modal-nav-mobile .ul-mobile .modal-small-title {
   color: var(--color-light);
}


nav .modal-nav-mobile .ul-mobile a {
   display: block;
}

nav .ul-mobile li.active a {
   opacity: .4;
}

nav.theme-nav-light .ul-mobile li a>span,
nav.theme-nav-transitioning .ul-mobile li a>span {
   color: var(--color-light);
}

nav .ul-mobile li.active a>span::before {
   transform: translate(calc(50%), -10%) scale(1) rotate(0.001deg);
   background-color: var(--color-dark);
   opacity: 0.5;
}

nav.theme-nav-light .ul-mobile li.active a>span::before,
nav.theme-nav-transitioning .ul-mobile li.active a>span::before {
   background-color: var(--color-light);
}

@media (hover: hover) {
   nav .ul-mobile:hover li a>span::before {
      transform: translate(50%, -10%) scale(0) rotate(0.001deg);
   }

   nav .ul-mobile:hover li a:hover>span::before {
      transform: translate(50%, -10%) scale(1) rotate(0.001deg);
   }
}

@media screen and (max-width: 1024px) {
   nav .modal-nav-mobile .modal-block-background {
      transform: scale(1) rotate(0.001deg);
   }
}

@media screen and (max-width: 540px) {

   nav .ul-mobile li a>span {
      font-size: calc(var(--title-size) * 0.3);
   }

}



.btn-row {
   width: 100%;
   position: relative;
   display: flex;
}

#styleguide .btn-row {
   padding-top: 1em;
}

.btn {
   position: relative;
   border: 0;
   outline: 0;
}

.btn input {
   cursor: pointer;
}

.btn:last-child {
   margin-bottom: 0;
}

.btn-click {
   cursor: pointer;
   border: 0;
   background: transparent;
   border-radius: 2em;
   min-width: 1em;
   height: 2.75em;
   padding: 0;
   font-size: 1em;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   text-decoration: none;
   will-change: transform;
   outline: 0;
   transform: translateZ(0) rotate(0.001deg);
}

.btn-click:hover {
   cursor: pointer;
}

.btn-fill {
   background-color: transparent;
   position: absolute;
   width: 100%;
   height: 100%;
   border-radius: 2em;
   top: 0;
   left: 0;
   border: 1.5px solid rgba(var(--color-dark-rgb), 0.3);
   transition: var(--animation-primary), border 0.2s ease-in-out, background-color 0.2s ease-in-out;
   transform: translateY(0%) scale(1) rotate(0.001deg);
}

.btn-duplicate-fill {
   transform: translateY(100%) scale(0.8) rotate(0.001deg);
   background-color: var(--color-dark);
   border: 0;
}

.btn-text {
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   padding: 0 1.25em;
   position: relative;
   color: var(--color-dark);
   text-transform: uppercase;
   font-family: 'General Sans';
   transition: all var(--animation-primary);
   transform: translateY(0%) scale(1) rotate(0.001deg);
}

.btn-duplicate-text {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   transform: translateY(100%) scale(0.8) rotate(0.001deg);
   color: var(--color-light);
}

.btn-text span {
   position: relative;
   font-weight: 500;
   font-size: 0.9em;
   transition: color 0.2s ease-in-out;
}

/* Hover */

.btn:hover .btn-fill,
.btn.active .btn-fill {
   transform: translateY(0%) scale(0.8) rotate(0.001deg);
}

.btn:hover .btn-text,
.btn.active .btn-text {
   transform: translateY(-10%) scale(0.7) rotate(0.001deg);
   opacity: .5;
}

.btn:hover .btn-duplicate-fill,
.btn.active .btn-duplicate-fill {
   transform: translateY(0%) scale(1) rotate(0.001deg);
}

.btn:hover .btn-duplicate-text,
.btn.active .btn-duplicate-text {
   transform: translateY(0%) scale(1) rotate(0.001deg);
   opacity: 1;
}

/* Inactive */

.btn.inactive {
   cursor: not-allowed;
}

.btn.inactive .btn-click {
   pointer-events: none;
}

.btn.inactive .btn-fill {
   transform: translateY(0%) scale(1) rotate(0.001deg);
}

.btn.inactive .btn-text {
   opacity: 1;
   transform: translateY(0%) scale(1) rotate(0.001deg);
}

.btn.inactive .btn-duplicate-fill {
   transform: translateY(100%) scale(0.8) rotate(0.001deg);
}

.btn.inactive .btn-duplicate-text {
   opacity: 0;
   transform: translateY(100%) scale(0.8) rotate(0.001deg);
}

/* --- Button Negative --- */

.btn.btn-negative .btn-fill {
   border: 1.5px solid rgba(var(--color-light-rgb), 0.3);
}

.btn.btn-negative .btn-duplicate-fill {
   border: 0px;
   background-color: var(--color-primary);
}

.btn.btn-negative .btn-text {
   color: var(--color-light);
}

.btn.btn-negative .btn-duplicate-text {
   color: var(--color-dark);
}

/* --- Button Link --- */


.btn.btn-link .btn-fill {
   border: 0;
}

.btn.btn-link .btn-click {
   height: 1.75em;
}

.btn.btn-link .btn-text {
   padding: 0 0.66em;
}

.btn.btn-link .btn-duplicate-text {
   color: var(--color-dark);
}



@media screen and (min-width: 1440px) {}

@media screen and (max-width: 1024px) {

   :root {
      --section-padding-big: 15vw;
      --section-padding: 12vw;
      --section-padding-medium: 9vw;
      --section-padding-small: 6vh;
   }
}

@media screen and (max-width: 720px) {

   :root {
      --section-padding-big: 20vw;
      --section-padding: 16vw;
      --section-padding-medium: 12vw;
      --section-padding-small: 9vw;
   }
}


*,
*:after,
*:before {
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
}

li,
ul {
   padding: 0;
   margin: 0;
   list-style: none;
}</style>