



import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        :root {
          --font-size-fluid-0: clamp(.75rem, 1.5vw, 1rem);
          --font-size-fluid-1: clamp(1rem, 2vw, 1.5rem);
          --font-size-fluid-2: clamp(1.5rem, 3vw, 2.5rem);
          --font-size-fluid-3: clamp(2rem, 4vw, 3.5rem);
        }
        
        @function scaleValue($value, $ideal-viewport-width:1600) {
          @return calc(
            #{$value} * (clamp(350px, 100vw, 3840px) / #{$ideal-viewport-width})
          );
        }
        .cardHdeading {
          font-size: #{scaleValue(30)};
        }
        $nav-height:9rem;
        $color-primary-olive: #5F6F52;
        $color-primary-light-olive: #A9B388;
        $color-primary-pale-lemon: #FEFAE0;
        $color-primary-clay-rose:#B99470;
        
        $color-white: #fff;
        $color-black: #000;


        $space-left:1.56rem;
        $space-left-land:1.25rem;
        $space-left-port:1rem;
        $space-left-phone:1rem;

        

        @mixin respond($breakpoint) {
          @if $breakpoint == phone {
            @media only screen and (max-width: 37.5em) {
              @content;
            } //600px
          }
          @if $breakpoint == tab-port {
            @media only screen and (max-width: 56.25em) {
              @content;
            } //900px
          }
          @if $breakpoint == tab-land {
            @media only screen and (max-width: 75em) {
              @content;
            } //1200px
          }
          @if $breakpoint == big-desktop {
            @media only screen and (min-width: 112.5em) {
              @content;
            } //1800
          }
        }


        .pot {
          padding: 0 $space-left ;
          
          
          @include respond(tab-land) {
            padding: 0 $space-left-land;
          }
          @include respond(tab-port) {
            padding: 0 $space-left-port;
          }
          @include respond(phone) {
            padding: 0 $space-left-phone;
          }
        }
        
        `,
      },
    },
  },
});
