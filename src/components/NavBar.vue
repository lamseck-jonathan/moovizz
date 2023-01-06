<template>
    <div class="absolute z-30 bg-transparent">
        <div class="w-full p-5 md:grid grid-cols-12 gap-x-10 font-serif text-lg text-indigo-200 hidden">
            <div
            @click="goHome"
            class="col-span-2 w-fit text-4xl font-mono uppercase font-black tracking-widest ">
                Moovizz
            </div>
            <div class="col-span-9 flex items-center gap-16 font-serif">
                <router-link
                :to="{name:'homePage'}"
                class="col-span-2 flex gap-4 w-fit hover:text-white hover:font-medium">
                    <span>
                        <font-awesome-icon icon="fa-solid fa-home" /> 
                    </span>
                    Accueil
                </router-link>
                <router-link
                :to="{name:'filmsPage'}"
                class="col-span-2 flex gap-4 w-fit hover:text-white hover:font-medium">
                    <span>
                        <font-awesome-icon icon="fa-solid fa-film" /> 
                    </span>
                    Film
                </router-link>
            </div>
            <div class="col-span-1 w-fit">
                <router-link :to="{name:'searchPage'}">
                    <SearchButton></SearchButton>
                </router-link>
            </div>
        </div>
        <div class="w-full pt-4 px-2 flex justify-between font-serif text-lg text-indigo-200 md:hidden">
            <div class="col-span-1">
                <MenuButton @click="menu"></MenuButton> 
            </div>
            <div
            @click="goHome"
            class="col-start-4 col-span-3 w-fit text-4xl font-mono uppercase font-black tracking-widest ">
                Moovizz
            </div>
            <div class="col-start-11 w-fit">
                <router-link :to="{name:'searchPage'}">
                    <SearchButton></SearchButton>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import SearchButton from '@/components/SearchButton.vue'
import { useRouter } from 'vue-router';
import MenuButton from './MenuButton.vue';

const router = useRouter()
const emit = defineEmits(['menu'])
function goHome(){
    router.push({name:'homePage'})
}

function menu(){
    emit('menu')
}
</script>