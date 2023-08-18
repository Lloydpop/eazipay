<template>
  <div>
    <DashSidebar />
    <div
      class="content h-[100vh] overflow-y-auto pt-[130px] pl-[300px] pr-[30px]"
    >
      <h1 class="text-[30px] font-semibold">Welcome Abasiama</h1>
      <p>Pay and manage your employee in minutes</p>
      <section class="grid grid-cols-12 mt-10 gap-10">
        <div class="col-span-9">
          <div
            class="bg-[#11453B] p-8 rounded-[20px] flex justify-between text-white bg-g"
          >
            <div>
              <p>Wallet Balance</p>
              <h1 class="text-[26px] flex items-center gap-3">
                N12,560,078.00
                <img src="../assets/images/eye.png" class="w-6" />
              </h1>
            </div>
            <div>
              <AppButton variant="secondary"> Fund Wallet </AppButton>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4 mt-5">
            <div
              class="col-span-3 bg-white shadow-lg border rounded-[20px] p-8 flex flex-col items-center justify-center gap-3 text-center"
              v-for="item in card"
              :key="item.title"
            >
              <img :src="item.icon" class="w-6" />
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
        <div class="col-span-3 flex justify-end">
          <img src="../assets/images/dash.png" />
        </div>
      </section>
      <section class="mt-6">
        <img src="../assets/images/flow.png" />
      </section>
      <section>
        <h1 class="text-[30px] font-semibold">Recent Activities</h1>
        <SearchFillter />
        <div class="mb-5" v-for="item in description" :key="item.title">
          <h1 class="text-[18px] mt-5">{{ item.date }}</h1>
          <div
            class="bg-[bg-[#fff] shadow-lg rounded-lg px-10 mt-5 py-2 grid grid-cols-12 border gap-10"
          >
            <div class="col-span-3">
              <p class="text-[#8D8E8D] text-[12px]">PAYROLL</p>
              <div class="flex items-center gap-3 mt-2">
                <div
                  class="bg-[#01AA8C] w-[50px] h-[50px] rounded-full text-white flex items-center justify-center"
                >
                  N A
                </div>
                <p>{{ item.roll }}</p>
              </div>
            </div>
            <div class="col-span-3">
              <p class="text-[#8D8E8D] text-[12px]">PAYROLL</p>

              <p class="mt-4">{{ item.activity }}</p>
            </div>
            <div class="col-span-3">
              <p class="text-[#8D8E8D] text-[12px]">EMPLOYEE</p>

              <p class="mt-4">{{ item.employee }}</p>
            </div>
            <div class="col-span-3">
              <p class="text-[#8D8E8D] text-[12px]">Time</p>

              <p class="mt-4">{{ item.time }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import DashSidebar from "@/components/AppDashboardSideBar.vue";
import AppButton from "@/components/AppButton.vue";
import { card } from "../data/DashNaVData";
import { description } from "../data/Description";
import SearchFillter from "@/components/AppSearch.vue";
export default {
  name: "DashBoard",
  components: {
    DashSidebar,
    AppButton,
    SearchFillter,
  },
  data() {
    return {
      card,
      description,
    };
  },
};
</script>

<style lang="css" scoped>
.bg-g {
  background-image: url(../assets/images/bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
