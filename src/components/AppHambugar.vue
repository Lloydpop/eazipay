<template>
  <div class="flex flex-col gap-1 cursor-pointer" @click="toggleSidebar">
    <span class="w-[22px] h-[2px] bg-primary block"></span>
    <span class="w-[22px] h-[2px] bg-primary block"></span>
    <span class="w-[22px] h-[2px] bg-primary block"></span>
  </div>
</template>

<script>
export default {
  name: "AppHambugar",
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>

<style lang="scss" scoped></style>
