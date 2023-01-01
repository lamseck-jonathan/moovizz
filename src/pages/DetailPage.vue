<template>
    <div class="min-h-screen flex justify-center items-center overflow-hidden bg">
        <div class="absolute opacity-20 bg-netflix">
            <img :src="getImage(movie.backdrop_path)"/>
        </div>
        <div class="relative flex flex-col ">
            <div class="flex flex-row px-10 gap-8">
                <img 
                    class="rounded-lg"
                    style="width:300px; height:400 px" 
                    :src="getImage(movie.poster_path)" 
                />
                <div class="text-white pt-10">
                    <p class="text-white font-semibold text-3xl">
                        {{ movie.title }}
                    </p>
                    <p  class="flex flex-row gap-8 pt-4">
                        <span>
                            {{ movie.release_date}}
                        </span> 
                        <span v-for="genre in movie.genres" :key="genre">
                            <p>{{genre.name}}</p>
                        </span>
                    </p>
                    <p class=" pt-4 text-xl text-gray-300 italic">{{ movie.tagline }}</p>
                    <p class="text-2xl font-semibold pt-4">Overview</p>
                    <p class="text-white pt-4">{{ movie.overview}}</p>
                    <div class="text-white pt-8 flex flex-row gap-8">
                        <div>
                            <ButtonIcon
                            label="Notez"
                            >
                                <font-awesome-icon 
                                class="text-3xl" 
                                icon="fa-solid fa-star" 
                                /> 
                            </ButtonIcon>
                        </div>
                        <div>
                            <ButtonIcon
                            label="Ma liste"
                            >
                                <font-awesome-icon 
                                class="text-3xl" 
                                icon="fa-solid fa-play" 
                                /> 
                            </ButtonIcon>
                        </div>
                        <div>
                            <ButtonIcon
                            label="Telecharger"
                            >
                                <font-awesome-icon class="text-3xl"
                                 icon="fa-solid fa-download" 
                                 /> 
                            </ButtonIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="py-8">
        <p class="text-white text-2xl pl-4 pb-4">Films Similaires</p>
        <MovieCarousel :movies="similarMovies"></MovieCarousel>
    </div>
</template>

<script setup>
import { getDetailsMovie,getImage,getSimilarMovies } from '@/data/MovieDb.js'
import {emptyMovie} from '@/data/movies.js'
import {ref,onBeforeMount,watch} from 'vue'
import ButtonIcon from '../components/ButtonIcon.vue';
import MovieCarousel from '@/components/MovieCarousel.vue';
import { useRoute } from 'vue-router';

const movie = ref(emptyMovie)
const similarMovies = ref()
const route = useRoute()

onBeforeMount(async () => {
    await getDetailsMovie(route.params.id).then((res) => {
        console.log(res.data)
        movie.value = res.data
    })

    await getSimilarMovies(route.params.id).then((res) => {
        console.log('similar',res.data.results)
        similarMovies.value = res.data.results
    })
})

watch(() => route.params.id,
async newId =>{
    await getDetailsMovie(newId).then((res) => {
        movie.value = res.data
    })
    await getSimilarMovies(newId).then((res) => {
        similarMovies.value = res.data.results
    })
})
</script>

<style scoped lang="css">
.bg-netflix{
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
}
</style>