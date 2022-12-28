<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheKeepAlive">
        <transition :name="animation">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  setup() {
    const store = useStore();
    console.warn(store.state, "store.state");
    const cacheKeepAlive = computed(() => store.state.HomeStore.cacheKeepAlive);

    return {
      cacheKeepAlive,
    };
  },
};
</script>
