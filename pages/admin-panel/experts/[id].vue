<template>
  <AdminPanelExpertsAddTitleSection></AdminPanelExpertsAddTitleSection>
  <AdminPanelExpertsGeneralInformation :data="data" />
  <AdminPanelExpertsCallInformation :data="data" />
  <AdminPanelExpertsAttorneyDocuments :data="data" />
  <div class="grid grid-cols-2 md:flex flex-col md:flex-row justify-end gap-2 mt-5">
    <button class="cancel-btn md:w-[173px]">لغو</button>
    <button class="dash-btn md:w-[173px]" @click="kir">تایید و ارسال</button>
  </div>
</template>

<script setup>
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

function kir () {
  console.log(data)
}
</script>
