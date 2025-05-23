<template>
  <section class="2xl:flex justify-between items-center">
    <h1 class="text-lg font-bold mb-3 2xl:m-0">دیدگاه های من</h1>
    <div class="2xl:flex gap-2">
      <div class="relative">
        <input
          type="text"
          placeholder="جست و جو"
          class="p-2 w-full 2xl:w-72 rounded"
        />
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-3 top-1/2 -translate-y-1/2"
        >
          <g opacity="0.6">
            <path
              d="M5.93973 11.2857C8.78005 11.2857 11.0826 8.98318 11.0826 6.14286C11.0826 3.30254 8.78005 1 5.93973 1C3.09941 1 0.796875 3.30254 0.796875 6.14286C0.796875 8.98318 3.09941 11.2857 5.93973 11.2857Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.796 13.0001L10.2246 10.4287"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>
      <div class="grid md:grid-cols-3 gap-2 mt-2 2xl:m-0">
        <nuxtLink
          to="/user-panel/advice/request"
          class="rounded px-6 py-2 text-white block w-full 2xl:w-auto 2xl:m-0 bg-[#17A4F4]"
        >
          مشاوره ی تلفنی
        </nuxtLink>
        <nuxtLink
          to="/"
          class="rounded px-6 py-2 text-white block w-full 2xl:w-auto 2xl:m-0 bg-[#1A8D48]"
        >
          مشاوره ی آنلاین
        </nuxtLink>
        <nuxtLink
          to="/"
          class="rounded px-6 py-2 text-white block w-full 2xl:w-auto bg-secondary"
        >
          درخواست جدید
        </nuxtLink>
      </div>
    </div>
  </section>
</template>