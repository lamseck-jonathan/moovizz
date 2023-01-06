<template>
    <TransitionFade>
        <div class="min-w-full min-h-screen flex justify-center items-center text-white text-4xl">
            <slot></slot>
        </div>
    </TransitionFade>
</template>

<script setup>
import TransitionFade from '@/components/TransitionFade.vue';

</script>

<style scoped>
    .loader{
        animation: 0.5s linear 1s infinite alternate disparition;
        transition: 0.5s;
    }
    .loading{
        animation: 1s linear 1s infinite alternate loading,disparition;
        transition: 0.5 s;
    }
    .circle{
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: #cde3ff;
    }
</style>