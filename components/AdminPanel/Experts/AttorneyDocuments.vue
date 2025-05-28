<template>
  <section class="bg-white rounded p-5 my-5">
    <div class="pb-4 mb-4 border-b">
      <h2 class="text-secondary text-lg">مدارک کارشناسی</h2>
      <p class="text-c-gray-2 mt-4 text-sm">
        مدارک هویتی کارشناسی خود را در این قسمت قرار دهید
      </p>
    </div>
    <form @submi.prevent class="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      <div>
        <label for="attorney-code" class="req">شماره پرونده کارشناسی : </label>
        <input
          v-model="data.email"
          type="email"
          id="attorney-code"
          class="cinput"
          placeholder="وارد کنید"
        />
      </div>
      <div>
        <label for="repeat-email" class="req">استان محل فعالیت : </label>
        <div class="card flex justify-center">
          <Select
            v-model="data.email"
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
        <label for="repeat-email" class="req">شهر محل فعالیت : </label>
        <div class="card flex justify-center">
          <Select
            v-model="data.email"
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
        <label for="attorney-code">تصویر پروانه وکالت : </label>
        <AdminPanelLawyersUploadPicDoc />
      </div>
    </form>

  </section>
</template>

<script setup>
let states = ref([{ name: 'تهران' }, { name: 'تهران' }, { name: 'تهران' }])
let cities = ref([{ name: 'شیراز' }, { name: 'شیراز' }, { name: 'شیراز' }])

let data = reactive({
  email: '',
  repeatEmail: '',
  phone: ''
})
</script>
