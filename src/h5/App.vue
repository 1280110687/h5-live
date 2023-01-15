<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheKeepAlive">
        <transition :name="animation">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
    <tab v-if="route.meta.isTab ?? true" />
  </div>
</template>
<script lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Tab from "@/components/MobileTabBar/index.vue";

export default {
  name: "App",
  components: {
    Tab,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const animation = ref("slide");
    const cacheKeepAlive = computed(() => store.state.HomeStore.cacheKeepAlive);

    watch(route, () => {
      animation.value = route.meta.index == 1 ? "slide-tight" : "slide-left";
    });

    return {
      cacheKeepAlive,
      animation,
      route,
    };
  },
};
</script>
<style lang="scss">
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-right-enter-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
