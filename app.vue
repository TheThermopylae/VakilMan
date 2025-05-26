<template>
  <NuxtLoadingIndicator></NuxtLoadingIndicator>
  <nuxtLayout>
    <nuxtPage />
  </nuxtLayout>
  <!-- <div class="card flex justify-center">
    <Select
      v-model="userData.gender"
      :options="genders"
      optionLabel="name"
      placeholder="انتخاب کنید"
      class="w-full mt-2 rounded border border-[#EFEFEF]"
      :pt="{
        option: ({ context }) => ({
          class: context.selected ? 'bg-secondary !text-white' : ''
        }),
        root: 'hover:!border-[#EFEFEF] !shadow-none !bg-[#F7F7F8]'
      }"
    />
  </div> -->
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
