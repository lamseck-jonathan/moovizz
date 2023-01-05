<template>
    <TransitionFade>
        <LoadingPage key="1" v-if="loading">
            <LoadingCircle></LoadingCircle>
        </LoadingPage>
        <div key="2" v-else>
            <div class="min-h-screen flex justify-center md:items-center overflow-hidden bg">
                <div class="absolute opacity-50 bg-netflix w-full h-fit object-fill">
                    <img class="hidden md:block" :src="getImage(movie.backdrop_path)"/>
                    <img 
                        class="md:col-span-3 block md:hidden object-fill"
                        :src="getImage(movie.poster_path)" 
                    />
                </div>
                <div class="relative flex flex-col">
                    <div class="grid grid-cols-12 px-10 gap-8">
                        <img 
                            class="rounded-lg col-span-12 md:col-span-4 hidden md:block"
                            style="min-width:250px;width:300px; height:400px" 
                            :src="getImage(movie.poster_path)" 
                        />
                        <div class="text-white px-4 md:col-span-8 col-span-12">
                            <p class="text-white font-semibold text-3xl">
                                {{ movie.title }}
                            </p>
                            <div class="flex flex-row flex-wrap gap-3 md:gap-8 pt-4">
                                <span>
                                    {{ formatDate(movie.release_date)}}
                                </span> 
                                <div class="flex flex-row gap-2 md:gap-8">
                                    <span v-for="genre in movie.genres" :key="genre">
                                        <p>{{genre.name}}</p>
                                    </span>
                                </div>
                            </div>
                            <p class=" pt-4 text-xl text-gray-300 italic">{{ movie.tagline }}</p>
                            <div>
                                <p class="text-2xl font-semibold pt-4">Description :</p>
                                <p class="text-white pt-4 md:pr-16 sm:pr-4">
                                    {{ movie.overview ? movie.overview : 'Pas de Description' }}
                                </p>
                            </div>
                            
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
            <div class="py-8 ">
                <p class="text-white text-2xl pl-4 pb-4 px-10">Films Similaires</p>
                <MovieCarousel :movies="similarMovies"></MovieCarousel>
            </div>
        </div>
    </TransitionFade>
</template>

<script setup>
import { getDetailsMovie,getImage,getSimilarMovies } from '@/data/MovieDb.js'
import {emptyMovie} from '@/data/movies.js'
import {ref,onBeforeMount,watch} from 'vue'
import ButtonIcon from '@/components/ButtonIcon.vue';
import LoadingPage from '@/pages/LoadingPage.vue';
import MovieCarousel from '@/components/MovieCarousel.vue';
import { useRoute } from 'vue-router';
import TransitionFade from '../components/TransitionFade.vue';
import moment from 'moment'
import LoadingCircle from '@/components/LoadingCircle.vue';

const movie = ref(emptyMovie)
const similarMovies = ref()
const route = useRoute()
const loading = ref(false)

onBeforeMount(async () => {
    await fetchMovieData(route.params.id)
})

async function fetchMovieData(id){
    loading.value = true
    await getDetailsMovie(id).then((res) => {
        console.log(res.data)
        movie.value = res.data
    })
    await getSimilarMovies(id).then((res) => {
        console.log('similar',res.data.results)
        similarMovies.value = res.data.results
        
    })
    setTimeout(() => {loading.value = false},2000)
}

function formatDate(date){
    return moment(date).format('DD/MM/YYYY')
}

watch(() => route.params.id,
async newId =>{
    fetchMovieData(newId)
})
</script>

<style scoped lang="css">
.bg-netflix{
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
}
</style>