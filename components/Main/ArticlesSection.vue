<template>
  <section class="container m-auto mt-52 mb-52">
    <div class="rounded-3xl bg-[#FCC2651A] px-5 py-10">
      <div class="flex justify-center items-center flex-col">
        <h2 class="text-3xl font-bold text-secondary">مقالات</h2>
        <svg
          width="108"
          height="7"
          viewBox="0 0 108 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="my-5"
        >
          <path
            d="M1 3.0625C4.3 5.8125 8.3 5.8125 11.6 3.0625C14.9 0.3125 18.9 0.3125 22.2 3.0625C25.5 5.8125 29.5 5.8125 32.8 3.0625C36.1 0.3125 40.1 0.3125 43.4 3.0625C46.7 5.8125 50.7 5.8125 54 3.0625"
            stroke="#001A46"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M54 3.0625C57.3 5.8125 61.3 5.8125 64.6 3.0625C67.9 0.3125 71.9 0.3125 75.2 3.0625C78.5 5.8125 82.5 5.8125 85.8 3.0625C89.1 0.3125 93.1 0.3125 96.4 3.0625C99.7 5.8125 103.7 5.8125 107 3.0625"
            stroke="#001A46"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="text-[#4B4B4B]">
          لیست مقالات علمی و مطالب آموزشی وبسایت وکیل من
        </p>
      </div>
      <MainArticleSlider></MainArticleSlider>
      <NuxtLink
        to="/"
        class="px-8 py-2 rounded bg-secondary text-white m-auto block w-fit mt-16 font-bold"
        >مشاهده همه</NuxtLink
      >
    </div>
  </section>
</template>
