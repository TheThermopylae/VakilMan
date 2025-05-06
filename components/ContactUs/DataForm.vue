<template>
  <section class="lg:w-1/2">
    <div
      class="text-[#008E5B] bg-[#008D5B]/10 border border-[#008D5B] p-2 rounded mb-5"
    >
      اگر نیاز به مشاوره حقوقی دارید به صفحه مربوطه مراجعه کنید. به سوالات حقوقی
      شما در فرم تماس با ما ترتیب اثر داده نخواهد شد.
    </div>
    <form>
      <div class="grid md:grid-cols-2 gap-5">
        <div>
          <label for="full-name">نام و نام خانوادگی </label>
          <input
            type="text"
            id="full-name"
            placeholder="وارد کنید"
            class="p-3 rounded bg-[#F7F7F8] block mt-1 w-full placeholder:text-gray-500"
          />
        </div>
        <div>
          <label for="phone-number">شماره موبایل</label>
          <input
            type="number"
            id="phone-number"
            placeholder="وارد کنید"
            class="p-3 rounded bg-[#F7F7F8] block mt-1 w-full placeholder:text-gray-500"
          />
        </div>
        <div>
          <label for="email">ایمیل</label>
          <input
            type="email"
            id="email"
            placeholder="وارد کنید"
            class="p-3 rounded bg-[#F7F7F8] block mt-1 w-full placeholder:text-gray-500"
          />
        </div>
        <div>
          <label for="email">ایمیل</label>
          <div class="card flex justify-center">
            <Select
              v-model="selectedCity"
              :options="cities"
              optionLabel="name"
              placeholder="انتخاب کنید"
              class="w-full mt-1 p-0.5 rounded border-none bg-[#F7F7F8] [&_.p-select-label]:text-gray-500"
              :pt="{
                option: ({ context }) => ({
                  class: context.selected ? 'bg-secondary text-white' : ''
                })
              }"
            />
          </div>
        </div>
      </div>
      <div class="mt-5">
        <label for="text">متن شما</label>
        <textarea
          id="text"
          placeholder="وارد کنید"
          class="p-3 rounded-lg block mt-1 w-full placeholder:text-gray-500 bg-[#F7F7F8]"
          rows="5"
        ></textarea>
      </div>
      <div class="flex justify-end mt-5">
        <button class="bg-[#539064] text-white w-[184px] py-3 rounded">
          ارسال
        </button>
      </div>
    </form>
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
