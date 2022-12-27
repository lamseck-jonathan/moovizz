<template>
    <div class="carousel relative overflow-hidden" style="width:600px;height:350px">
        <CarouselSlide 
        v-for="(item,index) in props.items" 
        :key="index"
        :index="index"
        :visible-slide="visibleSlide"
        :direction="direction"
        style="width:600px;height:350px"
        >
            <img 
                style="width:600px;height:350px;object-fit:cover" 
                :src="item.poster_path"
            />
        </CarouselSlide>
        <div class="text-white absolute right-1 mr-2 navigation" >
            <button class="right-button" @click="clickRight">
                <font-awesome-icon 
                    class="text-4xl" 
                    icon="fa-solid fa-chevron-right" 
                /> 
            </button>
        </div>
        <div class="text-white absolute left-1 ml-2 navigation" >
            <button class="left-button" @click="clickLeft">
                <font-awesome-icon 
                    class="text-4xl" 
                    icon="fa-solid fa-chevron-left" 
                /> 
            </button>
        </div>
    </div>
</template>

<script setup>
import CarouselSlide from './CarouselSlide.vue';
import { ref } from 'vue';

const props = defineProps({
    items:{
        type:Array,
        required:true
    }
})

const visibleSlide = ref(0)
const direction = ref('')

function clickLeft(){
    direction.value = 'left'

    if(visibleSlide.value > 0){
        visibleSlide.value--
    }
    else{
        visibleSlide.value = props.items.length - 1
    }
}
function clickRight(){
    direction.value = 'right'

    if(visibleSlide.value < props.items.length - 1){
        visibleSlide.value++
    }
    else{
        visibleSlide.value = 0
    }
}
</script>

<style>
    .navigation{
        top: calc(50% - 25px)
    }
</style>