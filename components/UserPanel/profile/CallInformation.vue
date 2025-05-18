<template>
  <section class="mt-5">
    <div class="bg-white rounded p-5">
      <h2 class="text-secondary mb-5 font-bold text-lg">اطلاعات عمومی</h2>
      <p class="text-gray-500 border-b pb-5 mb-5">
        این اطلاعات محرمانه بوده و در سایت نمایش داده نمی‌شود و صرفا جهت دسترسی
        به شما و ارسال اعلانات و اطلاعیه‌ها استفاده خواهند شد.
      </p>
      <form @submit.prevent>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div>
            <label for="email" class="req">پست الکترونیکی : </label>
            <input
              type="email"
              id="email"
              placeholder="وارد کنید"
              class="block bg-[#F7F7F8] border border-gray-300 rounded p-3 w-full mt-2"
              v-model="userData.email"
            />
          </div>
          <div>
            <label for="repeat-email" class="req">
              تکرار پست الکترونیکی :
            </label>
            <input
              type="email"
              id="repeat-email"
              placeholder="وارد کنید"
              class="block bg-[#F7F7F8] border border-gray-300 rounded p-3 w-full mt-2"
              v-model="userData.repeatEmail"
            />
          </div>
          <div>
            <label for="phone" class="req"> تلفن همراه : </label>
            <input
              type="number"
              id="phone"
              placeholder="وارد کنید"
              class="block bg-[#F7F7F8] border border-gray-300 rounded p-3 w-full mt-2"
              v-model="userData.phone"
            />
          </div>
        </div>
      </form>
    </div>
    <div class="flex justify-end gap-5 mt-5">
      <button
        class="w-[173px] h-[46px] flex justify-center items-center rounded-md border bg-[#F7F7F8]"
      >
        لغو
      </button>
      <button
        @click="kir"
        class="w-[173px] h-[46px] flex justify-center items-center rounded-md border bg-secondary text-white"
      >
        تایید و ثبت
      </button>
    </div>
  </section>
</template>

<script setup>
let userData = inject('userData')

function kir () {
  console.log(userData)
}
</script>
