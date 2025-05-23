<template>
  <section class="bg-white rounded p-5">
    <h2 class="text-secondary border-b pb-5 mb-5 font-bold text-lg">
      اطلاعات عمومی
    </h2>
    <form @submit.prevent>
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div>
          <label for="name" class="req">نام : </label>
          <input
            type="text"
            id="name"
            placeholder="وارد کنید"
            class="block bg-[#F7F7F8] border border-[#EFEFEF] rounded p-3 w-full mt-2"
            v-model="userData.name"
          />
        </div>
        <div>
          <label for="family-name" class="req">نام خانوادگی : </label>
          <input
            type="text"
            id="family-name"
            placeholder="وارد کنید"
            class="block bg-[#F7F7F8] border border-[#EFEFEF] rounded p-3 w-full mt-2"
            v-model="userData.family"
          />
        </div>
        <div>
          <label class="req">جنسیت : </label>
          <div class="card flex justify-center">
            <Select
              v-model="userData.gender"
              :options="genders"
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
        <div>
          <label for="profile">پروفایل : </label>
          <UserPanelProfileUploadPic></UserPanelProfileUploadPic>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
let genders = ref([{ name: 'مذکر' }, { name: 'مونث' }, { name: 'دو جنسه' }])

let userData = inject('userData')
</script>
