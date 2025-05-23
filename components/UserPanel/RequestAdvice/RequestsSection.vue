<template>
  <section class="bg-white rounded p-5 pb-0 mt-5 overflow-hidden">
    <div class="md:flex gap-5 border-b pb3 mb-3">
      <div class="relative flex gap-5 md:gap-10 text-sm mt-3 md:m-0">
        <button
          @click="currentTab = 0"
          class="border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 0,
            'text-gray-500 border-transparent': currentTab != 0
          }"
        >
          همه
        </button>
        <button
          @click="currentTab = 1"
          class="border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 1,
            'text-gray-500 border-transparent': currentTab != 1
          }"
        >
          درحال بررسی
        </button>
        <button
          @click="currentTab = 2"
          class="border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 2,
            'text-gray-500 border-transparent': currentTab != 2
          }"
        >
          پاسخ داده شده
        </button>
        <button
          @click="currentTab = 3"
          class="border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 3,
            'text-gray-500 border-transparent': currentTab != 3
          }"
        >
          رد شده
        </button>
      </div>
    </div>
    <div class="flex-grow overflow-auto max-h-[400px]">
      <table class="min-w-[800px] w-full">
        <thead>
          <tr class="text-[#A5A5A5]">
            <th>ردیف</th>
            <th>عنوان درخواست</th>
            <th>نوع درخواست</th>
            <th>تاریخ درخواست</th>
            <th>شهر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center border-b last:border-0" v-for="item in 3">
            <td class="py-5">{{ item }}</td>
            <td class="py-5">انحصار وراثت</td>
            <td class="py-5">آنلاین</td>
            <td class="py-5">1402/08/24</td>

            <td class="py-5">اصفهان</td>
            <td class="flx gap-2 items-center text-[#0F9F68] justify-center">
             پاسخ داده شده
            </td>
            <td class="py-5">
              <button
                class="bg-[#B1B1B1] text-white flex gap-2 items-center p-2 rounded m-auto"
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
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
let currentTab = ref(0)
</script>
