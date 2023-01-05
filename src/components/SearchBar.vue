<template>
    <div class="w-full p-5 grid grid-cols-12 gap-x-10 font-serif text-lg text-indigo-200">
        <a @click="router.back()" class="col-span-1">
            <div style="width:35px" class="text-black bg-white rounded-full flex justify-center p-2 cursor-pointer">
                <font-awesome-icon icon="fa-solid fa-chevron-left" /> 
            </div>
        </a>
        <div class="col-span-6 col-start-3 sm:col-start-4 md:col-span-6 md:col-start-4">
            <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="search" 
            type="text" 
            placeholder="Chercher un film"
            :value="props.modelValue"
            @input="updateValue"
            >
        </div>
        
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
    modelValue:{
        type:String,
        default:''
    }
})
const emit = defineEmits(['update:modelValue'])

function updateValue(evt){
    emit('update:modelValue',evt.target.value)
}
</script>