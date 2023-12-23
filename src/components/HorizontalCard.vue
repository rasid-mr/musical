<template>
    <div id="hori_cards" class="container_card pot">

        <div class="card_hori">
            <header class="card_hori_header">
                <h2>
                    Lorem, ipsum.
                </h2>
            </header>
            <img src="../assets/horizontScroll.jpg" alt="">
            <div class="card_hori_content">
                Lorem ipsum dolor sit.
            </div>
        </div>
        <div class="card_hori">
            <header class="card_hori_header">
                <h2>
                    Lorem, ipsum.
                </h2>
            </header>
            <img src="../assets/horizontScroll.jpg" alt="">
            <div class="card_hori_content">
                Lorem ipsum dolor sit.
            </div>
        </div>
        <div class="card_hori">
            <header class="card_hori_header">
                <h2>
                    Lorem, ipsum.
                </h2>
            </header>
            <img src="../assets/horizontScroll.jpg" alt="">
            <div class="card_hori_content">
                Lorem ipsum dolor sit.
            </div>
        </div>
        <div class="card_hori">
            <header class="card_hori_header">
                <h2>
                    Lorem, ipsum.
                </h2>
            </header>
            <img src="../assets/horizontScroll.jpg" alt="">
            <div class="card_hori_content">
                Lorem ipsum dolor sit.
            </div>
        </div>
        <div class="card_hori">
            <header class="card_hori_header">
                <h2>
                    Lorem, ipsum.
                </h2>
            </header>
            <img src="../assets/horizontScroll.jpg" alt="">
            <div class="card_hori_content">
                Lorem ipsum dolor sit.
            </div>
        </div>
        <div class="card_hori">
            <header class="card_hori_header">
                <h2>
                    Lorem, ipsum.
                </h2>
            </header>
            <img src="../assets/horizontScroll.jpg" alt="">
            <div class="card_hori_content">
                Lorem ipsum dolor sit.
            </div>
        </div>
        <div class="card_hori">
            <header class="card_hori_header">
                <h2>
                    Lorem, ipsum.
                </h2>
            </header>
            <img src="../assets/horizontScroll.jpg" alt="">
            <div class="card_hori_content">
                Lorem ipsum dolor sit.
            </div>
        </div>

    </div>
</template>



<style lang="scss" scoped>
.container_card {
    display: grid;

    background-color: $color-primary-orange;
    gap: var(--size-fluid-3);
    height: 100vh;

    @include respond(tab-port) {
        justify-items: center;
    }



}

.card_hori {
    display: grid;
    background-color: $color-white-primary;
    width: fit-content;
    border-radius: 4px;
    gap: var(--size-fluid-1);
    padding: var(--size-fluid-1) var(--size-fluid-4);
    justify-items: center;

    & img {
        display: block;
        width: var(--size-fluid-9);
        border-radius: 4px;
    }

    & h2 {
        font-size: var(--font-size-fluid-2);
        margin: var(--size-fluid-2) 0;
    }

    & p {
        font-size: var(--font-size-fluid-0);
    }
}
</style>



<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);




    const tl = gsap.timeline();



    tl.to('#hori_cards', {
        scrollTrigger: {




            trigger: '#hori_cards',

            end: () => "+=" + document.querySelector(".container_hori").offsetWidth,
            pin: true,
            markers: true,
            id: "c360"



        }
    })
    const cards = document.querySelectorAll('.card_hori')
    const cardsNum = window.innerWidth / cards.length;
    const containerHori = document.querySelector(".container_hori").offsetWidth / cards.length






    ScrollTrigger.matchMedia({
        // large
        "(min-width: 900px)": function () {
            cards.forEach((e, i) => {



                let xt = i * cardsNum * .6
                let yt = i * cardsNum * 2
                gsap.fromTo(e, {
                    x: xt * 2, autoAlpha: 0
                }, {
                    x: xt, y: -yt, autoAlpha: 1, scrollTrigger: {
                        trigger: e,
                        // start:`${i * containerHori} top`,
                        markers: true,
                        id: '2',
                        scrub: true,
                    }
                })
            });
        },




        // small
        "(max-width: 900px)": function () {
            cards.forEach((e, i) => {



                let xt = i * cardsNum * .6
                let yt = i * cardsNum * 2
                gsap.fromTo(e, {
                     autoAlpha: 0
                }, {
                     y: 2 *-yt, autoAlpha: 1, scrollTrigger: {
                        trigger: e,
                        // start:`${i * containerHori} top`,
                        start:'clamp(top top)',
                        markers: true,
                        id: '2',
                        scrub: true,
                    }
                })
            });
        },


    });




})


</script>