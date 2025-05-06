<template>
  <main>
    <AboutUsTheHero></AboutUsTheHero>
    <div class="container m-auto">
      <TitleSection :lines="true" class="mt-72 mb-10">
        <template #fa>
          <span class="text-primary">وکیل من</span> برای چه کسانی خدمات دارد؟
        </template>
        <template #par>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </template>
      </TitleSection>
    </div>
    <AboutUsCardsSection></AboutUsCardsSection>
    <TitleSection :lines="true" class="mb-20">
      <template #en>
        <span>Our Goal</span>
      </template>
      <template #fa> اهداف <span class="text-primary">وکیل من</span> </template>
    </TitleSection>
    <AboutUsGoalsSection></AboutUsGoalsSection>
    <AboutUsWhySection></AboutUsWhySection>
    <AboutUsHowToWorks></AboutUsHowToWorks>
  </main>
</template>

<script setup>
useHead({
  title: 'درباره ی ما'
})
</script>
