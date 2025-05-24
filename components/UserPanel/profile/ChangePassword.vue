<template>
  <section class="mt-5">
    <div class="bg-white rounded p-5">
      <h2 class="text-secondary mb-5 font-bold text-lg">اطلاعات عمومی</h2>
      <p class="text-gray-500 border-b pb-5 mb-5 text-sm">
        درصورت نیاز به تغییر رمز عبور اطلاعات مقابل را تکمیل کنید.
      </p>
      <form @submit.prevent>
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <label for="current-password" class="req">کلمه عبور فعلی : </label>
            <input
              type="password"
              id="current-password"
              placeholder="وارد کنید"
              class="block bg-[#F7F7F8] border border-[#EFEFEF] rounded p-3 w-full mt-2"
            />
          </div>
          <div>
            <label for="new-password" class="req"> کلمه عبور جدید : </label>
            <input
              type="password"
              id="new-password"
              placeholder="وارد کنید"
              class="block bg-[#F7F7F8] border border-[#EFEFEF] rounded p-3 w-full mt-2"
            />
          </div>
          <div>
            <label for="repeat-new-password" class="req">
              تکرار کلمه عبور جدید :
            </label>
            <input
              type="password"
              id="repeat-new-password"
              placeholder="وارد کنید"
              class="block bg-[#F7F7F8] border border-[#EFEFEF] rounded p-3 w-full mt-2"
            />
          </div>
        </div>
      </form>
      <div class="flex justify-end mt-5">
        <button
          class="w-[173px] h-[46px] flex justify-center items-center rounded-md border bg-secondary text-white"
        >
          تغییر کلمه عبور
        </button>
      </div>
    </div>
  </section>
</template>
