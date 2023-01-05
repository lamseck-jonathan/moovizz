<template>
    <div 
    class="rounded-lg"
    :class="
    'movie-card-'+movieId,
    props.animated ? 'cursor-pointer' : ''"
    @click="detailMovie(movie.id)"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    v-if="props.movie.backdrop_path"
    >
        <img 
            class="rounded-sm shadow-xl" 
            :src="getImage(props.movie.poster_path)"
        />
    </div>
</template>

<script setup>
import { getImage } from '@/data/MovieDb.js'
import {gsap} from 'gsap'
import { useRouter } from 'vue-router'

const router = useRouter();
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
        scale:1.02,
    })
}

function mouseLeave(){
    if(props.animated === true)
    gsap.fromTo('.movie-card-'+props.movieId,{
        scale:1.02,
    },
    {
        scale:1,
    })
}

function detailMovie(id){
    router.push({name:'detailPage',params:{id: id}})
}

</script>