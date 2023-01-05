<template>
  <div class="min-w-screen min-h-screen bg-theme">
      <router-view v-slot="{Component}">
        <Transition name="fade" mode="out-in">
            <Component :is="Component"/>
        </Transition>
      </router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
    transition: all 1s ease;
}

::-webkit-scrollbar{
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}
</style>
