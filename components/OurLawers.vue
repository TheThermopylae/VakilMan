<template>
  <section class="container m-auto">
    <slot></slot>
    <div class="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8 mt-5">
      <CounselingLawyerCard v-for="item in 12" />
    </div>
    <MainLawyersSlider class="lg:hidden mt-5"></MainLawyersSlider>
  </section>
</template>
