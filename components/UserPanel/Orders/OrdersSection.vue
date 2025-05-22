<template>
  <section class="bg-white rounded p-5 pb-0 mt-5 overflow-hidden">
    <div class="md:flex gap-5 border-b pb3 mb-3">
      <div class="relative flex text-sm mt-3 md:m-0">
        <button
          @click="currentTab = 0"
          class="ml-14 border-b-2 pb-3 -mb-[1px] transition-all"
          :class="{
            'border-primary text-black': currentTab == 0,
            'text-gray-500 border-transparent': currentTab != 0
          }"
        >
          همه
        </button>
        <button
          @click="currentTab = 1"
          class="ml-14 border-b-2 pb-3 -mb-[1px] transition-all"
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
    <div class="flex-grow overflow-auto max-h-[400px]">
      <table class="min-w-[800px] w-full">
        <thead>
          <tr class="text-[#A5A5A5]">
            <th>ردیف</th>
            <th>شماره</th>
            <th>شرح</th>
            <th>مبلغ(تومان)</th>
            <th>وضعیت سفارش</th>
            <th>وضعیت مالی</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center border-b last:border-0" v-for="item in 2">
            <td class="py-5">{{ item }}</td>
            <td class="py-5">53453</td>
            <td class="py-5">رزرو مشاوره آنلاین</td>
            <td class="py-5">100,000</td>
            <td class="flx gap-2 items-center text-[#0F9F68] justify-center">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block"
              >
                <path
                  d="M16.967 8.05492L15.947 6.86992C15.752 6.64492 15.5945 6.22492 15.5945 5.92492V4.64992C15.5945 3.85492 14.942 3.20242 14.147 3.20242H12.872C12.5795 3.20242 12.152 3.04492 11.927 2.84992L10.742 1.82992C10.2245 1.38742 9.37703 1.38742 8.85203 1.82992L7.67453 2.85742C7.44953 3.04492 7.02203 3.20242 6.72953 3.20242H5.43203C4.63703 3.20242 3.98453 3.85492 3.98453 4.64992V5.93242C3.98453 6.22492 3.82703 6.64492 3.63953 6.86992L2.62703 8.06242C2.19203 8.57992 2.19203 9.41992 2.62703 9.93742L3.63953 11.1299C3.82703 11.3549 3.98453 11.7749 3.98453 12.0674V13.3499C3.98453 14.1449 4.63703 14.7974 5.43203 14.7974H6.72953C7.02203 14.7974 7.44953 14.9549 7.67453 15.1499L8.85953 16.1699C9.37703 16.6124 10.2245 16.6124 10.7495 16.1699L11.9345 15.1499C12.1595 14.9549 12.5795 14.7974 12.8795 14.7974H14.1545C14.9495 14.7974 15.602 14.1449 15.602 13.3499V12.0749C15.602 11.7824 15.7595 11.3549 15.9545 11.1299L16.9745 9.94492C17.4095 9.42742 17.4095 8.57242 16.967 8.05492ZM12.917 7.58242L9.29453 11.2049C9.18906 11.3103 9.04609 11.3694 8.89703 11.3694C8.74797 11.3694 8.605 11.3103 8.49953 11.2049L6.68453 9.38992C6.46703 9.17242 6.46703 8.81242 6.68453 8.59492C6.90203 8.37742 7.26203 8.37742 7.47953 8.59492L8.89703 10.0124L12.122 6.78742C12.3395 6.56992 12.6995 6.56992 12.917 6.78742C13.1345 7.00492 13.1345 7.36492 12.917 7.58242Z"
                  fill="#54BD95"
                />
              </svg>
              انجام شده
            </td>
            <td class="py-5">پرداخت شده</td>
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
