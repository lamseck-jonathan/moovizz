<template>
    <div class="rounded-lg w-40 cursor-pointer">
        <img class="rounded-sm" :src="getImage(movie.poster_path)"/>
    </div>
</template>

<script setup>
import { getImage } from '@/data/MovieDb.js'
defineProps({
    movie:{
        type:Object,
        required : true
    }
})
</script>