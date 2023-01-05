<template>
    <div>
        <p class="text-white text-2xl font-semibold pl-10 pb-2">{{props.title}}</p>
        <MovieCarousel
        :movies="props.movies"
        >
        </MovieCarousel>
    </div>
</template>

<script setup>
import MovieCarousel from '@/components/MovieCarousel.vue';
import { defineProps } from 'vue';

const props = defineProps({
    title:{
        type:String,
        default:''
    },
    movies:{
        type:Array,
        default:[]
    }
})
</script>