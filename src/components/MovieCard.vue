<template>
    <div 
    class="rounded-lg w-40 "
    :class="
    'movie-card-'+movieId,
    props.animated ? 'cursor-pointer' : ''
    "
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    >
        <img class="rounded-lg shadow-xl" :src="getImage(props.movie.poster_path)"/>
    </div>
</template>

<script setup>
import { getImage } from '@/data/MovieDb.js'
import {gsap} from 'gsap'

const props = defineProps({
    movie:{
        type:Object,
        required : true
    },
    movieId:{
        type:String,
        required:true
    },
    animated:{
        type:Boolean,
        default:false
    }
})

function mouseEnter(){
    if(props.animated === true)
    gsap.fromTo('.movie-card-'+props.movieId,{
        scale:1,
    },
    {
        scale:1.2,
    })
}

function mouseLeave(){
    if(props.animated === true)
    gsap.fromTo('.movie-card-'+props.movieId,{
        scale:1.2,
    },
    {
        scale:1,
    })
}
</script>