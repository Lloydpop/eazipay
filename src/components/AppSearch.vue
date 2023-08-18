<template>
  <div class="flex gap-2">
    <input
      type="text"
      class="block w-full outline-0 border-0 border-[2px] rounded-[6px] p-2 placeholder-text-gray-200"
      placeholder="Search employer"
    />
    <span
      class="bg-[#D9EBCD] block w-[70px] p-2 -ml-3 flex items-center justify-center rounded-r-[5px]"
    >
      <img src="../assets/images/search.png" class="w-5 mx-auto" />
    </span>
    <div
      class="bg-white p-2 rounded-md shadow-lg flex items-center justify-center gap-1"
    >
      <img src="../assets/images/equalizer.png" class="w-4" />
      <span class="text-[13px]">filter</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFillter",
};
</script>

<style lang="scss" scoped></style>
