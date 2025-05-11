<template>
  <section class="container m-auto mb-52">
    <div class="before-line">
      <h2 class="text-2xl title">سوالات متداول</h2>
      <p class="text-gray-500 pr-6">
        می‌توانید پرسش خود را با واحد پشتیبانی بنیاد وکلا مطرح کنید.
      </p>
    </div>
    <div class="grid md:grid-cols-2 gap-5 items-start">
      <TheAccordion v-for="(item, index) in items" :key="index" :data="item"></TheAccordion>
    </div>
  </section>
</template>

<script setup>
let items = ref([
  {
    title: 'مدت زمان مشاوره‌ها چقدر است؟',
    content: 'مدت زمان مشاوره‌ها چقدر است؟'
  },
  {
    title: 'جهت انجام مشاوره تماس از طرف چه کسی انجام می‌شود؟',
    content:
      'تماس از طرف مشتری انجام می‌شود و متخصص تعهدی جهت تماس با مشتری ندارد.'
  },
  {
    title: 'پس از پرداخت مبلغ سفارش چکار باید کنم؟',
    content: 'پس از پرداخت مبلغ سفارش چکار باید کنم؟'
  },
  {
    title: 'پس از ثبت سفارش مشاوره چه زمانی ارائه می‌شود؟',
    content: 'پس از ثبت سفارش مشاوره چه زمانی ارائه می‌شود؟'
  },
  {
    title: 'آیا امکان ارسال اسناد و مدارک جهت بررسی وجود دارد؟',
    content: 'آیا امکان ارسال اسناد و مدارک جهت بررسی وجود دارد؟'
  },
  {
    title: 'آیا امکان ارسال اسناد و مدارک جهت بررسی وجود دارد؟',
    content: 'آیا امکان ارسال اسناد و مدارک جهت بررسی وجود دارد؟'
  }
])
</script>
