<template>
  <div
    class="sidebar p-4 lg:hidden block shadow-md"
    :class="{ active: visible }"
  >
    <div class="flex justify-between items-center">
      <img src="../assets/images/logo.png" class="w-[120px] cursor-pointer" />
      <img
        src="../assets/images/xco.png"
        class="w-[24px] cursor-pointer"
        @click="toggleSidebar"
      />
    </div>
    <slot></slot>
  </div>
  <div
    class="bg-[#11453b6c] fixed top-0 left-0 w-full h-full transition-bg"
  ></div>
</template>

<script>
export default {
  name: "AppSidebar",
  props: {
    visible: Boolean,
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: -250px;
  z-index: 100000;
  transition: right 0.3s ease-in-out;
}

.sidebar.active {
  right: 0;
}
.transition-bg {
  z-index: -10;
  transition: 0.5s ease-in-out;
  display: none;
}
.sidebar.active + .transition-bg {
  z-index: 1000;
  display: block;
}
</style>
