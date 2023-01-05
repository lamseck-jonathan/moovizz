<template>
    <div class="flex flex-row justify-center items-center carousel gap-2" >
        <div class="gap-4 flex flex-row justify-center items-center ">
            <MovieCard 
                v-for="(movie,index) in movies" 
                :key="index"
                :movie-id="'popular-'+index" 
                :movie="movie"
                :id="'popular-'+index"
                :class="index == active ? 'text-white scale-110' : ''"
            />
        </div>
        <div class="text-white absolute left-1 ml-2" >
            <button @click="clickLeft">
                <font-awesome-icon 
                    class="text-4xl" 
                    icon="fa-solid fa-chevron-left" 
                /> 
            </button>
        </div>
        <div class="text-white absolute right-1 mr-2" >
            <button @click="clickRight">
                <font-awesome-icon 
                    class="text-4xl" 
                    icon="fa-solid fa-chevron-right" 
                /> 
            </button>
        </div>
    </div>
</template>

<script setup>
import MovieCard from '@/components/MovieCard.vue';
import { ref,computed } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    movies:{
        type:Array,
        required:true
    },
})

const active = ref(0);

function clickLeft(){
    if(active.value > 0){
        active.value--
        console.log(active.value)
    }
    else{
        active.value = props.movies.length -1 
    }
}

function clickRight(){
    if(active.value < props.movies.length-1){
        active.value++
        console.log(active.value)
    }
    else{
        active.value = 0
    }
}
</script>