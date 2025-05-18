<template>
  <section class="bg-white rounded p-5 mt-5">
    <div class="md:flex gap-5 border-b pb3 mb-3">
      <h3 class="font-bold text-lg text-secondary">سفارش های من</h3>
      <div class="relative flex text-sm mt-3 md:m-0">
        <button
          @click="currentTab = 0"
          class="ml-6 border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 0,
            'text-gray-500 border-transparent': currentTab != 0
          }"
        >
          همه
        </button>
        <button
          @click="currentTab = 1"
          class="ml-6 border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 1,
            'text-gray-500 border-transparent': currentTab != 1
          }"
        >
          پاسخ داده شده
        </button>
        <button
          @click="currentTab = 2"
          class="border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 2,
            'text-gray-500 border-transparent': currentTab != 2
          }"
        >
          لغو شده
        </button>
      </div>
    </div>
    <div
      class="grid grid-cols-2 md:flex gap-5 md:gap-0 justify-between text-center items-center border-b pb-3 mb-3 last:border-0 last:pb-0 last:mb-0"
      v-if="currentTab == 0"
    >
      <div>
        <h4 class="text-gray-500 mb-5">شرح</h4>
        <span class="font-bold">رزرو مشاوره آنلاین</span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">تاریخ ثبت</h4>
        <span class="font-bold">1402/07/26</span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">وضعیت سفارش</h4>
        <span class="text-[#0F9F68] flex justify-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.967 7.05504L13.947 5.87004C13.752 5.64504 13.5945 5.22504 13.5945 4.92504V3.65004C13.5945 2.85504 12.942 2.20254 12.147 2.20254H10.872C10.5795 2.20254 10.152 2.04504 9.92703 1.85004L8.74203 0.830044C8.22453 0.387544 7.37703 0.387544 6.85203 0.830044L5.67453 1.85754C5.44953 2.04504 5.02203 2.20254 4.72953 2.20254H3.43203C2.63703 2.20254 1.98453 2.85504 1.98453 3.65004V4.93254C1.98453 5.22504 1.82703 5.64504 1.63953 5.87004L0.627031 7.06254C0.192031 7.58004 0.192031 8.42004 0.627031 8.93754L1.63953 10.13C1.82703 10.355 1.98453 10.775 1.98453 11.0675V12.35C1.98453 13.145 2.63703 13.7975 3.43203 13.7975H4.72953C5.02203 13.7975 5.44953 13.955 5.67453 14.15L6.85953 15.17C7.37703 15.6125 8.22453 15.6125 8.74953 15.17L9.93453 14.15C10.1595 13.955 10.5795 13.7975 10.8795 13.7975H12.1545C12.9495 13.7975 13.602 13.145 13.602 12.35V11.075C13.602 10.7825 13.7595 10.355 13.9545 10.13L14.9745 8.94504C15.4095 8.42754 15.4095 7.57254 14.967 7.05504ZM10.917 6.58254L7.29453 10.205C7.18906 10.3104 7.04609 10.3695 6.89703 10.3695C6.74797 10.3695 6.605 10.3104 6.49953 10.205L4.68453 8.39004C4.46703 8.17254 4.46703 7.81254 4.68453 7.59504C4.90203 7.37754 5.26203 7.37754 5.47953 7.59504L6.89703 9.01254L10.122 5.78754C10.3395 5.57004 10.6995 5.57004 10.917 5.78754C11.1345 6.00504 11.1345 6.36504 10.917 6.58254Z"
              fill="#54BD95"
            />
          </svg>
          انجام شده
        </span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">متخصص</h4>
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
      class="grid grid-cols-2 md:flex gap-5 md:gap-0 justify-between text-center items-center"
      v-if="currentTab == 0"
    >
      <div>
        <h4 class="text-gray-500 mb-5">شرح</h4>
        <span class="font-bold">رزرو مشاوره آنلاین</span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">تاریخ ثبت</h4>
        <span class="font-bold">1402/07/26</span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">وضعیت سفارش</h4>
        <span class="text-[#0F9F68] flex justify-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.967 7.05504L13.947 5.87004C13.752 5.64504 13.5945 5.22504 13.5945 4.92504V3.65004C13.5945 2.85504 12.942 2.20254 12.147 2.20254H10.872C10.5795 2.20254 10.152 2.04504 9.92703 1.85004L8.74203 0.830044C8.22453 0.387544 7.37703 0.387544 6.85203 0.830044L5.67453 1.85754C5.44953 2.04504 5.02203 2.20254 4.72953 2.20254H3.43203C2.63703 2.20254 1.98453 2.85504 1.98453 3.65004V4.93254C1.98453 5.22504 1.82703 5.64504 1.63953 5.87004L0.627031 7.06254C0.192031 7.58004 0.192031 8.42004 0.627031 8.93754L1.63953 10.13C1.82703 10.355 1.98453 10.775 1.98453 11.0675V12.35C1.98453 13.145 2.63703 13.7975 3.43203 13.7975H4.72953C5.02203 13.7975 5.44953 13.955 5.67453 14.15L6.85953 15.17C7.37703 15.6125 8.22453 15.6125 8.74953 15.17L9.93453 14.15C10.1595 13.955 10.5795 13.7975 10.8795 13.7975H12.1545C12.9495 13.7975 13.602 13.145 13.602 12.35V11.075C13.602 10.7825 13.7595 10.355 13.9545 10.13L14.9745 8.94504C15.4095 8.42754 15.4095 7.57254 14.967 7.05504ZM10.917 6.58254L7.29453 10.205C7.18906 10.3104 7.04609 10.3695 6.89703 10.3695C6.74797 10.3695 6.605 10.3104 6.49953 10.205L4.68453 8.39004C4.46703 8.17254 4.46703 7.81254 4.68453 7.59504C4.90203 7.37754 5.26203 7.37754 5.47953 7.59504L6.89703 9.01254L10.122 5.78754C10.3395 5.57004 10.6995 5.57004 10.917 5.78754C11.1345 6.00504 11.1345 6.36504 10.917 6.58254Z"
              fill="#54BD95"
            />
          </svg>
          انجام شده
        </span>
      </div>
      <div>
        <h4 class="text-gray-500 mb-5">متخصص</h4>
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
