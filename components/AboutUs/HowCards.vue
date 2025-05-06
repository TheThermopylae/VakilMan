<template>
  <article class="bg-white p-5 text-center border rounded">
    <div class="flex justify-center">
      <slot name="icon"></slot>
    </div>
    <h4 class="text-xl font-bold mt-5 mb-6">
        <slot name="title" />
    </h4>
    <p class="text-sm">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
      طراحان گرافیک است چاپگرها و متون بلکه روزنامه
    </p>
  </article>
</template>