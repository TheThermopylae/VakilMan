<template>
  <main>
    <CounselingTheHero />
    <CounselingRequestCounseling></CounselingRequestCounseling>
    <CounselingWhySection></CounselingWhySection>
    <OurLawers
    class="my-32"
      ><div class="lg:flex justify-between items-end">
        <div class="text-center lg:text-right lg:w-2/3">
          <h2 class="text-3xl font-bold">
            مشاورین و وکلای <span class="text-primary">ما</span>
          </h2>
          <p class="text-[#808080] mt-2 text-sm md:text-lg">
            سریع و بدون اتلاف وقت از میان وکلای آنلاین سایت فرد مورد نظر خود را
            انتخاب و مشاوره حقوقی تلفنی آنلاین و یا رایگان را دریافت کنید.
          </p>
        </div>
        <NuxtLink
          to="/"
          class="text-[#808080] items-center gap-1 hidden lg:flex"
        >
          مشاهده همه
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
            />
          </svg>
        </NuxtLink></div
    ></OurLawers>
    <UsersComment></UsersComment>
    <FaqSection></FaqSection>
  </main>
</template>
<script setup>
useHead({
  title: 'مشاوره'
})
</script>
