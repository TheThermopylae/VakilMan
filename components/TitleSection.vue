<template>
  <section class="text-center">
    <span
      class="text-3xl md:text-[70px] font-[700] text-black opacity-[.03] -mb-10 inline-block"
      ><slot name="en"></slot
    ></span>
    <h2 class="text-xl md:text-3xl font-extrabold">
      <slot name="fa"></slot>
    </h2>
    <p class="text-[#7D7D7D] mt-3">
      <slot name="par"></slot>
    </p>
    <div
      class="flex flex-col items-center gap-2 w-full mt-4"
      v-if="props.lines"
    >
      <svg
        width="282"
        height="21"
        viewBox="0 0 282 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="lg:hidden"
      >
        <path
          d="M1 1H281"
          stroke="url(#paint0_linear_1_14015)"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M36 11H246.814"
          stroke="url(#paint1_linear_1_14015)"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M58.7906 20H224.023"
          stroke="url(#paint2_linear_1_14015)"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_14015"
            x1="1"
            y1="2.50284"
            x2="281"
            y2="2.50284"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop
              offset="0.498753"
              stop-color="#E4E4E4"
              stop-opacity="0.473958"
            />
            <stop offset="1" stop-opacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_14015"
            x1="36"
            y1="12.5028"
            x2="246.814"
            y2="12.5028"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop
              offset="0.498753"
              stop-color="#E4E4E4"
              stop-opacity="0.473958"
            />
            <stop offset="1" stop-opacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_14015"
            x1="58.7906"
            y1="21.5028"
            x2="224.023"
            y2="21.5028"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop
              offset="0.498753"
              stop-color="#E4E4E4"
              stop-opacity="0.473958"
            />
            <stop offset="1" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="675"
        height="3"
        viewBox="0 0 675 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hidden lg:block"
      >
        <path
          d="M2 1.5H673"
          stroke="url(#paint0_linear_1_1260)"
          stroke-opacity="0.5"
          stroke-width="3"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_1260"
            x1="2"
            y1="3.00284"
            x2="673"
            y2="3.00284"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop
              offset="0.498753"
              stop-color="#E4E4E4"
              stop-opacity="0.473958"
            />
            <stop offset="1" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="510"
        height="4"
        viewBox="0 0 510 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hidden lg:block"
      >
        <path
          d="M2 2H508"
          stroke="url(#paint0_linear_1_1261)"
          stroke-opacity="0.5"
          stroke-width="3"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_1261"
            x1="2"
            y1="3.50284"
            x2="508"
            y2="3.50284"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop
              offset="0.498753"
              stop-color="#E4E4E4"
              stop-opacity="0.473958"
            />
            <stop offset="1" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="400"
        height="4"
        viewBox="0 0 400 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hidden lg:block"
      >
        <path
          d="M2 2H398"
          stroke="url(#paint0_linear_1_1262)"
          stroke-opacity="0.5"
          stroke-width="3"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_1262"
            x1="2"
            y1="3.50284"
            x2="398"
            y2="3.50284"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop
              offset="0.498753"
              stop-color="#E4E4E4"
              stop-opacity="0.473958"
            />
            <stop offset="1" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
</template>
<script setup>
let props = defineProps(['lines'])
</script>
