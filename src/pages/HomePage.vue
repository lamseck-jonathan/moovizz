<template>
    <div class="min-h-screen flex justify-center items-center overflow-hidden bg">
        <div class="absolute bg-netflix">
          <img src="../assets/bg4.png"/>
        </div>
        <div class="grid gap-6 relative">
          <p class="text-4xl text-white text-center">
            Bienvenue sur 
            <span class="text-indigo-200 text-4xl font-mono 
            uppercase font-black tracking-widest">
              Moovizz
            </span>
          </p>  
          <p class="text-2xl text-white">
            La plateforme 
            <span class="text-indigo-300">streaming</span> 
            du moment ! Trouvez vos films preférées
          </p>
        </div>
      </div>
      <div class="mt-4 ">
        <p class="text-white text-2xl font-semibold pl-10 pb-8">Films Populaires</p>
          <MovieCarousel
          :movies="popularMovies"
          >
          </MovieCarousel>
      </div>
      <div class="mt-4">
          <div class="grid grid-cols-2">
            <div class="flex flex-col items-center">
              <p class="text-white text-3xl font-medium pt-20">
                Des moovizz à volontés
              </p>
              <p class="text-center text-white text-xl pt-10">
                Grâce à Moovizz, vous pourrez regarder vos series<br> 
                ou films préférés ,où vous le voulez
                , quand vous le voulez.<br>
                Regardez sur SmartTv, votre SmartPhone, votre PC
              </p>
              <button 
              class="bg-indigo-400 
              hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110
              text-white px-16 py-4 font-semibold rounded-lg uppercase mt-6
              transition ease-in-out delay-100
              ">
                S'inscrire
              </button>
            </div>
            <div>
                <img src="../assets/responsive2.png"/>
            </div>
          </div>
      </div>
    
</template>

<script setup>
import { getPopularMovie,getTopRatedMovie} from '@/data/MovieDb.js'
import { movies } from '@/data/movies';
import { ref,onBeforeMount } from 'vue';
import MovieCarousel from '@/components/MovieCarousel.vue';
import Carousel from '../components/Carousel.vue';

const popularMovies = ref();
const topRatedMovies = ref();

console.log(movies)

onBeforeMount(() => {
  getPopularMovie().then((res) => {
    popularMovies.value = res.data.results
    console.log('movieList onBeforeMount',popularMovies.value)
  })

  getTopRatedMovie().then((res) => {
    topRatedMovies.value = res.data.results
    console.log('movieList onBeforeMount',topRatedMovies.value)
  })
})
</script>

<style lang="css">
  .bg-image{
    height: 100%;
    background-image: url('../assets/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }

  .bg-netflix{
    transform : rotateY(-30deg) rotateX(30deg) scale(2) translateX(-10%);
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  }

  .bg{
    perspective: 2000px;
  }
</style>