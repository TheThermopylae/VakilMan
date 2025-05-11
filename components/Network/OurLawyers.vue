<template>
  <section class="mb-52">
    <div class="lg:hidden">
      <p class="text-gray-500 text-center mb-2">
        در اولین زمان پاسخگوی سوالات آنلاین و متنی شما هستیم
      </p>
      <div class="flex gap-3 justify-center">
        <div class="relative w-3/4 h-[45px]">
          <input
            type="text"
            id="search-lawyer-m"
            placeholder="جستجو وکیل"
            class="border p-3 rounded-md w-full h-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
            />
          </svg>
        </div>
        <NetworkFilterDrawer></NetworkFilterDrawer>
      </div>
    </div>
    <div class="grid-cols-3 hidden lg:grid items-center">
      <div class="relative w-60 xl:w-72">
        <input
          type="text"
          id="search-lawyer"
          placeholder="جستجو وکیل"
          class="border p-3 rounded border-gray-300 w-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
          />
        </svg>
      </div>
      <p class="text-gray-500 text-center text-sm xl:text-md">
        در اولین زمان پاسخگوی سوالات آنلاین و متنی شما هستیم
      </p>
      <div class="card flex justify-end items-center">
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="مرتب سازی بر اساس"
          class="w-52 xl:w-60 p-0.5 rounded border-gray-300 bg-white [&_.p-select-label]:text-gray-400 shadow-none"
          :pt="{
            option: ({ context }) => ({
              class: context.selected ? 'bg-secondary text-white' : ''
            }),
            dropdownIcon: { class: 'text-gray-400' }
          }"
        />
      </div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-5">
        <NetworkLawyerCard v-for="item in 20"></NetworkLawyerCard>
    </div>
  </section>
</template>

<script setup>
const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])
</script>
