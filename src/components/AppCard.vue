<template>
  <div
    class="bg-[#11453B] p-8 text-white shadow-box rounded-2xl flex flex-col gap-2 justify-center lg:h-[280px]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppCard",
};
</script>

<style lang="css" scoped>
.shadow-box {
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(217, 235, 205, 0.14) 0,
      rgba(217, 235, 205, 0.0266) 100%
    ),
    #11453b;
  box-shadow: 0 13px 20px hsla(0, 0%, 9%, 0.2),
    -11px 0 19px hsla(0, 0%, 9%, 0.3);
}
</style>
