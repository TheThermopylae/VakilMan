<template>
  <section class="text-center lg:text-right lg:w-1/2">
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
    <div class="flex flex-col items-center lg:items-start gap-2 w-full mt-4">
      <svg
        width="282"
        height="22"
        viewBox="0 0 282 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="lg:hidden"
      >
        <path
          d="M1 1.06201H281"
          stroke="url(#paint0_linear_1_14519)"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M36 11.062H246.814"
          stroke="url(#paint1_linear_1_14519)"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M58.7905 20.062H224.023"
          stroke="url(#paint2_linear_1_14519)"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_14519"
            x1="1"
            y1="2.56485"
            x2="281"
            y2="2.56485"
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
            id="paint1_linear_1_14519"
            x1="36"
            y1="12.5649"
            x2="246.814"
            y2="12.5649"
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
            id="paint2_linear_1_14519"
            x1="58.7905"
            y1="21.5649"
            x2="224.023"
            y2="21.5649"
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
        width="396"
        height="4"
        viewBox="0 0 396 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hidden lg:block"
      >
        <path
          d="M2 2H394"
          stroke="url(#paint0_linear_1_1775)"
          stroke-opacity="0.5"
          stroke-width="3"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_1775"
            x1="2"
            y1="3.50284"
            x2="394"
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
        width="300"
        height="4"
        viewBox="0 0 300 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hidden lg:block"
      >
        <path
          d="M2 2H298"
          stroke="url(#paint0_linear_1_1777)"
          stroke-opacity="0.5"
          stroke-width="3"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_1777"
            x1="2"
            y1="3.50284"
            x2="298"
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
        width="235"
        height="4"
        viewBox="0 0 235 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hidden lg:block"
      >
        <path
          d="M2 2H233"
          stroke="url(#paint0_linear_1_1779)"
          stroke-opacity="0.5"
          stroke-width="3"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_1779"
            x1="2"
            y1="3.50284"
            x2="233"
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
