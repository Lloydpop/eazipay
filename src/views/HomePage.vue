<template>
  <div class="">
    <div class="gd">
      <Header></Header>
      <section class="grid grid-cols-12 gap-7 mt-12">
        <div
          class="lg:col-span-6 col-span-12 flex flex-col gap-4 lg:pl-[83px] px-10 text-center lg:text-start"
        >
          <h1
            class="lg:text-[64px] text-[43px] made-yellow leading-[3rem] lg:leading-none"
          >
            Run your <span class="text-[#b4a572]">easily </span>payroll in
            <span class="text-red-500">seconds</span>
          </h1>
          <p>
            We’ve built an all-inclusive simple solution for individual and
            businesses to manage staff, pay salaries, bills, and relevant taxes
            all at once. Start Using Free, Forever Download the Eazipay App
            Download on the Get on Appstore Google Play
          </p>
          <div class="w-[250px] mx-auto lg:mx-0">
            <AppButton> Start Using, Free Forever </AppButton>
          </div>
          <div class="mt-8">
            <h3 class="text-[16px]">Download the Eazipay app</h3>
            <div class="flex items-center justify-center lg:-mt-3">
              <img
                src="../assets/images/appstore.png"
                class="lg:w-[300px] w-[200px] lg:-ml-14"
              />
              <img
                src="../assets/images/google.png"
                class="lg:w-[300px] w-[200px] lg:-ml-14 -ml-7"
              />
            </div>
          </div>
        </div>
        <div
          class="lg:col-span-6 col-span-12 relative hero lg:block hidden"
        ></div>
      </section>
    </div>
    <!--individuals-->
    <section class="lg:mt-[120px] pat relative overflow-hidden">
      <img
        src="../assets/images/audience.png"
        class="absolute w-[full] h-full object-fill"
      />
      <div class="text-center">
        <Heading> For Individuals and Businesses </Heading>
        <p class="mt-4">Join 200+ businesses using Eazipay's easy solution.</p>
      </div>
      <div
        class="flex lg:p-6 pt-5 lg:justify-center relative flex-col lg:flex-row"
      >
        <div
          class="text-[12px] lg:w-[460px] w-[100%] card lg:last:-ml-[150px] mt-7"
          v-for="card in CardDetails"
          :key="card.title"
        >
          <AppCard>
            <h1 class="lg:text-[26px] text-[18px] capitalize font-semibold">
              {{ card?.title }}
            </h1>
            <p class="mt-4 leading-9 lg:text-[16px] text-[14px]">
              {{ card?.description }}
            </p>
          </AppCard>
        </div>
      </div>
      <!--Email-->
      <div class="flex justify-center mt-4 relative z-50">
        <p>
          We are happy to answer your queries. Please, reach us at
          <br class="lg:block hidden" />
          <a
            href="mailto:hello@myeazipay.com<"
            target="_blank"
            rel="noreferer"
            class="text-[#EA4E4B]"
            >hello@myeazipay.com</a
          >
          and expect our response shortly after.
        </p>
      </div>
    </section>
    <!--end of individual-->
    <!--how easy pay works-->
    <section class="flex justify-center flex-col items-center lg:mt-[120px]">
      <div class="text-center">
        <Heading> How eazipay works</Heading>
        <p class="mt-5">Get started in 3 simple steps.</p>
      </div>
      <div class="lg:w-[66%] w-[90%] mx-auto mt-10 relative">
        <div
          class="absolute -left-[4.5rem] top-[5rem] h-[450px] w-[450px] rounded-full bg-[#F0F7EB] border -z-[21] hidden lg:block p-5"
        >
          <div class="h-full w-full rounded-full bg-[#D9EBCD] p-4">
            <div class="h-full w-full rounded-full bg-[#11453B]"></div>
          </div>
        </div>
        <img src="../assets/images/works.png" class="w-full" />
      </div>
    </section>
    <!--end of how easypay works-->
    <!--free forever-->
    <section
      class="lg:p-[160px] p-10 gap-16 flex flex-col lg:flex-row items-center justify-between bg-[#D9D9D9] forever relative mt-16"
    >
      <div class="absolute top-0 left-30">
        <img src="../assets/images/download.png" width="50" alt="icon" />
      </div>
      <div class="flex flex-col gap-4">
        <h1
          class="text-[40px] lg:text-start text-center made-yellow mt-10 lg:mt-0"
        >
          Free forever for your <span class="text-red-500">payment salary</span>
        </h1>
        <div class="mt-5 lg:block hidden">
          <h3 class="text-[16px]">Download the Eazipay app</h3>
          <div class="flex items-center justify-center lg:-mt-3">
            <img
              src="../assets/images/appstore.png"
              class="lg:w-[300px] w-[200px] lg:-ml-[2rem]"
            />
            <img
              src="../assets/images/google.png"
              class="lg:w-[300px] w-[200px] lg:-ml-14 -ml-7"
            />
          </div>
        </div>
      </div>
      <div class="lg:w-[670px] relative">
        <img src="../assets/images/tech.png" class="w-[100%] h-[100%]" />
      </div>

      <div class="mt-5 lg:hidden block">
        <h3 class="text-[16px] text-center">Download the Eazipay app</h3>
        <div class="flex items-center justify-center lg:-mt-3">
          <img
            src="../assets/images/appstore.png"
            class="lg:w-[300px] w-[200px] lg:-ml-14"
          />
          <img
            src="../assets/images/google.png"
            class="lg:w-[300px] w-[200px] lg:-ml-14 -ml-7"
          />
        </div>
      </div>
    </section>
    <!--demo sign-->
    <section
      class="lg:px-[120px] pt-[6rem] gap-16 mt-4 flex justify-between flex-col lg:flex-row bg-[#fff] relative"
    >
      <div class="absolute top-10 -left-5 lg:block hidden">
        <img src="../assets/images/green.png" width="200" alt="icon" />
      </div>
      <div class="flex flex-col gap-4 lg:w-[500px] px-9 mt-[6.7rem]">
        <h1
          class="lg:text-[58px] text-[35px] made-yellow text-[#11453b] text-center lg:text-start"
        >
          Get an Exclusive Demo of Eazipay
        </h1>
        <p>
          Our greatest priority is to put you and your business first. Let’s
          show you how we can help.
        </p>
      </div>
      <div
        class="lg:w-[600px] w-[90%] m-auto p-5 relative box-shadow border-solid border-[#e7e8e7] border-[1px] rounded-lg"
      >
        <div class="text-center p-6">
          <h1 class="text-[24px] text-[#515215] font-semibold mb-2">
            First things first
          </h1>
          <p>
            We want to serve you better. Tell us a bit about yourself or company
          </p>
        </div>
        <AppTabs :tabs="tabs">
          <template
            v-for="(tab, index) in tabs"
            :key="index"
            v-slot:[tab.slotName]
          >
            <div class="flex-col flex gap-3 mt-3">
              {{ tab.content
              }}<AppInput id="fname" name="first" placeholder="First name" />
              <AppInput id="username" name="username" placeholder="Last name" />
              <AppInput id="mail" name="email" placeholder="Email" />
              <AppInput id="number" name="num" placeholder=" Phone number" />
              <AppButton :is-full-width="true"> Request demo </AppButton>
            </div>
          </template>
        </AppTabs>
      </div>
    </section>
    <!--footer-->
    <footer class="mt-[100px]">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import Header from "@/components/Header.vue";
