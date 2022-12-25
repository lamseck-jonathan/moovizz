<template>
    <div class="flex flex-row justify-center items-center carousel gap-2" >
        <div class="text-white absolute left-1 ml-8" >
            <button @click="clickLeft">
                <font-awesome-icon class="text-4xl" icon="fa-solid fa-arrow-left" /> 
            </button>
        </div>
        <div class="gap-4" v-for="(movie,index) in movieDisplayed" :key="index">
            <MovieCard 
            :movie-id="'popular-'+index" 
            :movie="movie"
            />
        </div>
        <div class="text-white absolute right-1 mr-8" >
            <button @click="clickRight">
                <font-awesome-icon class="text-4xl" icon="fa-solid fa-arrow-right" /> 
            </button>
        </div>
    </div>
    
</template>

<script setup>
import MovieCard from '../components/MovieCard.vue';
import { ref,computed } from 'vue';

const props = defineProps({
    movies:{
        type:Array,
        required:true
    }
})
const debutPagination = ref(0)
const navigationPagination = ref(7)
const finPagination = ref(7)
const movieDisplayed = computed(() => {
    return props.movies.filter((item,index) => 
    index >= debutPagination.value && 
    index <= finPagination.value
    )
})

function clickLeft(){
    if(debutPagination.value > 0){
        debutPagination.value -= navigationPagination.value;
        finPagination.value -= navigationPagination.value 
    }
    else{
        debutPagination.value = props.movies.length - navigationPagination.value;
        finPagination.value = props.movies.length
    }
}

function clickRight(){
    if(finPagination.value < props.movies.length){
        debutPagination.value += navigationPagination.value;
        finPagination.value += navigationPagination.value 
    }
    else{
        debutPagination.value = 0;
        finPagination.value = debutPagination.value + navigationPagination.value 
    }
    
}

</script>

<style lang="css">
    .carousel{
        overflow-x: hidden;
    }
</style>