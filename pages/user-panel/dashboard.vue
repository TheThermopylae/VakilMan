<template>
  <UserPanelDashboardCounselingSection></UserPanelDashboardCounselingSection>
  <div class="2xl:flex justify-between mt-5 gap-5 items-start">
    <UserPanelDashboardOnlineLegalAdvice></UserPanelDashboardOnlineLegalAdvice>
    <UserPanelDashboardTopLawyers></UserPanelDashboardTopLawyers>
  </div>
  <UserPanelDashboardMyOrders></UserPanelDashboardMyOrders>
</template>

<script setup>
useHead({
  title: '| میزکار'
})
</script>
