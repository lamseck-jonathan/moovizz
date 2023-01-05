<template>
    <div  class="flex flex-col gap-10">
        <div class="flex justify-center items-center">
            <span ref="circle1" class="circle circle1 loading absolute"></span>
            <span ref="circle2" class="circle circle2 loading absolute"></span>
        </div>
        <p class="text-4xl pb-4 text-center font-mono 
        uppercase font-black tracking-widest text-indigo-200">
            {{props.text}}
        </p>
    </div>
</template>

<script setup>
import { onMounted,defineProps } from 'vue';
import gsap from 'gsap'

const props = defineProps({
    text:{
        type:String,
        default:''
    }
})

onMounted(() => {
    gsap.to('.circle1',{
        scale:3,
        repeat:-1,
        yoyo:true
    })
    gsap.to('.circle2',{
        scale:0,
        repeat:-1,
        yoyo:true
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
}

.circle1{
    background-color: #7dadd4;
    scale: 1.5;
    z-index: 2;
}
.circle2{
    background-color: #cde3ff;
    scale: 1;
    z-index: 3
}
</style>