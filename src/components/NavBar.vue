<template>
    <div class="border-b border-slate-900 shadow-md 
    w-full p-5 grid grid-cols-12 gap-x-10 font-serif text-lg text-slate-200 "
    >
        <router-link
        to="/home"
        class="col-span-2 w-fit text-3xl font-mono uppercase font-black tracking-widest ">
            Moovizz
        </router-link>
        <div class="col-span-9 flex gap-16">
            <router-link
            to="/home"
            class="col-span-2 flex gap-4 w-fit hover:text-white hover:font-medium">
                <span>
                    <font-awesome-icon icon="fa-solid fa-home" /> 
                </span>
                Accueil
            </router-link>
            <router-link
            to="/home"
            class="col-span-2 flex gap-4 w-fit hover:text-white hover:font-medium">
                <span>
                    <font-awesome-icon icon="fa-solid fa-bolt-lightning" /> 
                </span>
                Populaire
            </router-link>
            <router-link
            to="/home"
            class="col-span-2 flex gap-4 w-fit hover:text-white hover:font-medium">
                <span>
                    <font-awesome-icon icon="fa-solid fa-film" /> 
                </span>
                Film
            </router-link>
        </div>
        <div class="col-span-1 w-fit">
            <SearchComponent></SearchComponent>
        </div>
    </div>
</template>

<script setup>
    import SearchComponent from '@/components/SearchComponent.vue'
</script>