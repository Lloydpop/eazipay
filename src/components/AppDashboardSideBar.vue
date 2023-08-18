<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <img src="../assets/images/green2.png" />
    </div>
    <nav class="nav-items">
      <ul class="flex flex-col gap-10 mt-10 h-[300px] overflow-y-auto p-2">
        <li
          class="text-[14px] border-b-[1px] p-2 hover:text-[#EA4E4B] duration-[0.5s] cursor-pointer flex items-center gap-3 relative"
          v-for="link in navData"
          :key="link.title"
        >
          <img :src="link.icon" class="w-5" />
          <span>{{ link.title }}</span>
          <img src="../assets/images/ico.png" class="w-3 absolute right-0" />
        </li>
      </ul>
      <ul class="flex flex-col gap-10 pt-5 px-3 pb-4">
        <li
          class="text-[14px] hover:text-[#EA4E4B] p-2 duration-[0.5s] cursor-pointer flex items-center gap-3 relative border-b-[1px]"
          v-for="link in footerNav"
          :key="link.title"
        >
          <img :src="link.icon" class="w-5" />
          <span>{{ link.title }}</span>
          <img src="../assets/images/ico.png" class="w-3 absolute right-5" />
        </li>
      </ul>
    </nav>
    <DashboardHeader />
  </div>
</template>

<script>
import { navData, footerNav } from "../data/DashNaVData";
import DashboardHeader from "@/components/DashboardHeader.vue";
export default {
  name: "DashSidebar",
  components: {
    DashboardHeader,
  },
  data() {
    return {
      navData,
      footerNav,
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 270px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
}

.nav-items a:hover {
  opacity: 0.8;
}
</style>
