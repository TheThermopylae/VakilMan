<template>
  <section class="bg-white 2xl:w-3/5 rounded p-5">
    <div class="md:flex justify-between border-b pb3 mb-3">
      <h3 class="font-bold text-lg text-secondary">مشاوره حقوقی آنلاین</h3>
      <div class="relative flex text-sm justify-between mt-3 md:m-0">
        <button
          @click="currentTab = 0"
          class="ml-6 border-b-2 pb-3 -mb-[1px] transition-all text-[12px] xl:text-sm"
          :class="{
            'border-primary text-black': currentTab == 0,
            'text-gray-500 border-transparent': currentTab != 0
          }"
        >
          همه
        </button>
        <button
          @click="currentTab = 1"
          class="ml-6 border-b-2 pb-3 -mb-[1px] transition-all text-[12px] xl:text-sm"
          :class="{
            'border-primary text-black': currentTab == 1,
            'text-gray-500 border-transparent': currentTab != 1
          }"
        >
          پاسخ داده شده
        </button>
        <button
          @click="currentTab = 2"
          class="ml-6 border-b-2 pb-3 -mb-[1px] transition-all text-[12px] xl:text-sm"
          :class="{
            'border-primary text-black': currentTab == 2,
            'text-gray-500 border-transparent': currentTab != 2
          }"
        >
          نیازمند پاسخ
        </button>
        <button
          @click="currentTab = 3"
          class="border-b-2 pb-3 -mb-[1px] transition-all text-[12px] xl:text-sm"
          :class="{
            'border-primary text-black': currentTab == 3,
            'text-gray-500 border-transparent': currentTab != 3
          }"
        >
          رد شده
        </button>
      </div>
    </div>
    <div
      class="grid grid-cols-2 md:flex justify-between gap-5 md:gap-0 flex-wrap text-center items-center border-b pb-5 mb-5 last:p-0 last:m-0 last:border-0"
      v-for="item in 2"
      :key="item"
      v-if="currentTab !== 1"
    >
      <div>
        <h4 class="text-gray-500 mb-5">عنوان</h4>
        <span class="font-bold">رزرو مشاوره آنلاین</span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">تاریخ ثب</h4>
        <span class="font-bold">1402/07/26</span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">پاسخ دهنده</h4>
        <span class="font-bold">علی رضایی</span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">عملیات</h4>
        <NuxtLink
          to="/"
          class="bg-[#B1B1B1] flex m-auto text-white p-2 rounded items-center gap-3 w-fit"
        >
          مشاهده جزئیات
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.79688 1L0.796875 5.5L4.79688 10"
              stroke="white"
              stroke-width="1.58"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 justify-center text-center items-center"
      v-if="currentTab == 1"
    >
      <div>
        <h4 class="text-gray-500 mb-5">عنوان</h4>
        <span class="font-bold">رزرو مشاوره آنلاین</span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">تاریخ ثب</h4>
        <span class="font-bold">1402/07/26</span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">پاسخ دهنده</h4>
        <span class="font-bold">علی رضایی</span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">عملیات</h4>
        <NuxtLink
          to="/"
          class="bg-[#B1B1B1] flex m-auto text-white p-2 rounded items-center gap-3 w-fit"
        >
          مشاهده جزئیات
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.79688 1L0.796875 5.5L4.79688 10"
              stroke="white"
              stroke-width="1.58"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
let currentTab = ref(0)
</script>
