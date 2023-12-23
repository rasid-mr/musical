<template>
    <div class="container_hori pot">

        <section class="panel panel_one">
            <div class="panel_img">
                <img src="../assets/horizontScroll.jpg" alt="">



            </div>
            <div class="text_hori">

                <h1>Lorem ipsum dolor sit.</h1>
                <div class="panel_content">
                    <p class="panel_content_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos commodi libero labore
                        veritatis
                        repellendus! Provident nemo quaerat exercitationem dolore impedit officiis quisquam placeat ad
                        mollitia
                        ratione ipsum aliquam consequatur quam, architecto aspernatur dolorem voluptate velit incidunt.
                        Consequatur, numquam libero. Ipsa dignissimos eius nemo magni porro mollitia eligendi dolor officia
                        quo
                        unde sapiente a quod, recusandae molestiae pariatur architecto? Minus.
                    </p>
                </div>
            </div>
        </section>
        <section class="panel panel_two">
            <div class="panel_img">
                <img src="../assets/horizontScroll.jpg" alt="">



            </div>
            <div class="text_hori">

                <h1>Lorem ipsum dolor sit.</h1>
                <div class="panel_content">
                    <p class="panel_content_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos commodi libero labore
                        veritatis
                        repellendus! Provident nemo quaerat exercitationem dolore impedit officiis quisquam placeat ad
                        mollitia
                        ratione ipsum aliquam consequatur quam, architecto aspernatur dolorem voluptate velit incidunt.
                        Consequatur, numquam libero. Ipsa dignissimos eius nemo magni porro mollitia eligendi dolor officia
                        quo
                        unde sapiente a quod, recusandae molestiae pariatur architecto? Minus.
                    </p>
                </div>
            </div>
        </section>
        <section class="panel purple panel_three">
            <div class="panel_img">
                <img src="../assets/horizontScroll.jpg" alt="">



            </div>
            <div class="text_hori">

                <h1>Lorem ipsum dolor sit.</h1>
                <div class="panel_content">
                    <p class="panel_content_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos commodi libero labore
                        veritatis
                        repellendus! Provident nemo quaerat exercitationem dolore impedit officiis quisquam placeat ad
                        mollitia
                        ratione ipsum aliquam consequatur quam, architecto aspernatur dolorem voluptate velit incidunt.
                        Consequatur, numquam libero. Ipsa dignissimos eius nemo magni porro mollitia eligendi dolor officia
                        quo
                        unde sapiente a quod, recusandae molestiae pariatur architecto? Minus.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>




<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    let sections = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container_hori",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".container_hori").offsetWidth
        }
    });


    sections.forEach(element => {

        gsap.from(element.querySelector('.panel_img'), {
            xPercent: 6,
            opacity: 0,
            ease: 'power4.out',
            duration: 1.7,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: element,
                start: 'top 80%',
                // scrub:true,
                // start: '30% 40%',

            }
        })
        gsap.from(element.querySelector('.text_hori'), {

            opacity: 0,
            ease: 'power4.out',
            duration: 1.2,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: element,
                start: 'top 60%',
                // scrub:true,
                // start: '30% 40%',

            }
        })


    });





})

</script>


<style scoped lang="scss">
.container_hori {
    width: 300%;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    background-color: $color-primary-blue;
}

.panel {
    height: 100vh;
    width: 100%;
    flex-grow: 1;
    display: grid;
    align-items: center;
    align-content: center;

    grid-auto-flow: column;
    gap: var(--size-fluid-6);

    @include respond(tab-port) {
        gap: var(--size-fluid-1);
        grid-auto-flow: row;
        // height: 70%;
    }

    & .text_hori {
        overflow: hidden;
        align-self: flex-start;

        & h1 {
            margin-top: 0;
            font-size: var(--font-size-fluid-2);
            color: $color-primary-orange;
            background-color: $color-white-primary;
            width: fit-content;
            padding: var(--size-fluid-1) var(--size-fluid-2);
            border-radius: 4px;
        }

        & p {
            color: $color-white-primary;
            
            @include respond(tab-port) {
                text-overflow: ellipsis;
                overflow: hidden;
    
                white-space: nowrap;


            }
            


        }
    }


    &_img img {
        width: var(--size-fluid-10);

        @include respond(tab-port) {
            width: var(--size-fluid-9);
        }
    }

}









.panel_content p {
    width: 50%;
   

    @include respond(tab-port) {
        width: 70%;
    }
}
</style>