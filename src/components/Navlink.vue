<template>

        <div class="m-auto grid grid-cols-1 w-full h-full content-center fixed z-20 bg-slate-800 font-serif text-2xl">
            <router-link @click="clicked" :to="{name:'homePage'}" class="basis-12 text-white font-medium text-center py-5">Accueil</router-link>
            <router-link @click="clicked" :to="{name:'filmsPage'}" class="basis-12 text-white font-medium text-center py-5">Films</router-link>
        </div>

</template>

<script setup>
const emit = defineEmits(['clicked'])
function clicked(){
    emit('clicked')
}
</script>