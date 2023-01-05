<template>
    <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="movie in props.movies" :key="movie">
          <MovieCard
            class="carousel__item"
            :movie="movie"
            :movie-id="'movie-'+movie.id"
            :animated="true"
          />
        </Slide>
    
        <template #addons>
          <Navigation class="color" />
        </template>
    </Carousel>
</template>

<script setup>
import MovieCard from '../components/MovieCard.vue';
import { ref,reactive,computed } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


const props = defineProps({
    movies:{
        type:Array,
        required:true
    }
})

const settings = reactive({
      itemsToShow: 2,
      snapAlign: 'center',
    })
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
const breakpoints= reactive({
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 7,
        snapAlign: 'start',
      }
})

</script>

<style lang="css">
    .carousel{
        overflow-x: hidden;
    }

    .carousel__icon {
        width: 1.2em;
        height: 1.2em;
        fill: white;
    }
</style>