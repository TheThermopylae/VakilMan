<template>
  <tr class="bg-white">
    <td class="py-5 rounded-r">امیر برزگر</td>
    <td class="py-5 px-4">انحصار وراثت</td>
    <td class="py-5 px-4">تنظیم دادخواست</td>
    <td class="py-5 px-4">1402/08/26</td>
    <td class="py-5 px-4">
      <h4 class="bg-[#E88F00]/10 text-[#E88F00] px-4 py-3 rounded text-[12px]">
        در حال بررسی
      </h4>
    </td>
    <td>
      <div class="card inline-block">
        <Button class="inline-block" @click="visible = true" unstyled>
          <svg
            class="inline-block"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.796875"
              width="29"
              height="29"
              rx="4"
              fill="#3D96D1"
              fill-opacity="0.12"
            />
            <g clip-path="url(#clip0_1_11168)">
              <path
                d="M15.7969 10.2305C12.7399 10.2305 9.96768 11.903 7.92207 14.6195C7.75514 14.8421 7.75514 15.153 7.92207 15.3756C9.96768 18.0955 12.7399 19.768 15.7969 19.768C18.8538 19.768 21.6261 18.0955 23.6717 15.3789C23.8386 15.1563 23.8386 14.8454 23.6717 14.6228C21.6261 11.903 18.8538 10.2305 15.7969 10.2305ZM16.0162 18.3573C13.9869 18.4849 12.3111 16.8124 12.4388 14.7799C12.5435 13.1042 13.9018 11.7459 15.5776 11.6411C17.6068 11.5135 19.2826 13.186 19.155 15.2185C19.047 16.891 17.6887 18.2493 16.0162 18.3573ZM15.9147 16.8059C14.8215 16.8746 13.9182 15.9746 13.9902 14.8814C14.0458 13.978 14.779 13.2482 15.6823 13.1892C16.7755 13.1205 17.6788 14.0206 17.6068 15.1138C17.5479 16.0204 16.8148 16.7503 15.9147 16.8059Z"
                fill="#3B93E3"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_11168">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(7.79688 7)"
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
        <Dialog
          v-model:visible="visible"
          modal
          header="جزئیات درخواست"
          class="w-11/12 max-w-[666px] text-secondary"
        >
          <template #closebutton>
            <svg
              @click="visible = false"
              class="cursor-pointer"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.05"
                cx="20.7969"
                cy="20"
                r="20"
                fill="#E71D36"
              />
              <path
                opacity="0.8"
                d="M21.713 19.9999L25.6068 23.8939C25.8602 24.1472 25.8602 24.5567 25.6068 24.81C25.3535 25.0633 24.944 25.0633 24.6907 24.81L20.7968 20.916L16.903 24.81C16.6496 25.0633 16.2402 25.0633 15.9869 24.81C15.7335 24.5567 15.7335 24.1472 15.9869 23.8939L19.8807 19.9999L15.9869 16.1059C15.7335 15.8526 15.7335 15.4431 15.9869 15.1898C16.1132 15.0635 16.2791 15 16.445 15C16.6108 15 16.7767 15.0635 16.903 15.1898L20.7968 19.0838L24.6907 15.1898C24.8171 15.0635 24.9829 15 25.1488 15C25.3146 15 25.4805 15.0635 25.6068 15.1898C25.8602 15.4431 25.8602 15.8526 25.6068 16.1059L21.713 19.9999Z"
                fill="#E71D36"
              />
            </svg>
          </template>
          <div class="mt-3 pt-3 border-t grid md:grid-cols-3 flex-wrap gap-3">
            <div>
              <h4>نام و نام خانوادگی :</h4>
              <div class="bg-[#F7F7F8] p-3 border rounded mt-2 text-sm">
                علی رضایی
              </div>
            </div>
            <div>
              <h4>عنوان درخواست :</h4>
              <div class="bg-[#F7F7F8] p-3 border rounded mt-2 text-sm">
                انحصار وراثت
              </div>
            </div>
            <div>
              <h4>دسته بندی :</h4>
              <div class="bg-[#F7F7F8] p-3 border rounded mt-2 text-sm">
                ملک و زمین
              </div>
            </div>
            <div>
              <h4>استان :</h4>
              <div class="bg-[#F7F7F8] p-3 border rounded mt-2 text-sm">
                اصفهان
              </div>
            </div>
            <div>
              <h4>شهر :</h4>
              <div class="bg-[#F7F7F8] p-3 border rounded mt-2 text-sm">
                اصفهان
              </div>
            </div>
            <div>
              <h4>زمان درخواست :</h4>
              <div
                class="bg-[#F7F7F8] p-3 border rounded mt-2 text-sm flex items-center justify-between gap-2"
              >
                <div class="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5256 0.614895L11.5264 1.21459C13.7301 1.38731 15.1858 2.88895 15.1882 5.1918L15.1968 11.9324C15.2 14.4432 13.6227 15.988 11.0943 15.992L4.91838 16C2.40583 16.0032 0.808728 14.4216 0.805569 11.9036L0.79688 5.24217C0.793721 2.92414 2.19809 1.42649 4.40181 1.22419L4.40102 0.62449C4.40023 0.272667 4.66088 0.0079996 5.00842 0.0079996C5.35596 0.00720001 5.61662 0.271068 5.61741 0.622891L5.6182 1.18261L10.31 1.17621L10.3092 0.616494C10.3084 0.264671 10.569 0.000803215 10.9166 1.80419e-06C11.2562 -0.000795982 11.5248 0.263072 11.5256 0.614895ZM2.01408 5.48908L13.9726 5.47308V5.19322C13.9386 3.47409 13.0761 2.57214 11.528 2.43781L11.5287 3.0535C11.5287 3.39733 11.261 3.66999 10.9213 3.66999C10.5738 3.67079 10.3124 3.39892 10.3124 3.0551L10.3116 2.40742L5.61979 2.41382L5.62058 3.06069C5.62058 3.40532 5.36072 3.67718 5.01318 3.67718C4.66564 3.67798 4.4042 3.40692 4.4042 3.06229L4.40341 2.4466C2.86318 2.60092 2.01092 3.50607 2.01329 5.2404L2.01408 5.48908ZM10.5889 9.12342V9.13222C10.5968 9.50003 10.8969 9.77909 11.261 9.7711C11.6165 9.7623 11.9 9.45765 11.8921 9.08984C11.8755 8.73802 11.5904 8.45096 11.2358 8.45176C10.8724 8.45976 10.5881 8.75561 10.5889 9.12342ZM11.2407 12.7138C10.8774 12.7058 10.5843 12.4028 10.5836 12.035C10.5757 11.6672 10.8671 11.3625 11.2304 11.3537H11.2383C11.6096 11.3537 11.9105 11.6568 11.9105 12.0326C11.9113 12.4084 11.6112 12.713 11.2407 12.7138ZM7.33418 9.13631C7.34998 9.50412 7.65092 9.79118 8.01425 9.77519C8.36969 9.7584 8.65325 9.45455 8.63745 9.08673C8.62876 8.72691 8.33652 8.44705 7.98108 8.44785C7.61774 8.46385 7.33339 8.76849 7.33418 9.13631ZM8.01738 12.6775C7.65404 12.6935 7.35389 12.4065 7.3373 12.0386C7.3373 11.6708 7.62086 11.367 7.9842 11.3502C8.33964 11.3494 8.63268 11.6293 8.64058 11.9883C8.65716 12.3569 8.37281 12.6607 8.01738 12.6775ZM4.08028 9.16404C4.09607 9.53186 4.39701 9.81971 4.76035 9.80292C5.11579 9.78693 5.39935 9.48228 5.38276 9.11447C5.37486 8.75465 5.08261 8.47479 4.72638 8.47559C4.36305 8.49158 4.07949 8.79623 4.08028 9.16404ZM4.76366 12.6816C4.40033 12.6984 4.10018 12.4106 4.08359 12.0427C4.0828 11.6749 4.36715 11.3703 4.73049 11.3543C5.08593 11.3535 5.37897 11.6334 5.38686 11.9932C5.40345 12.361 5.11989 12.6656 4.76366 12.6816Z"
                      fill="#F4A717"
                    />
                  </svg>
                  1402/08/23
                </div>
                <span class="border-r pr-3">20 :45</span>
              </div>
            </div>
          </div>
          <h4 class="mt-3 mb-2">شرح درخواست :</h4>
          <div
            class="p-3 rounded border bg-[#F7F7F8] max-h-[145px] overflow-auto"
          >
            <p class="text-sm text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای سطرآنچنان که لازم
              است
            </p>
          </div>
          <h4 class="mt-3 mb-2 text-secondary">فایل های پیوست :</h4>
          <div class="grid md:grid-cols-3 gap-3">
            <div
              v-for="item in randomNum"
              class="flex justify-between p-3 rounded bg-[#0E8CFF]/10 text-[#0E8CFF]"
            >
              sdfhskdfksd.jpg
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7969 16.875C18.7969 17.4963 18.2932 18 17.6719 18H1.92188C1.30056 18 0.796875 17.4963 0.796875 16.875C0.796875 16.2537 1.30056 15.75 1.92188 15.75H17.6719C18.2932 15.75 18.7969 16.2537 18.7969 16.875ZM9.00139 13.3111C9.22109 13.5308 9.50895 13.6407 9.79688 13.6407C10.0847 13.6407 10.3727 13.5308 10.5924 13.3111L14.5783 9.32523C15.0176 8.88588 15.0176 8.17358 14.5783 7.73423C14.139 7.29489 13.4267 7.29489 12.9873 7.73423L10.9219 9.79966V1.125C10.9219 0.503684 10.4182 0 9.79688 0C9.17556 0 8.67188 0.503684 8.67188 1.125V9.79966L6.60645 7.73423C6.1671 7.29489 5.4548 7.29489 5.01545 7.73423C4.5761 8.17358 4.5761 8.88588 5.01545 9.32523L9.00139 13.3111Z"
                  fill="#0E8CFF"
                />
              </svg>
            </div>
          </div>
          <h4 class="mt-5 mb-2 text-secondary">ارجاع درخواست به وکیل :</h4>
          <div class="grid md:grid-cols-3 gap-3">
            <Select
              :pt="{
                option: ({ context }) => ({
                  class: context.selected ? 'bg-secondary !text-white' : ''
                })
              }"
              :emptyFilterMessage="'وکیلی یافت نشد'"
              v-model="selectedLawyer"
              :options="lawyers"
              filter
              placeholder="انتخاب وکیل"
              class="w-full"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center">
                  <div>{{ slotProps.value }}</div>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="flex items-center">
                  <div>{{ slotProps.option }}</div>
                </div>
              </template>
            </Select>
          </div>
          <div class="grid grid-cols-2 md:flex justify-end mt-7 gap-3">
            <button class="cancel-btn min-w-[150px]" @click="visible = false">
              لغو
            </button>
            <button class="dash-btn min-w-[150px]" @click="acceptRequestFunc">
              تایید و ارسال
            </button>
          </div>
        </Dialog>
      </div>
      <svg
        class="inline-block cursor-pointer mx-1"
        width="30"
        height="29"
        viewBox="0 0 30 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.796875"
          width="29"
          height="29"
          rx="4"
          fill="#4BAE4F"
          fill-opacity="0.12"
        />
        <path
          d="M13.168 19.861C11.4238 18.2231 9.69037 16.5702 7.94089 14.9323C7.74887 14.752 7.74887 14.4514 7.94089 14.2711L9.95172 12.3828C10.1437 12.2024 10.4638 12.2024 10.6558 12.3828L13.5307 15.0825L20.9233 8.13524C21.1207 7.95492 21.4353 7.95492 21.6327 8.13524L23.6489 10.0286C23.8462 10.2139 23.8462 10.5094 23.6489 10.6898L13.872 19.861C13.68 20.0463 13.3653 20.0463 13.168 19.861Z"
          fill="#4BAE4F"
        />
      </svg>
      <Button @click="visibleRemove = true" unstyled>
        <svg
          class="inline-block cursor-pointer"
          width="30"
          height="29"
          viewBox="0 0 30 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.796875"
            width="29"
            height="29"
            rx="4"
            fill="#EE404C"
            fill-opacity="0.12"
          />
          <path
            d="M10.2194 19.5774C10.3514 19.7113 10.5087 19.8176 10.6821 19.8901C10.8556 19.9626 11.0417 20 11.2297 20C11.4176 20 11.6038 19.9626 11.7772 19.8901C11.9506 19.8176 12.1079 19.7113 12.2399 19.5774L15.2989 16.5184L18.358 19.5774C18.6259 19.8454 18.9893 19.9959 19.3682 19.9959C19.7471 19.9959 20.1105 19.8454 20.3784 19.5774C20.6464 19.3095 20.7969 18.9461 20.7969 18.5672C20.7969 18.1883 20.6464 17.8249 20.3784 17.557L17.3194 14.4979L20.3784 11.4389C20.5111 11.3062 20.6163 11.1487 20.6881 10.9754C20.7599 10.8021 20.7969 10.6163 20.7969 10.4287C20.7969 10.2411 20.7599 10.0553 20.6881 9.88194C20.6163 9.70861 20.5111 9.55111 20.3784 9.41845C20.2458 9.28578 20.0883 9.18055 19.9149 9.10875C19.7416 9.03695 19.5558 9 19.3682 9C19.1806 9 18.9948 9.03695 18.8215 9.10875C18.6481 9.18055 18.4906 9.28578 18.358 9.41845L15.2989 12.4775L12.2399 9.41845C12.1072 9.28578 11.9497 9.18055 11.7764 9.10875C11.6031 9.03695 11.4173 9 11.2297 9C11.042 9 10.8563 9.03695 10.6829 9.10875C10.5096 9.18055 10.3521 9.28578 10.2194 9.41845C10.0868 9.55111 9.98154 9.70861 9.90974 9.88194C9.83794 10.0553 9.80099 10.2411 9.80099 10.4287C9.80099 10.6163 9.83794 10.8021 9.90974 10.9754C9.98154 11.1487 10.0868 11.3062 10.2194 11.4389L13.2785 14.4979L10.2194 17.557C10.0856 17.689 9.97931 17.8463 9.90677 18.0197C9.83423 18.1931 9.79688 18.3792 9.79688 18.5672C9.79688 18.7552 9.83423 18.9413 9.90677 19.1147C9.97931 19.2882 10.0856 19.4454 10.2194 19.5774Z"
            fill="#EE404C"
          />
        </svg>
      </Button>
      <Dialog
        v-model:visible="visibleRemove"
        modal
        header="رد درخواست"
        class="w-11/12 max-w-[400px] text-secondary"
      >
        <template #closebutton>
          <svg
            @click="visible = false"
            class="cursor-pointer"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.05" cx="20.7969" cy="20" r="20" fill="#E71D36" />
            <path
              opacity="0.8"
              d="M21.713 19.9999L25.6068 23.8939C25.8602 24.1472 25.8602 24.5567 25.6068 24.81C25.3535 25.0633 24.944 25.0633 24.6907 24.81L20.7968 20.916L16.903 24.81C16.6496 25.0633 16.2402 25.0633 15.9869 24.81C15.7335 24.5567 15.7335 24.1472 15.9869 23.8939L19.8807 19.9999L15.9869 16.1059C15.7335 15.8526 15.7335 15.4431 15.9869 15.1898C16.1132 15.0635 16.2791 15 16.445 15C16.6108 15 16.7767 15.0635 16.903 15.1898L20.7968 19.0838L24.6907 15.1898C24.8171 15.0635 24.9829 15 25.1488 15C25.3146 15 25.4805 15.0635 25.6068 15.1898C25.8602 15.4431 25.8602 15.8526 25.6068 16.1059L21.713 19.9999Z"
              fill="#E71D36"
            />
          </svg>
        </template>
        <span class="text-surface-500 dark:text-surface-400 block mb-8"
          >آیا میخواهید این درخواست را رد کنید؟</span
        >
        <div class="grid grid-cols-2 md:flex justify-end mt-7 gap-3">
          <button
            class="cancel-btn min-w-[150px]"
            @click="visibleRemove = false"
          >
            خیر
          </button>
          <button class="dash-btn min-w-[150px]" @click="removeRequest">
            بله
          </button>
        </div>
      </Dialog>
    </td>
    <Dialog
      pt:header="hidden"
      v-model:visible="visibleAccepted"
      modal
      :close-icon="'dwada'"
      class="w-11/12 max-w-[510px] text-secondary"
    >
      <h3
        class="flex justify-center items-center gap-2 mt-5 text-[#07C98F] text-2xl"
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.6453 11.8725L23.8886 9.83164C23.5528 9.44414 23.2815 8.72081 23.2815 8.20414V6.00831C23.2815 4.63914 22.1578 3.51539 20.7886 3.51539H18.5928C18.089 3.51539 17.3528 3.24414 16.9653 2.90831L14.9244 1.15164C14.0332 0.389557 12.5736 0.389557 11.6694 1.15164L9.64151 2.92122C9.25401 3.24414 8.51776 3.51539 8.01401 3.51539H5.77943C4.41026 3.51539 3.28651 4.63914 3.28651 6.00831V8.21706C3.28651 8.72081 3.01526 9.44414 2.69234 9.83164L0.948594 11.8854C0.199427 12.7766 0.199427 14.2233 0.948594 15.1146L2.69234 17.1683C3.01526 17.5558 3.28651 18.2791 3.28651 18.7829V20.9916C3.28651 22.3608 4.41026 23.4846 5.77943 23.4846H8.01401C8.51776 23.4846 9.25401 23.7558 9.64151 24.0916L11.6823 25.8483C12.5736 26.6104 14.0332 26.6104 14.9373 25.8483L16.9782 24.0916C17.3657 23.7558 18.089 23.4846 18.6057 23.4846H20.8015C22.1707 23.4846 23.2944 22.3608 23.2944 20.9916V18.7958C23.2944 18.2921 23.5657 17.5558 23.9015 17.1683L25.6582 15.1275C26.4073 14.2362 26.4073 12.7637 25.6453 11.8725ZM18.6703 11.0587L12.4315 17.2975C12.2499 17.4789 12.0036 17.5808 11.7469 17.5808C11.4902 17.5808 11.244 17.4789 11.0623 17.2975L7.93651 14.1716C7.56193 13.7971 7.56193 13.1771 7.93651 12.8025C8.31109 12.4279 8.93109 12.4279 9.30568 12.8025L11.7469 15.2437L17.3011 9.68956C17.6757 9.31497 18.2957 9.31497 18.6703 9.68956C19.0448 10.0641 19.0448 10.6841 18.6703 11.0587Z"
            fill="url(#paint0_linear_1_10239)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_10239"
              x1="13.3021"
              y1="0.580724"
              x2="13.3021"
              y2="26.4205"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#06CE92" />
              <stop offset="1" stop-color="#08BA84" />
            </linearGradient>
          </defs>
        </svg>
        موفق
      </h3>
      <p class="text-center my-4">
        درخواست مشاوره با موفقیت برای وکیل مورد نظر ارسال شد .
      </p>
      <div
        class="bg-[#FAFAFB] border border-[#EFEFEF] p-3 rounded flex justify-between"
      >
        <div class="flex gap-2">
          <svg
            width="58"
            height="57"
            viewBox="0 0 58 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              x="0.796875"
              width="57"
              height="57"
              rx="6"
              fill="url(#pattern0_1_10226)"
            />
            <defs>
              <pattern
                id="pattern0_1_10226"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_1_10226"
                  transform="scale(0.00833333)"
                />
              </pattern>
              <image
                id="image0_1_10226"
                width="120"
                height="120"
                preserveAspectRatio="none"
                xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAeAB4AwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9l8e+EYgxZsYf+HFe5hcQ4H5nnuVRq+9fU4Cy8KrZylFUBGcHOORXsVMXeN+p8hh8smpqM9j0m08HxjRgZHIJGQF7146xUlM/SqWR03RV2cnr3h1EiIIO0HkHnIr2aOK7HiYzJow3ujzvV/D8NvNvjAUN0xXtRxV43PnY5fL2vs76HdeBPBs1xAro25ieuc15GIxkb2PqcFkk5e9J6GV48/al8JfBy/l0aGFvE2vxHY9vbzCOCB+4lmIOCO4UMRjBxXy+Lx8Iu0dWfZ4HL3BKMthi/tY/EOW3tptJ1n4WWL3Kh4NP1Ce8ZyO4aUFQD0/hHNfPyxim9UfRrB8q0kizof7e/ivR4rSbx38N4rnS5pJY21bwffC6WIxgFyYn4Iwc5EnYjqMUo1YyIlRnHdH0b8Pvir4S+M3h86v4R1uHV7ZCEnjTKTWz/3JY2AZG+o57ZFb89jidNt2HeKPD0j25aMlXI616mHrJbnm4rBTlFqLOQs/CrhHWVyzZ+9nmu6pPndzkw1J0I8smbWjeH5rKbbvLIepPpXkYhRZ9rlVerTkknoXdS0VIbaSSNiGHORXlShY/RKFb2luYq2N88Cr5pJXHrUezucWOjGz5RdU01b6dhMoKjjB7V9DCWmh+RVaCm/eMF/DdtHKxx8voa35mzi+pUk72ItUu1tLVRGRsHHWsZXWp9Jg6alaBzl7Os6kMN2fWtadRo662Cg9Jq5zd9o8cxJ8rr0IrtWKaW55Dyqk5cyR5b+0H8arr4YeA/7F0W4e01m+UqbiM4eGLuVPZj0B6jkjpXg4zFNy5YPc9enhVRpe90PiCyf7Rvu7x5DDkttXAZ/fcegryXvZCXdnfaL+0Jq3hTS57HRPDujXMU42G6utM87C9MB2HX9Kn2UftSN/aT6RPa/gd4I8V3PhnX9Tt/Ej6VHqEKSQQ2KhVjumZdhVeArFcrxjPzA425rgnXUZKKO2nQlKPM+pwGq/Ei9/Z0+J2i6x4X1iW/8AFOmFo9ZkaDyYdUhLA+VIocqw2jG4AHOGzuHHo0pcx5tdKDt1P1R8F+M9M+LXgHQ/FehkvpWr2q3MRblkz95G/wBpWDKfdTXbF2Zho1qTz2aWzbdoLdziu5TbRxunG+xHLIIVySM/Wued2z2cJywRj6jqkRtpQG5HXNcrTPqKNZWvE5K41hZGIHCinFanRVTlTbZ6rd6NDJcM+3BPU12Rk0fnUoq5n3vh2zMZEjFWPQiumNRmLpLc8+8Q+HZLdmgZlMD9D611W50FKo6M7mRa6YkIMRG7jGTUOHY9NY1yl7xPbeHix4AZa5ZNq53c8ZO6Pzk+P3iBfiF8WtQhjctp9o7bmHTy0yBz7nn/AIEK+dnP3nP7jpr/ALyUYLpuZ/we+HEXxP8AGsVvcAnSrUgyoBxIc8Kfb/PeuDG4p4en7u7NcvwkcRUc5/DE/Q7wh8GNF/s2Gzexg+yqoHlGIbcfSvlo88nzNnv1KkV7qR6RqngjQR4CvtBhggsxMoKPEgVg68qQRzkHP511c7irX1ONJOabPyN+NGgzeGviNrGn3pLmOY4diWIB5ByeTX1mDqe0oqaPmsdT9nWaPvz/AIJf+L59U+DPifww7mT+w9X8y3B6JFcR7to9t6Sn/gRrvi/e1OBLoj6f1GOX7Vs3bnPQCvSi0c7hIw9Z0m8jJJZkxyea0kk0KjNxdmc1cIIyVdyM/rXHNWPrsGubYytRhRR8qjjvUQ1PXxEuSDbPoBxE3PStLnwnJzM5vUrpYbxlJDJ7VtBl1KfLHQ4zxLaO8rOu4r1wTwK9alax89XbUjmYJgpZnPTtSqPlOzCRdTc5r47fEVfhh8F/EWvwSbL0W4trQg4YTTMI0I91L7v+AmvHqybiz6JwVOKbPzTvLs2NrfXcf/H1fOQhHUJk4/QCvnUuaSXY65u0XJbs99+Ams3HwP0uC61/wu+p6fdFZWvNJnSWWHI4EkRwwwO44968rFQp4qfMpbdGelRdXDU1Bx0et0fcfgP4veGPF+lLcaZvMCjDFk2kHHQivPvGm+RnVKL3NW48d+DdVzDFr2nJcYxta8jUj8Cabp8+qRk5W3Pgj9tj4epa65H4ptdsttIFineMhlz0DZHY8CvUy2ryt0mefmFJTpqquh6V/wAEqdZSy1n4laLyJLiGzulJOflj3r/7VH5V9Fa9jwIeZ9vXkElldNcvKuQcrXoLY7oKMtkVNT8TQ3O97jZux2GBQ52N44Bza5Ueea9rS31yqwgA9Miuec77H1WAyx0/emNtbR/KLTcgc8inFmuN9m6bieka94rhtJPs+/DqOad9T5ajhm43Moast2Qy4f6GtoHFiEo6GX4m1Bm+QYUYxj1r2aK0PkcV8Rxeo3gso43AzzzU1o82x6mWTVPVnzl+3dqU8vwO01EZlik1uHeB6CGcj9QPyryKsHFanv42vTnRSjvc8J+AfwYuPi/Z/b55tlrbqoP1HQfnk/lXx2OxTw03CC1PSwGHjWpqpUPRNR/ZSn03U4J7Pz2aKJ487yPMLbiHdgQWKlsj/dUEEDFcsczbjyyij0Vl9Lm54yaPoTwH8KfEHg/4SXurSz+YUJQIfvntu/OvLmpTvV6HRKcPaKmfJniHRtZXxZDv8M6XfK8zxt9oEqrAgwQ7FT3G7gA/d9xXu4edN07OpY4sTSqRneNJSR3njlYLz9m3W7+Pw8/ho+SPMsCx2K28LlVJwMkg5GM8ZrnoSvi4xUr67mWJSjhZaW02Lv8AwTAkaPxn4pv5ThE0SKBz/tNcEr+kZr7WhDmk0j4atWjRSlJ2PvHxJqUNxFgO3TOVauqpTlHc9XL8VRqPR3OB1e7aZXKsSRXBM/QsCovYg8PSW7T/AL1AZc9T2qI76npYpyjD3Tu9Os4Lq5RAqvGOWHrXXFanxWKxDjF33PN31qe+1JxMSW3+vvWaOrSlS0Ox0G4hhLSvjjpXZSjc+LxlezM/xTefaJGkg2uVHSvaow0sfI4nExvfmPP7/W2Z9sgAx2rV0m2a0sdThC/Mjyn9qq0Pij9nzXlBDS6fJBfRqOvyyKrH8Edz+Fc+MoWouSWxhhcy9tifZuW5lfsHui/CjUZeONQMRP8AuxRt/wCz1+S5srVr+R+t5bO9FLse36xrz3IJtdzQxOPNaJdz7c87R3OM14a1PejBdTsZ/j34YvfBttoTg2U10gWJJkJKMBkiQAfKTjHJ6njNd3tL03Dscf1OXtPaHIWOi6PrjLcTWiLMOCGHIrjvqds3KKPEf23vF+m+F/hIvh+3KLd6tcxxpEnaNCHdsenAH1Ir3Mqoudfn6I+czOryUGnu9Bv7GvgLUfh38NJtY1MNbX/iQxXUcQPKWqqfJz6Ft7tj0K1+mYCjKM1JrQ/COJsypuLoRlZo+idIup7m485ZGk4wyseCK+qxNGEocrR8Zw5mGJpV/a87a7HSJoK3asd3BXO33r5GrhdXY/ojB8QSpQijn00e4W+/dxvkDJUA8V5jpNSsfoUc3oToc03udt4TLpdxM6kLj5mrqp05N2Pi8xxVJRcuY861eBbcGdXVHzyOmTXCpH1EIKouVk2l6qRbuWb5vSuyjN3Pms0wUeVspRa5mUryc9a+6o0VKCkfyrnGZVMNipUuiZheJoS9vJLbOvmjkA969ajh4zWp8nVzyrRqaS0PLvEV9d61o+p6JcRbYdQtZbSQuOgdCv6ZrprZfCpSlDyPYwmb+zxFOvTls02ef/sIeMUsY/F3gi+xFfwzC/ijY8tgCKYf8B2xfmfSv53zvDyVp220Z/X+TYiM48qe+qPbvFkvizR4Zp/DlzZpCSS8Fxbea490O4fkc+1fMwcFpI/QsDDC16yjiXb8jjfDfxM8aWmqosuk6f4gjkOJVhQ2831Hy4H41slTfWx9LmGU4WnQ9pSmlbz/AEPRLLV72eT7VLbNpzSDm2aQOUPuRx+VcziuayPjHpG1z4Y/af8AHa+Ofizc28M/n2ekJ9jRs5UyZzKR+Py/8Br7nL6HsaCb3Z8Fmdf21bljtE+5Pg5Es/wl8HBJWmVtKt23t6lASPoCSPwr9SwEVGhH0P5fz6lOvmNZebPSNIsmsQCB8p9K6as1JWN8tw08Irs3YNZ8iQLgtnpmuGeH5lzI+lo5u6c1SlqXtQ1yLTbfzBjzGGNwrno4XnlqenmWd/V6cVGRzw1i51GQHziI+m1OBXY1Tw+ljxIfXc596M7pFifQ7fULcKyZdeg7V+d31P6mVb2RgXnhO7tvMMSspAJHvXoYdLm948HNcdGVJqKuzjrN7jRdVxd5YOcHPav0PCTjOCS6H8jcUUpRruq1qzdvLOO9RXTBBOeK9um+VH5PVk5Tsc98Qpx4a+Hmv6lb6VHqN7Z2U1zBHj5mdUJH8s4rmxOJnRpTnDoj3MkwUcTj6NGrLlUpK5+X/hbxrq3g7xRZ+ItJvGg1a1lMqytzvJzuDDuGBII7gmvyKrTjWi4z1TP7TozdDllT0sfoz8Gfj14Z+MnhuKRGjtdYjUC70yRxvjbuV/vIezD8cGvg8ZgZ4SpZ6roz7rB4yOKjdOz6o63xBqWh6HZyXJZLcgZJHGa4oxbdkj1Od21eh8tfGf8AastrGxudK8JzC51SZTG16hzHbA9Sp6F/THA/SvocDlspNVKysux87js0jGLp0Xd9+x8p2EkXmgTz7GkcBpGy2MnknHPv3NfUtXPkW2z9j/hN4V0K0+Gnhyy0K6i1bS7Wxhhgv4TlbgKoUyfiQSR2JIr6KjiHGCUXofPYnKqFVupON2zs4NECpkx45q/byb1MIZfSivdiU9R0y3jt5H27WUZ4rrpV23Y+dxuVUqadVRs0cLr2uI9oISCSDyfavZoU2tT85zSs6ijCxZ8NBLiykdCSw7GvKzG/MfoXB9lSdzpdOuhFKjuu4KPwNfCqHvI/bquJ/wBncnuad7exXURcOA2Pu13rQ+bdbnV2eZ+PNOISG5YYZm6AV9Bl1Z87jfofkvGOGTpRqpdSvpVzMbIK8eQeA2K+jw+IV3Fs/FsXgHZVVAy/iT8TPCPw08O2934i1eC3uHBK6eo8y5mHbZGOce5wvqa8nFY2NCcozZ+i5TkNTMMPTq0oWa3bOW/ZN+GvwB/bJ03xbPqnwystJ1jRb9UCWN3PbNJayLmKR1hdE3FklBwuBgcnqfi69S8+aOiZ++4Gg6VCNOpLma6nqur/APBK/wCD1xcNcaJP4i8NTj7jadqe7YfX96jn9a5nLm+LU9GMeR3i7M8v8bf8EmNU8QXcn2b4y6tLp4T91b6xYtdMG9CwmUY9wtOHJDaKFP2s9JTbPLJP+CS3jHSrh2vfiB4bh0xcn7QkM5lCjlmZGVUUAZJJfAANbc1zD2TW582/FjVvClq2m+CPAzrqXhzQppGn8QyQLFPrd2xIacgciJB8kSEkhdzHlyASdtDPY9z/AGaPHvjX4Z6Amp6deCXwxPLvls7mIyQHDMjlTxtcFc4DDd3+7iohWlSeh0Kl7WOp9p6P+0HoJvn0nxIjeE9UTGPt7f6LOp5V4p8BSjDkFguc9K61ilLfQmOHUTtALfW7QTQzx3VpMu6OaFw6OD0IYcEV1QrOOqOWvhIVk4y2OV8WeFYksw0YAx97/GvTw2NlfVnyWaZFSdNOC2Oaty+mR7Ub5T1K12VZ+0V2eJgaMsJL3Wd0iQQgx7lyRkZr5dU2tT7ypjVUXJFj7KxWR5t64UY2k1zVajhsYwb6HO/EmXTdM0KXUtQuY7PTbBPNnmk6KB/M9gBySQKrD4p0pXRw4/Lo4+ChPY+Gfij+2D4g8R+bp/hKOPw5pCEoLoANeSj+8WOQmeuFGR/eNayxlVu8XYulkeDjGKqQUrHzL4l1a41C5nuLi6nu7mVt0lxPIXkkPqWPJrlTcpXlqe9GnGnFRgrJH65f8E1/gR/wqf4K22uXkarr/i2OPVJ2Iw0Vs2Raxn1G0mT2LuKmo7vQ7KSsrn2NDjYDjjt/Ss0bEh2yLgAkEde1UB+b3/BVv4++IfDF7pHws0K7FhpusaZ9v1eWMfvpomleNIQ38KHymLActwCcZB1irK5zVJO9j839MCwyxMI1lRWBKPnawHUcEHnpwalvuYpHvnhD44X2lfBnxF4Be+vII7rS00zTLGBf9EBe5We4uJTuz5mBIBweHwCAoFYPe50RlZWRn+JviPrvjJtKOtPNcR6fYwabamIL8sMS7UGF5J6ksecnr0qHqaJvqT+HfiTr/gvdP4f1nUdPydzx2t48YYj+8n3W/HNOMpR2YXR6z4e/bb165tktPEVlFqMX3Xu7ceVP7kr9xj7ALXVTruLTZcqicXFxue+eDvFtj4/0A6lot0l5BH/rMcMh/usp5B+v4V9Lh60azsj4PNML9Upe2huatn4lXVLaO/gndpQPnRwRn86upRUfdPhcPmE3JVEbWkeI73WYpRAyJLHyTIePpXyOOqRpO0j7HCV6uJ+Dc+KP2tv2j/8AhYurr4O8M3QuNB0uTN7qEbfu7y5HGE9UTkA9GJJ6BSYhTsryPr6MWo+9ufNl3IsYA3FnPU1sjcraHoc/i7xbouhWqmS51G9hs41XqXkcIAPxIrRdWB/RBodhb6LolrFaRCGFYI0SMDARFj+VR7CsHud0drGzAcIT0xn9OKBky+3r/IVQj8VP+ClfiY+Jf2ufElqG3xaRaWenI2c9IVlYD6PM4/Otdkcc9WfOljEsahuAB1rFsSN61uDDEG27XfgDrx61LNE7CXlxLFatIvzMnzEUrFcw9NY/tPSpJ4nYy248wqPvFR1/Ic0ONnZivcfDNHqcaSxOIpSPvY4f6+9G2jHe5Z0T4r6p8LtW+2abcTWt8o2vGhysq/3XHRlPv+FdNCc6c1Km7M4MXh6eKpulWV0z9Dvh7pay6KYT8pQAAkcVzV8f7CXMfBYXAuvFqxF440mTSfh5408m5CM2jXrCXO3Zi3c7vwr56tjvrmJhZdUfR4DAywjd2fl9piNaWyqPvv8AMx9K+om7s+hQk8nmSEnjHQUrAfTP/BNP4Tr8S/2nLLVLuISab4XtZNVl3jKmbIigH1DyBx/1yNW3ZFxV2fs9cMCwAxhiR+ZA/rWB2olt/niHctg/mc00IuwICpOPUj8TVJXM5SP59P2gvE//AAnHx6+IWvK/mRX2vXkkLdf3XnMI/wDxwLVt9Dm6nG246A9OprNgtzSS4Gd/UqOKku4yw1YTGVJh8ykgr6im1bUSZl6dcHS9XPln90TkZ6Yqn7yEmahS1025xazuYZvna1H/ACz+jdcHt3qd1qD0Zo3drZR2sM9sEdJpFbZKAxDj1z14J+tKEnGSfYKkVKNu5+kfgGeRtEU9wcEYrwMf8Vz5rLF7jOQ/aa8RxeHfgb4ruGlKzXNqLCJR1ZpmEZH/AHyzH6A15GXR9pio+Wp79j84FfYmM47V91Y2Ip22Rk9KpITP1L/4JDfDwaR8JfFvjKeLbPrmrJZxMw6wW0ecg+hkmcf8ApTNaa3Pu6cYZSOgAP48n+grI6UWrVdiD2PH4DFNCZnfEXxKvgb4ZeKvETkKuk6Xc32T/wBMoWf+laJaHPJ6n87GWd2ZiXdjkk9SaHoYlqBeMd6hjiTM3lxH1xSEzGgm8vUSCeH4NaNaCE1TNrdAj7uOKIq4CWFzNNcQOMFy5DAjI29entim0kBZ1bUUnimjhjVY4iGD92Oef61MVqO5+pug2Emn6e3lsTuHGK8XMY3ptnzmBj7N+p8z/tza9Nb+E/C+jO5X7ZfvdFfURR7efxmH5V5uR0pe1qVJdrH0Cdz5CZtzADgCvrSyvet8mPXiqQj93/2KvBf/AAgf7Kfw20xo/Llm0kahKCMHddMZ+fcebj8Kzk9Tqp/CeyTY8wg85OP1A/xqGbFq2AkUhhgnn8yapGbdjwj/AIKF+Kh4S/ZC8byRzCKe/ig0+Nc4LiadEdR/2zLn6A1ozlvuz8PIxk59KliZZhODnvUAiO+n2LjNNAY07YkDfiK0QifUbwXFpGCvzjgGhICvpj+XK75xsjOP5f1psBYQXhZf7+V/OjqM/YLRbB/sL+ZHhc8e4rycWrxPCw0bHwz+39fZ+JHhjTR9y30vz8DsZJnB/SIU8tgoUpebPXgfNWK9M1LvhzQJ/FvirR9Ethm51K8is4v9+Rwi/qwpoD+jbTdMg0jT7WwtkEdtaxR28SAcKiqAo/ICoe52R0RC5xMrdjg/qT/SoZfQs6cxHDfeXHH/AAHP8zVIznsfBX/BYH4hx2fgjwR4JhdDNe38mpzKrfMqQxlFBHoWmz/wD2rRmFtD8vFboKlmY8NtI9KkCpdN5r59OKpAU7hCV+lXF2Apsev6Ve4E1spW2lI6txUt6jHW52wZ6YNMR//Z"
              />
            </defs>
          </svg>
          <div class="text-lg text-black flex flex-col justify-between h-full">
            {{ selectedLawyer }}
            <nuxtLink class="text-[9px] md:text-xs block relative top-1.5 md:top-0">وکیل پایه یک کانون وکلای دادگستری</nuxtLink>
          </div>
        </div>
        <div class="flex flex-col justify-between items-end">
          <span
            class="py-0.5 w-[37px] text-center bg-[#06CE92] text-white rounded text-sm"
            >4,9</span
          >
          <NuxtLink
            to="/"
            class="text-[9px] md:text-xs text-[#6C6C6C] flex items-center gap-2"
          >
            پروفایل وکیل
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79688 1L0.796875 5.5L4.79688 10"
                stroke="#979797"
                stroke-width="1.58"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
      <button
        class="w-full rounded bg-secondary text-white mt-5 p-3"
        @click="visibleAccepted = false"
      >
        بستن
      </button>
    </Dialog>
    <Toast />
  </tr>
</template>

<script setup>
const visible = ref(false)
const visibleRemove = ref(false)
const visibleAccepted = ref(false)

let randomNum = Math.ceil(Math.random() * 10)

const selectedLawyer = ref()
const lawyers = ref(['امیر برزگر', 'پوریا', 'اکبر اصغری', 'اصغر اکبری'])

let toast = useToast()

function acceptRequestFunc () {
  if (!selectedLawyer.value) {
    toast.add({
      severity: 'error',
      summary: 'خطا',
      detail: 'برای تایید مشاوره ابتدا باید یک وکیل را انتخاب کنید',
      life: 5000
    })
  } else {
    visible.value = false
    setTimeout(() => {
      visibleAccepted.value = true
    }, 300)
  }
}

function removeRequest () {
  visibleRemove.value = false

  toast.add({
    severity: 'success',
    summary: 'موفقیت آمیز',
    detail: 'درخواست حقوقی با موفقیت رد شد',
    life: 5000
  })
}
</script>
