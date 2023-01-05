<template>
    <div class="min-w-full min-h-screen bg-slate-800">
        <Navbar @menu="openMenu" class="w-full"></Navbar>
        <TransitionFade>
            <Navlink @clicked="openMenu" v-if="menuState"></Navlink>
        </TransitionFade>
        <router-view></router-view>
    </div>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue'
import Navlink from '@/components/Navlink.vue';
import TransitionFade from '@/components/TransitionFade.vue';
import {ref} from 'vue'

const menuState = ref(false)

function openMenu(){
    menuState.value = !menuState.value
    console.log(menuState.value)
}
</script>

