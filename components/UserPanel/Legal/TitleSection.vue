<template>
  <section class="md:flex justify-between items-center">
    <h1 class="text-lg font-bold mb-3 md:m-0">درخواست های حقوقی</h1>
    <div class="md:flex gap-4">
      <div class="relative">
        <input
          type="text"
          placeholder="جست و جو"
          class="p-2 w-full md:w-72 rounded mb-3 md:m-0"
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
      <NuxtLink to="/user-panel/legal/request" class="bg-secondary text-white rounded px-6 py-2 inline-block">درخواست جدید</NuxtLink>
    </div>
  </section>
</template>
