<script>
import { HeaderLinks } from "../data/HeaderLinks";
import AppButtonVue from "./AppButton.vue";
import AppHambugar from "./AppHambugar.vue";
import AppSidebar from "@/components/AppSidebar.vue";
export default {
  name: "PageHeader",
  components: {
    AppButtonVue,
    AppHambugar,
    AppSidebar,
  },
  data() {
    return {
      HeaderLinks,
      isSidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
};
</script>

<template>
  <header class="lg:px-12 px-8 py-4 capitalize text-primary">
    <nav
      class="flex items-center gap-36 lg:justify-around justify-between relative"
    >
      <div class="flex lg:items-center gap-8">
        <img src="../assets/images/logo.png" class="w-[120px]" />
        <div>
          <ul class="lg:flex items-center gap-5 ml-4 hidden">
            <li
              class="text-[16px] hover:text-[#EA4E4B] duration-[0.5s] cursor-pointer"
              v-for="link in HeaderLinks"
              :key="link.name"
            >
              <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="absolute right-0 top-4 lg:hidden block">
        <AppHambugar @toggle-sidebar="toggleSidebar" />
      </div>
      <AppSidebar :visible="isSidebarVisible" @toggle-sidebar="toggleSidebar">
        <ul class="flex flex-col gap-8 mt-10">
          <li
            class="text-[16px] hover:text-[#EA4E4B] duration-[0.5s] cursor-pointer"
            v-for="link in HeaderLinks"
            :key="link.name"
          >
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
          <li class="text-[#EA4E4B]">Login</li>
        </ul>
        <div class="hover:translate-x-4 duration-[0.8s] mt-6">
          <AppButtonVue variant="primary" :is-full-width="true"
            >Register</AppButtonVue
          >
        </div>
      </AppSidebar>
      <div class="lg:flex items-center gap-10 hidden">
        <router-link
          to="/dashboard"
          class="w-[180px] hover:translate-x-4 duration-[0.8s]"
        >
          <AppButtonVue variant="outline" :is-full-width="true"
            >Login</AppButtonVue
          >
        </router-link>
        <div class="w-[180px] hover:translate-x-4 duration-[0.8s]">
          <AppButtonVue variant="primary" :is-full-width="true"
            >Register</AppButtonVue
          >
        </div>
      </div>
    </nav>
  </header>
</template>
