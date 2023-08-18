<template>
  <div
    class="fixed top-0 w-full min-h-[100px] bg-white -z-10 pl-[300px] flex justify-between items-center shadow-lg pr-12"
  >
    <img src="../assets/images/logo.png" class="w-[90px]" />
    <div class="flex items-center gap-10">
      <img src="../assets/images/notify.png" class="w-7" />
      <div class="flex items-center gap-3">
        <img src="../assets/images/aged.png" class="w-[40px]" />
        <div>
          <h1 class="text-lg font-semibold">Nne Abasiama</h1>
          <p class="flex items-center gap-[64px]">
            Admin
            <img src="../assets/images/ico.png" class="w-3 -rotate-[90deg]" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardHeader",
};
</script>

<style lang="scss" scoped></style>
