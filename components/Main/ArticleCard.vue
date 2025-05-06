<template>
  <article class="bg-white border rounded-xl p-3">
    <ClientOnly>
      <img src="/public/Rectangle46.svg" alt="article-image" />
    </ClientOnly>
    <h4 class="font-bold my-4">لورم ایپسوم متن ساختگی با تولید سادگی</h4>
    <p class="text-justify text-[#404040] text-[15px] leading-6">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
      placeat deserunt officia veniam repellat quam sunt, nulla sit voluptates
      aut iure distinctio nesciunt corporis minima. Blanditiis dolorem repellat
      quod quidem?
    </p>
    <div class="flex justify-end">
      <NuxtLink class="flex items-center gap-2 font-bold">
        مشاهده
        <span class="w-7 h-7 bg-[#0910442E] flex justify-center items-center rounded-l-lg"
          ><svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.11087 7.54628L9.34104 13.7763C9.48514 13.9206 9.6775 14 9.8826 14C10.0877 14 10.2801 13.9206 10.4242 13.7763L10.883 13.3176C11.1815 13.0188 11.1815 12.533 10.883 12.2345L5.65133 7.0029L10.8888 1.76547C11.0329 1.62126 11.1124 1.42901 11.1124 1.22402C11.1124 1.01881 11.0329 0.826563 10.8888 0.68224L10.43 0.223658C10.2857 0.0794478 10.0935 1.04275e-06 9.8884 1.06068e-06C9.6833 1.07861e-06 9.49094 0.0794479 9.34685 0.223658L3.11087 6.45941C2.96643 6.60408 2.88709 6.79723 2.88755 7.00256C2.88709 7.20869 2.96643 7.40173 3.11087 7.54628Z"
              fill="#001A46"
            />
          </svg>
        </span>
      </NuxtLink>
    </div>
  </article>
</template>
