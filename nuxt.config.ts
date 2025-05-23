// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#001A46',
      100: '#001A46',
      200: '#001A46',
      300: '#001A46',
      400: '#001A46',
      500: '#001A46',
      600: '#001A46',
      700: '#001A46',
      800: '#001A46',
      900: '#001A46',
      950: '#001A46'
    },
  },
  pt: {
    button: {
      root: {
        class: 'border-0'
      }
    }
  }
})
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        dir: 'rtl'
      },
      link: [
        { rel: 'icon', href: '/logo.svg' }
      ]
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2025-03-30',
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: 'none',
          cssLayer: false,
        },
      }
    },
  }
})