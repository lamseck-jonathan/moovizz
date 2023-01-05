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