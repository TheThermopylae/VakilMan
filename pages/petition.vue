<template>
  <main>
    <PetitionTheHero></PetitionTheHero>
    <TitleSection class="mb-5">
      <template #en>Our Lawyers</template>
      <template #fa>
        <span class="text-gray-600">مشاورین و وکلای ما</span>
      </template>
    </TitleSection>
    <div class="mb-8 container m-auto text-gray-500">
      <p class="text-center">
        سریع و بدون اتلاف وقت از میان وکلای آنلاین سایت فرد مورد نظر خود را
        انتخاب و مشاوره حقوقی تلفنی آنلاین و یا رایگان را دریافت کنید.
      </p>
    </div>
    <OurLawers></OurLawers>
    <NuxtLink
      to="/"
      class="border border-secondary rounded-full px-5 py-2 flex items-center gap-3 w-fit m-auto my-16 bg-[#E1ECFF]"
    >
      مشاهده ی بیشتر
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M6 12h6m6 0h-6m0 0V6m0 6v6"
        />
      </svg>
    </NuxtLink>
    <UsersComment class="mt-0"></UsersComment>
    <FaqSection></FaqSection>
  </main>
</template>

<script setup>
useHead({
  title: 'درخواست'
})
</script>
