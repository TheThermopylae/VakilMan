<template>
  <UserPanelProfileLinks></UserPanelProfileLinks>
  <UserPanelProfileGeneralInformation></UserPanelProfileGeneralInformation>
  <UserPanelProfileCallInformation></UserPanelProfileCallInformation>
</template>

<script setup>
useHead({
  title: 'ویرایش اطلاعات شخصی'
})

let userData = reactive({
  name: '',
  family: '',
  gender: '',
  img: '',
  email: '',
  repeatEmail: '',
  phone: ''
})

provide('userData', userData)
</script>
