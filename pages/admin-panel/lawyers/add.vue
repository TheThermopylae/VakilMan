<template>
  <AdminPanelLawyersAddTitleSection></AdminPanelLawyersAddTitleSection>
  <AdminPanelLawyersGeneralInformation :data="data" />
  <AdminPanelLawyersCallInformation :data="data" />
  <AdminPanelLawyersAttorneyDocuments :data="data" />
  <div class="grid grid-cols-2 md:flex flex-col md:flex-row justify-end gap-2 mt-5">
    <button class="cancel-btn md:w-[173px]">لغو</button>
    <button class="dash-btn md:w-[173px]">تایید و ارسال</button>
  </div>
</template>

<script setup>
useHead({
  title : '| افزودن وکیل'
})

let data = reactive({
  firstName: '',
  lastName: '',
  gender: '',
  fatherName: '',
  bitrthDayCity: '',
  codeMeli: '',
  stateLive: '',
  cityLive: '',
  profile: ''
})
</script>
