<template>
  <section class="container m-auto relative mt-2">
    <div class="grid lg:grid-cols-3 text-[#808080]">
      <span></span>
      <p class="text-center">
        در اولین زمان پاسخگوی سوالات آنلاین و متنی شما هستیم
      </p>
      <NuxtLink to="/" class="text-end ml-4 hidden lg:block">
        مشاهده همه
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="inline-block mr-2"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m12 5l-7 7m0 0l7 7m-7-7h14"
          />
        </svg>
      </NuxtLink>
    </div>
    <MainLawyersSlider class="mt-4"></MainLawyersSlider>
  </section>
</template>