import Heading from "@/components/Heading.vue";
import AppCard from "@/components/AppCard.vue";
import { CardDetails } from "../data/CardDetails";
import AppTabs from "@/components/AppTabs.vue";
import AppInput from "@/components/AppInput.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    AppButton,
    Heading,
    AppCard,
    AppTabs,
    AppInput,
    AppFooter,
  },
  data() {
    return {
      CardDetails,
      tabs: [
        {
          label: "Indiviual",
          slotName: "",
          content: "",
        },
        {
          label: "Company",
          slotName: "",
          content: "",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.card:nth-child(2) {
  margin-left: -150px;
}
.card:nth-child(2):hover {
  margin-left: -10px;
}
.card:nth-child(3):hover {
  margin-left: -10px;
}
.card {
  transition: 1s ease-in-out;
}
.box-shadow {
  box-shadow: 0 20px 48px hsla(0, 0%, 66.7%, 0.29);
}
.hero {
  height: 550px;
  background-image: url(../assets/images/frame.png);
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
}
.gd {
  background-image: url(../assets/images/gd.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.forever {
  background-color: #ffe9e7;
  background-image: url(../assets/images/pat.png);
  background-size: cover;
  background-position: 50%;
}
.pat {
  background-image: url(../assets/images/desk.png);
  background-size: cover;
  background-position: 50%;
  padding: 40px;
}

@media (max-width: 1024px) {
  .card:nth-child(2) {
    margin-left: 0px;
  }
}
</style>
