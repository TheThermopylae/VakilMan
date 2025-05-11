<template>
  <section class="my-14 container m-auto">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
      <div class="md:col-span-2 lg:w-3/4">
        <div class="flex justify-between items-center gap-5">
          <span class="font-bold text-xl lg:text-[37px]"
            >خدمات سامانه جامع وکلا</span
          >
          <svg
            width="155"
            height="12"
            viewBox="0 0 155 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="lg:hidden"
          >
            <path
              d="M11.3333 6C11.3333 3.05448 8.94551 0.666667 6 0.666667C3.05447 0.666667 0.666672 3.05448 0.666672 6C0.666672 8.94552 3.05447 11.3333 6 11.3333C8.94551 11.3333 11.3333 8.94552 11.3333 6ZM155 5L6 5V7L155 7V5Z"
              fill="#001A46"
            />
          </svg>
        </div>
        <p class="text-justify mt-4 mb-8 text-xl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          سطرآنچنان که لازم است
        </p>
        <svg
          width="115"
          height="12"
          viewBox="0 0 115 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="hidden lg:block"
        >
          <path
            d="M11.3332 5.65783C11.3145 2.71238 8.91161 0.339761 5.96616 0.358452C3.0207 0.377143 0.648079 2.78006 0.66677 5.72552C0.685462 8.67098 3.08838 11.0436 6.03384 11.0249C8.9793 11.0062 11.3519 8.60329 11.3332 5.65783ZM114.991 4.00002L5.99365 4.6917L6.00634 6.69166L115.004 5.99998L114.991 4.00002Z"
            fill="#001A46"
          />
        </svg>
      </div>
      <div class="md:col-span-2 flex flex-col md:flex-row gap-4 md:gap-7">
        <MainServiceCard
          v-for="item in [0, 1]"
          :key="item"
          class="first:text-white first:bg-secondary"
        ></MainServiceCard>
      </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 mt-4 md:mt-7">
      <MainServiceCard v-for="item in 4"></MainServiceCard>
    </div>
  </section>
</template>
