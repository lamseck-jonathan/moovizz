<template>
    <div>
        <SearchBar v-model="searchKeyword"/>
        <div class="grid grid-cols-12 px-4">
            <LoadingPage v-if="loading" class="col-span-12 justify-center">
                <LoadingCircle class="-mt-8"></LoadingCircle>
            </LoadingPage>
            <div v-else class="col-span-12 grid grid-cols-12 gap-2 py-4">
                <MovieSearchCard 
                    class="col-span-6 sm:col-span-4 md:col-span-2"
                    v-for="(movie,index) in movies" 
                    :movieId="'search-'+index" 
                    :key="movie" 
                    :movie="movie"
                    animated
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import MovieSearchCard from '@/components/MovieSearchCard.vue';
import SearchBar from '@/components/SearchBar.vue';
import { searchMovies } from '@/data/MovieDb.js'
import { ref, watch } from 'vue';
import LoadingCircle from '@/components/LoadingCircle.vue';
import LoadingPage from '@/pages/LoadingPage.vue';

const searchKeyword = ref('')
const movies = ref()
const timer = ref()
const loading = ref(false)

watch(
    () => searchKeyword.value,
    () => 
    {
        if(searchKeyword.value.length > 2){
            loading.value = true
            clearTimeout(timer.value);
            timer.value = setTimeout(() => 
                searchMovies(searchKeyword.value).then(async (res) => 
                {
                    console.log(res.data.results)
                    movies.value = await res.data.results
                    loading.value = false
                }),
                3000
            )
        }
    }
)
</script>

<style>
    
</style>