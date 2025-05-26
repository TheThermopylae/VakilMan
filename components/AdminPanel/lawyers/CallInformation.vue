<template>
  <section class="bg-white rounded p-5">
    <div class="pb-4 mb-4 border-b">
      <h2 class="text-secondary text-lg">اطلاعات عمومی</h2>
      <p class="text-c-gray-2 mt-4 text-sm">
        این اطلاعات محرمانه بوده و در سایت نمایش داده نمی‌شود و صرفا جهت دسترسی
        به شما و ارسال اعلانات و اطلاعیه‌ها استفاده خواهند شد.
      </p>
    </div>
    <div class="grid grid-cols-3 gap-10">
      <div>
        <label for="name" class="req">نام : </label>
        <input type="text" id="name" class="cinput" placeholder="وارد کنید" />
      </div>
      <div>
        <label for="last-name" class="req">نام خانوادگی : </label>
        <input
          type="text"
          id="last-name"
          class="cinput"
          placeholder="وارد کنید"
        />
      </div>
      <div>
        <label>جنسبیت : </label>
        <div class="card flex justify-center">
          <Select
            v-model="data.gender"
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
        </div>
      </div>
      <div>
        <label for="father-name" class="req">نام پدر : </label>
        <input
          type="text"
          id="father-name"
          class="cinput"
          placeholder="وارد کنید"
        />
      </div>
      <div>
        <label for="birthday-city" class="req">محل تولد : </label>
        <input
          type="text"
          id="birthday-city"
          class="cinput"
          placeholder="وارد کنید"
        />
      </div>
      <div>
        <label for="code-meli" class="req"> کد ملی : </label>
        <input
          type="number"
          id="code-meli"
          class="cinput"
          placeholder="وارد کنید"
        />
      </div>
      <div>
        <label>استان محل سکونت : </label>
        <div class="card flex justify-center">
          <Select
            v-model="data.gender"
            :options="states"
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
        </div>
      </div>
      <div>
        <label>شهر محل سکونت : </label>
        <div class="card flex justify-center">
          <Select
            v-model="data.gender"
            :options="cities"
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
        </div>
      </div>
      <div>
        <label>تصویر پروفایل :</label>
        <AdminPanelLawyersUploadPic></AdminPanelLawyersUploadPic>
      </div>
    </div>
  </section>
</template>

<script setup>
let data = reactive({
  firstName: '',
  lastName: '',
  gender: '',
  fatherName: '',
  bitrthDayCity: '',
  codeMeli: '',
  cityLive: '',
  stateLive: '',
  profile: ''
})
</script>
