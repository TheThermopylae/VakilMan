<template>
  <section class="py-16 relative my-20 bg-yellow-50/30">
    <div class="container m-auto">
      <svg
        width="56"
        height="89"
        viewBox="0 0 56 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-0 -translate-y-1/2 right-0"
      >
        <g opacity="0.1" clip-path="url(#clip0_1_1484)">
          <path
            d="M54.8 87.5698L98.1418 46.0935L56.6655 2.75165L13.3237 44.228L54.8 87.5698Z"
            fill="#FCC265"
          />
          <path
            d="M23.48 43.08L68.5 0L111.58 45.02L66.56 88.1L23.48 43.08ZM68.43 3.28L26.76 43.15L66.63 84.81L108.29 44.94L68.43 3.28Z"
            fill="#3D3D3D"
          />
          <path
            d="M0 43.08L45.02 0L88.1 45.02L43.08 88.1L0 43.08ZM44.95 3.28L3.28 43.15L43.15 84.81L84.81 44.94L44.95 3.28Z"
            fill="#3D3D3D"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1484">
            <rect width="111.58" height="88.1" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div
        class="relative before:content-[''] before:absolute before:w-[5px] before:bg-primary before:h-full before:bg-purple-c before:top-0 before:right-0 before:rounded-full lg:w-1/3"
      >
        <h2
          class="font-bold mb-3 text-2xl text-secondary relative before:content-[''] before:absolute before:w-[5px] before:bg-secondary before:h-full before:bg-purple-c before:top-0 before:right-0 pr-6 before:rounded-full"
        >
          تنظیم شکایت
        </h2>
        <p class="mr-6 text-[#6E6E6E] text-lg text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, libero
          illo neque amet iure eligendi!
        </p>
      </div>
      <div class="lg:flex mt-4 gap20 justify-between">
        <MainComplaintAccordion v-for="item in accordions" :key="item" class="lg:hidden">
          {{ item }}
        </MainComplaintAccordion>
        <MainComplaintTab
        class="hidden lg:block"
          :tab="showTab"
          @changeTab="changeTab"
        ></MainComplaintTab>
        <div class="w-7/12 flex-col justify-between hidden lg:flex">
          <div>
            <h3 class="font-extrabold text-2xl text-secondary mb-5">
              تنظیم دادخواست
            </h3>
            <p class="text-gray-500 text-justify text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحانلورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان
            </p>
          </div>
          <NuxtLink
            to="/"
            class="self-end px-10 py-3 rounded-lg bg-primary text-white"
            >درخواست دهید</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let accordions = ref([
  'تنظیم دادخواست',
  'تنظیم شکواییه',
  'تنظیم اظهارنامه',
  'تنظیم لاحیه'
])

let showTab = ref(0)

function changeTab (item) {
  showTab.value = item
}
</script>
