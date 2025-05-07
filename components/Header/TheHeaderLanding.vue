<template>
  <header
    class="lg:container m-auto lg:mt-5 text-white z-10 absolute right-1/2 translate-x-1/2 w-full"
  >
    <div
      class="flex justify-between items-center bg-black/[0.39] !p-3 !pl-6 rounded"
    >
      <div class="flex items-center gap-5 xl:gap-20">
        <div class="lg:hidden flex items-centr">
          <img src="/logolanding.svg" alt="logo" class="w-[52px]" />
          <div>
            <h3 class="font-bold">وکیل <span class="text-primary">من</span></h3>
            <p class="text-[10px]">مشاور آنلاین حقوقی</p>
          </div>
        </div>
        <img src="/logolanding.svg" alt="logo" class="hidden lg:block" />
        <ul class="hidden lg:flex gap-10">
          <li><NuxtLink to="/">صفحه ی اصلی</NuxtLink></li>
          <li><NuxtLink to="/counseling">مشاوره آنلاین</NuxtLink></li>
          <li>مشاوره تلفنی</li>
          <li><NuxtLink to="/contact-us">تماس با ما</NuxtLink></li>
          <li><NuxtLink to="/about-us">درباره ی ما</NuxtLink></li>
        </ul>
      </div>
      <div class="hidden lg:block">
        <nuxtLink to="/">ورود</nuxtLink>
        <nuxtLink
          to="/"
          class="mr-7 bg-primary px-12 py-3 rounded-md text-black"
          >عضویت</nuxtLink
        >
      </div>
      <HeaderTheDrawer>
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2.14355H20.8077"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M2 10.2311L20.8711 10.2311"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M2 18.3189L20.8711 18.3189"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </HeaderTheDrawer>
    </div>
  </header>
</template>
<script setup></script>
