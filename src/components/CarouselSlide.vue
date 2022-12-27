<template>
    <Transition :name="direction">
        <div v-show="props.visibleSlide === props.index" class="carousel-slide">
            <slot></slot>
        </div>
    </Transition>
</template>

<script setup>
const props = defineProps({
    visibleSlide : {
        type:Number
    },
    index:{
        type:Number,
        required:true
    },
    direction:{
        type:String,
        required:true
    }
})
</script>

<style>
.carousel-slide{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.left-enter-active{
    animation: leftInAnimation 0.5s ease-in-out;
}

.left-leave-active{
    animation: leftOutAnimation 0.5s ease-in-out;
}

.right-enter-active{
    animation: rightInAnimation 0.5s ease-in-out;
}

.right-leave-active{
    animation: rightOutAnimation 0.5s ease-in-out;
}

@keyframes rightOutAnimation {
    from { transform: translateX(0%);}
    to { transform: translateX(100%);}
}

@keyframes rightInAnimation {
    from { transform: translateX(-100%);}
    to { transform: translateX(0%);}
}

@keyframes leftOutAnimation {
    from { transform: translateX(0%);}
    to { transform: translateX(-100%);}
}

@keyframes leftInAnimation {
    from { transform: translateX(100%);}
    to { transform: translateX(0%);}
}

</style>