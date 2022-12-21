<template>
    <div class="min-h-screen flex justify-center items-center">
      <div class="grid gap-6">
        <p class="text-3xl text-white text-center">
          Bienvenue sur 
          <span class="text-indigo-200 text-4xl font-mono 
          uppercase font-black tracking-widest">
            Moovizz
          </span>
        </p>  
        <p class="text-xl text-white">
          La plateforme <span class="text-indigo-300">streaming</span> du moment ! Trouvez vos films preférées
        </p>
      </div>
      <div v-for="movie in movieList" :key="movie">
          <p>{{movie}}</p>
      </div>
    </div>
</template>

<script setup>
import { getPopularMovie } from '@/data/MovieDb.js'
import ref from 'vue'

const movieList = ref();

getPopularMovie().then((res) => {
  movieList.value = res.data.results
})
console.log('movieList',movieList)

</script>

