<template>
    <Transition name="fade" mode="out-in">
        <slot></slot>
    </Transition>
</template>

<script setup>

</script>

<style scoped>
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
    transition: all 0.5s ease;
}
</style>