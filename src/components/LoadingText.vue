<template>
    <div class="flex justify-center items-center">
        <p 
        ref="logo"
        class="text-4xl pb-4 text-center font-mono 
        uppercase font-black tracking-widest text-indigo-200"
        >
            {{text}}
        </p>
        <div class="flex gap-4 pl-4">
            <span ref="circle1" class="circle loading"></span>
            <span ref="circle2" class="circle loading"></span>
            <span ref="circle3" class="circle loading"></span>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap'

const props = defineProps({
    text:{
        type:String,
        default:'Loading'
    }
})

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


<style scoped>
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
        background-color: #cde3ff;
    }
</style>