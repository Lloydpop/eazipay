<template>
  <div
    class="flex lg:items-center justify-around pb-5 flex-col-reverse lg:flex-row flex-col gap-7 px-10"
  >
    <div class="text-[#515251] flex flex-col gap-4">
      <img src="../assets/images/logo.png" class="w-[120px]" />
      <p class="leading-9">
        Copyright © 2023 Eazipay.<br />
        All rights reserved
      </p>
      <!--links-->
      <div class="flex items-center gap-5 mt-3">
        <a
          href=""
          class="w-[40px] h-[40px] rounded-full border flex items-center justify-center bg-[#5152511c]"
        >
          <span class="block">
            <img src="../assets/images/insta.png" width="20"
          /></span>
        </a>
        <a
          href=""
          class="w-[40px] h-[40px] rounded-full border flex items-center justify-center bg-[#5152511c]"
        >
          <span class="block">
            <img src="../assets/images/tweet.png" width="20"
          /></span>
        </a>
        <a
          href=""
          class="w-[40px] h-[40px] rounded-full border flex items-center justify-center bg-[#5152511c]"
        >
          <span class="block">
            <img src="../assets/images/in.png" width="20"
          /></span>
        </a>
        <a
          href=""
          class="w-[40px] h-[40px] rounded-full border flex items-center justify-center bg-[#5152511c]"
        >
          <span class="block">
            <img src="../assets/images/face.png" width="20"
          /></span>
        </a>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-10">
      <div class="lg:col-span-3 col-span-12">
        <h2 class="font-[600] text-[21px]">Products</h2>
        <ul class="flex flex-col gap-3 text-[#7C7C7C] mt-3">
          <li>Indidual</li>
          <li>Businesses</li>
          <li>Request Demo</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div class="lg:col-span-3 col-span-12">
        <h2 class="font-[600] text-[21px]">Legal</h2>
        <ul class="flex flex-col gap-3 text-[#7C7C7C] mt-3">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div class="lg:col-span-3 col-span-12">
        <h2 class="font-[600] text-[21px]">Resources</h2>
        <ul class="flex flex-col gap-3 text-[#7C7C7C] mt-3">
          <li>FAQs</li>
          <li>Blog</li>
          <li>Career</li>
          <li>Customer Stories</li>
        </ul>
      </div>
      <div class="lg:col-span-3 col-span-12">
        <h2 class="font-[600] text-[21px]">Contact us</h2>
        <ul class="flex flex-col gap-3 text-[#7C7C7C] mt-3">
          <li>
            <a href="mailto:eazipay@gmail.com">eazipay@gmail.com</a>
          </li>
          <li>+234 816 878 9518</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped></style>
