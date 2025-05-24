<template>
  <section class="2xl:w-2/5 bg-white rounded p-5 mt-5 2xl:m-0">
    <div class="flex justify-between items-center mb-5">
      <h3 class="font-bold text-lg text-secondary">متخصصین برتر روز گذشته</h3>
      <svg
        width="15"
        height="4"
        viewBox="0 0 15 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer"
      >
        <g opacity="0.3">
          <path
            d="M14.2843 1.01257C13.6009 0.329152 12.4929 0.329152 11.8094 1.01257C11.126 1.69598 11.126 2.80402 11.8094 3.48744C12.4929 4.17085 13.6009 4.17085 14.2843 3.48744C14.9677 2.80405 14.9677 1.69601 14.2843 1.01257Z"
            fill="#030229"
          />
          <path
            d="M9.03431 1.01257C8.3509 0.329152 7.24286 0.329152 6.55944 1.01257C5.87603 1.69598 5.87603 2.80402 6.55944 3.48744C7.24286 4.17085 8.3509 4.17085 9.03431 3.48744C9.71773 2.80405 9.71773 1.69601 9.03431 1.01257Z"
            fill="#030229"
          />
          <path
            d="M3.78431 1.01257C3.1009 0.329152 1.99285 0.329152 1.30944 1.01257C0.626023 1.69598 0.626023 2.80402 1.30944 3.48744C1.99285 4.17085 3.1009 4.17085 3.78431 3.48744C4.46773 2.80405 4.46773 1.69601 3.78431 1.01257Z"
            fill="#030229"
          />
        </g>
      </svg>
    </div>
    <div class="">
      <div class="flex justify-between border-b pb-3 mb-3 last:border-0 last:pb-0 last:mb-0" v-for="item in 3">
        <div class="flex items-center gap-2">
          <img src="/public/userpanel/law-profile.svg" alt="law-profile" />
          <div>
            <h5 class="mb-1">مهسا خاکپور</h5>
            <p class="text-[10px] md:text-sm xl:text-sm 2xl:text-[12px]">وکیل پایه یک کانون وکلای دادگستری</p>
          </div>
        </div>
        <div class="flex gap-2 flex-col items-end">
          <span
            class="bg-[#06CE92] text-white w-[37px] h-[25px] flex justify-center items-center text-sm rounded"
            >4,9</span
          >
          <NuxtLink
            to="/"
            class="text-gray-500 flex items-center gap-2 text-[11px] md:text-sm xl:text-sm 2xl:text-[12px]"
          >
            اطلاعات بیشتر
            <svg
              width="5"
              height="10"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
           
            >
              <path
                d="M4.79688 1L0.796875 5.5L4.79688 10"
                stroke="#979797"
                stroke-width="1.58"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
