<template>
  <UserPanelProfileLinks></UserPanelProfileLinks>
  <UserPanelProfileChangePassword></UserPanelProfileChangePassword>
  <UserPanelProfileTwoStep></UserPanelProfileTwoStep>
</template>

<script setup>
useHead({
  title: '| ویرایش پسورد'
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
