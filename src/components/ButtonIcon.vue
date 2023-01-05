<template>
    <button class="flex flex-col items-center gap-2">
        <slot></slot>
        <span>
            {{ props.label }}
        </span>
    </button>
</template>

<script setup>
const props = defineProps({
    label : {
        type:String,
        required:true
    },
})
</script>