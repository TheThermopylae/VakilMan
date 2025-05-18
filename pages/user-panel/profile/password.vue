<template>
  <UserPanelProfileLinks></UserPanelProfileLinks>
  <UserPanelProfileChangePassword></UserPanelProfileChangePassword>
  <UserPanelProfileTwoStep></UserPanelProfileTwoStep>
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
