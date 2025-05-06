<template>
  <NuxtLayout name="landing">
    <main>
      <MainTheHero></MainTheHero>
      <TitleSection class="mt-52" :lines="true">
        <template #en>Our Service</template>
        <template #fa>
          خدمات <span class="text-primary">وکیل من</span>
        </template>
      </TitleSection>
      <MainServicesSection></MainServicesSection>
      <MainSystemSection></MainSystemSection>
      <TitleSection class="mt-20" :lines="false">
        <template #en>Our Lawyers</template>
        <template #fa>وکلای <span class="text-primary">ما</span></template>
      </TitleSection>
      <MainOurLawyers></MainOurLawyers>
      <MainSetupComplaint></MainSetupComplaint>
      <MainAdviceForm></MainAdviceForm>
      <MainArticlesSection></MainArticlesSection>
    </main>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})
</script>
