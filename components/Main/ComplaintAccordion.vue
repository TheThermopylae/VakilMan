<template>
  <div class="w-full mb-3 last:m-0">
    <div
      @click="isOpen = !isOpen"
      class="flex items-center gap-4 p-3 border"
      :class="{
        'bg-white rounded-lg': !isOpen,
        'bg-secondary rounded-t-lg text-white': isOpen
      }"
    >
      <div class="w-5 h-5 rounded-full bg-[#FCC265]"></div>
      <slot></slot>
    </div>
    <div v-if="isOpen" class="bg-white p-3 text-justify">
      <p class="text-[#6E6E6E]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
        صنعت چاپ و با استفاده از طراحانلورم ایپسوم متن ساختگی با تولید سادگی
        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن
        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
      </p>
      <NuxtLink
        to="/"
        class="block bg-primary text-center text-white mt-3 p-2.5 rounded"
        >درخواست دهید</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
let isOpen = ref(false)
</script>
