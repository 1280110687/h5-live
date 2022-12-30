<template>
  <div class="tab">
    <div
      class="tab_item"
      v-for="(item, index) in data.tabList"
      :key="index"
      :class="{ active: data.active == item.value }"
      @click="handleClickTab(item)"
    >
      <svg-icon :icon-class="item.icon" />
      <span :class="{ active: data.active == item.value }">{{
        item.label
      }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import { ITabList } from "@/common/interfaces";
import { useRouter } from "vue-router";

export default {
  name: "MobileTabBar",
  setup() {
    const router = useRouter();
    const data = reactive({
      tabList: [
        {
          label: "首页",
          value: "Home",
          icon: "home",
        },
        {
          label: "直播",
          value: "Live",
          icon: "live",
        },
        {
          label: "游戏",
          value: "Game",
          icon: "game",
        },
        {
          label: "我的",
          value: "Mine",
          icon: "mine",
        },
      ],
      active: "Home",
    });

    const methods = {
      handleClickTab(item: ITabList) {
        data.active = item.value;
        router.push({
          name: item.value,
        });
      },
    };

    return {
      data,
      ...methods,
    };
  },
};
</script>
<style lang="scss" scoped>
@keyframes scaleMove {
  0% {
    transform: scale(1);
  }
  12% {
    transform: scale(0.8);
  }
  24% {
    transform: scale(0.6);
  }
  36% {
    transform: scale(0.8);
  }
  48% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.2);
  }
  72% {
    transform: scale(1);
  }
  85% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scaleActive {
  0% {
    transform: scale(0);
    opacity: 0.2;
  }
  10% {
    transform: scale(0.1);
    opacity: 0.2;
  }
  20% {
    transform: scale(0.2);
    opacity: 0.2;
  }
  30% {
    transform: scale(0.3);
    opacity: 0.2;
  }
  40% {
    transform: scale(0.4);
    opacity: 0.2;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.2;
  }
  60% {
    transform: scale(0.6);
    opacity: 0.2;
  }
  70% {
    transform: scale(0.7);
    opacity: 0.2;
  }
  80% {
    transform: scale(0.8);
    opacity: 0.2;
  }
  90% {
    transform: scale(0.9);
    opacity: 0.2;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-top: 1px solid #efefef;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  &_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active {
      position: relative;
      animation: scaleMove 0.5s;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;
      color: #f00;
      .svg-icon {
        fill: #f00;
      }
      &::after {
        width: 70px;
        height: 70px;
        content: "";
        display: inline-block;
        background: #f00;
        opacity: 0;
        border-radius: 100px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -35px;
        margin-top: -35px;
        animation: scaleActive 0.25s;
        animation-direction: alternate;
        animation-timing-function: ease-in-out;
      }
    }
  }
}
</style>
