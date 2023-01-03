<template>
    <TransitionFade>
        <div class="min-w-full min-h-screen flex justify-center items-center text-white text-4xl">
            <p 
            ref="logo"
            class="text-4xl pb-4 text-center font-mono 
            uppercase font-black tracking-widest text-indigo-200"
            >
              Loading
            </p>
            <div class="flex gap-4 pl-4">
                <span ref="circle1" class="circle circle1 loading"></span>
                <span ref="circle2" class="circle circle2 loading"></span>
                <span ref="circle3" class="circle circle3 loading"></span>
            </div>
        </div>
    </TransitionFade>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import gsap from 'gsap'
import TransitionFade from '@/components/TransitionFade.vue';

const circle1 = ref(null);
const circle2 = ref(null);
const circle3 = ref(null);
const logo = ref(null);

onMounted(() => {
    gsap.to('.circle',{
        y:-50,
        stagger: {
            each:0.2, 
            from: 'start',
            yoyo:true,
            yoyoEase:true,
            repeat: -1, 
        }
    })
})

</script>

<style>
    .loader{
        animation: 0.5s linear 1s infinite alternate disparition;
        transition: 0.5s;
    }
    .loading{
        animation: 1s linear 1s infinite alternate loading,disparition;
        transition: 0.5 s;
    }
    .circle{
        width: 20px;
        height: 20px;
        border-radius: 100%;
    }
    .circle1{
        background-color: #d3d0ff;
    }
    .circle2{
        background-color: #d3d0ff;
    }
    .circle3{ 
        background-color: #d3d0ff;
    }
</style>