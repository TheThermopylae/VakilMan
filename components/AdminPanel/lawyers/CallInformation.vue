<template>
  <section class="bg-white rounded p-5 my-5">
    <div class="pb-4 mb-4 border-b">
      <h2 class="text-secondary text-lg">اطلاعات تماس</h2>
      <p class="text-c-gray-2 mt-4 text-sm">
        این اطلاعات محرمانه بوده و در سایت نمایش داده نمی‌شود و صرفا جهت دسترسی
        به شما و ارسال اعلانات و اطلاعیه‌ها استفاده خواهند شد.
      </p>
    </div>
    <form @submi.prevent class="grid md:grid-cols-3 gap-10">
      <div>
        <label for="email" class="req">پست الکترونیکی : </label>
        <input
          v-model="data.email"
          type="email"
          id="email"
          class="cinput"
          placeholder="وارد کنید"
        />
      </div>
      <div>
        <label for="repeat-email" class="req">تکرار پست الکترونیکی : </label>
        <input
          v-model="data.repeatEmail"
          type="text"
          id="repeat-email"
          class="cinput"
          placeholder="وارد کنید"
        />
      </div>
      <div>
        <label for="number" class="req">تلفن همراه : </label>
        <input
          v-model="data.phone"
          type="number"
          id="number"
          class="cinput"
          placeholder="وارد کنید"
        />
      </div>
    </form>
  </section>
</template>

<script setup>
let data = reactive({
  email: '',
  repeatEmail: '',
  phone: ''
})
</script>
