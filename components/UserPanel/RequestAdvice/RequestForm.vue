<template>
  <section class="p-5 rounded bg-white">
    <div class="pb-3 mb-3 border-b">
      <h1 class="font-bold text-xl mb-3">درخواست مشاوره جدید</h1>
      <p class="text-[#706C6C] text-sm">
        با تکمیل فرم زیر درخواست مشاوره خود را برای ما ارسال کنید
      </p>
    </div>
    <form @submit.prevent>
      <div class="grid md:grid-cols-3 gap-5">
        <div>
          <label class="req">دسته بندی درخواست : </label>
          <div class="card flex justify-center">
            <Select
              v-model="selectData"
              :options="data"
              optionLabel="name"
              placeholder="انتخاب کنید"
              class="w-full mt-2 rounded border border-[#EFEFEF]"
              :pt="{
                option: ({ context }) => ({
                  class: context.selected ? 'bg-secondary !text-white' : ''
                }),
                label: 'p-3 text-gray-400',
                root: 'hover:!border-[#EFEFEF] !bg-[#F7F7F8]'
              }"
            />
          </div>
        </div>
        <div class="md:col-span-2">
          <label for="title" class="req">عنوان درخواست : </label>
          <input
            type="text"
            id="title"
            class="w-full mt-2 rounded border border-[#EFEFEF] bg-[#F7F7F8] p-3"
            placeholder="وارد کنید"
          />
        </div>
      </div>
      <div class="mt-5">
        <label for="text" class="req">شرح درخواست : </label>
        <textarea
          id="text"
          class="block w-full bg-[#F7F7F8] p-3 mt-2 border border-[#EFEFEF] rounded resize-none"
          rows="8"
          placeholder="درخواست مشاوره ای خود را به صورت کامل توضیح دهید ..."
        ></textarea>
      </div>
      <div class="flex justify-end mt-5 gap-5">
        <button class="border border-[#D9D9D9] bg-[#EEEEEE] h-12 w-[173px] rounded text-secondary">لغو</button>
        <button class="border border-secondary bg-secondary h-12 w-[173px] rounded text-white">تایید و ارسال</button>
      </div>
    </form>
  </section>
</template>

<script setup>
let selectData = ref('')
let data = [{ name: 'salam' }, { name: 'salam' }, { name: 'salam' }]
</script>
