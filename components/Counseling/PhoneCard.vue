<template>
  <article
    class="bg-[#CC8500] rounded-3xl text-white text-center relative overflow-hidden flex flex-col justify-between xl:h-[700px] 2xl:h-auto"
  >
    <div class="p-8 pb-0 z-20 relative">
      <h3 class="text-xl font-bold mb-6">مشاوره حقوقی تلفنی</h3>
      <p class="text-sm md:m-0 lg:mb-12">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است
      </p>
    </div>
    <div class="p-6 z-20 relative">
      <span>قیمت :</span>
      <div class="px-5 py-2 rounded-lg bg-[#A56D05] mt-3 w-fit m-auto text-xl">
        از 100 هزار تومان
      </div>
      <div class="bg-white rounded-xl p-6 mt-6 text-right">
        <div class="flex gap-2 mb-4">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8353 16.2959L17.8777 11.0959L16.4419 9.70358L12.0892 14.1923L9.52926 11.7554L8.1503 13.204L11.4279 16.324L12.1455 17.0072L12.8353 16.2959Z"
              fill="#CC8500"
            />
          </svg>
          <p class="text-black text-sm lg:text-lg xl:text-sm 2xl:text-lg">
            مشاوره حقوقی آنلاین
          </p>
        </div>
        <div class="flex gap-2 mb-4">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8353 16.2959L17.8777 11.0959L16.4419 9.70358L12.0892 14.1923L9.52926 11.7554L8.1503 13.204L11.4279 16.324L12.1455 17.0072L12.8353 16.2959Z"
              fill="#CC8500"
            />
          </svg>
          <p class="text-black text-sm lg:text-lg xl:text-sm 2xl:text-lg">
            گفتگو با وکلای آنلاین بدون محدودیت
          </p>
        </div>
        <div class="flex gap-2 mb-4">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8353 16.2959L17.8777 11.0959L16.4419 9.70358L12.0892 14.1923L9.52926 11.7554L8.1503 13.204L11.4279 16.324L12.1455 17.0072L12.8353 16.2959Z"
              fill="#CC8500"
            />
          </svg>
          <p class="text-black text-sm lg:text-lg xl:text-sm 2xl:text-lg">
            امکان ارسال مدارک و تصاویر
          </p>
        </div>
        <div class="flex gap-2 mb-4">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8353 16.2959L17.8777 11.0959L16.4419 9.70358L12.0892 14.1923L9.52926 11.7554L8.1503 13.204L11.4279 16.324L12.1455 17.0072L12.8353 16.2959Z"
              fill="#CC8500"
            />
          </svg>
          <p class="text-black text-sm lg:text-lg xl:text-sm 2xl:text-lg">
            امکان ارسال پیام صوتی
          </p>
        </div>
        <div class="flex gap-2">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8353 16.2959L17.8777 11.0959L16.4419 9.70358L12.0892 14.1923L9.52926 11.7554L8.1503 13.204L11.4279 16.324L12.1455 17.0072L12.8353 16.2959Z"
              fill="#CC8500"
            />
          </svg>
          <p class="text-black text-sm lg:text-lg xl:text-sm 2xl:text-lg">
            شروع گفتگو بلافاصله پس از رزرو
          </p>
        </div>
        <NuxtLink
          to="/"
          class="w-full p-5 bg-[#CC8500] mt-6 block rounded-2xl text-center"
          >شروع گفت و گو</NuxtLink
        >
      </div>
    </div>
    <svg
      width="374"
      class="w-full absolute -bottom-4 md:-bottom-3.5 lg:-bottom-7 xl:-bottom-4 right-0"
      height="532"
      viewBox="0 0 374 532"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="200" cy="300" r="300" fill="#D19200" class="w-full" />
    </svg>
  </article>
</template>
