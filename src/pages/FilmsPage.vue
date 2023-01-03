<template>
    <TransitionFade>
        <LoadingPage key="1" v-if="loading"></LoadingPage>
        <div v-else class="pt-20 pb-8">
            <MovieSection
            v-for="movie in movies" :key="movie"
            :title="movie.genre"
            :movies="movie.list"
            >
            </MovieSection>
        </div>
    </TransitionFade>
</template>

<script setup>
import { getGenres,getMoviesWithGenres } from '@/data/MovieDb.js'
import MovieSection from '@/components/MovieSection.vue';
import {ref,onBeforeMount} from 'vue'
import TransitionFade from '@/components/TransitionFade.vue';
import LoadingPage from './LoadingPage.vue';

const loading = ref(false)
const movies = ref([])

const genreToDisplay = ref([
    {
        id:28,
        name:'Action & Aventure'
    },
    {
        id:16,
        name:'Animation'
    },
    {
        id:10749,
        name:'Romance'
    },
    {
        id:10402,
        name:'Musique'
    },
    {
        id:10752,
        name:'Guerre'
    },
    {
        id:37,
        name:'Western'
    },
    {
        id:27,
        name:'Horreur & Frisson'
    },
])

onBeforeMount(async () => {
    loading.value = true
    await genreToDisplay.value.forEach(element => {
        getMoviesWithGenres(element.id).then((res) => {
            movies.value.push({
                genre:element.name,
                list: res.data.results
            })
        })
    });
    setTimeout(() => {loading.value = false},4000)
})

</script>