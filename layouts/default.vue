<template>
  <nav
    class="h-[42px] lg:h-[82px] bg-white shadow-lg fixed z-50 w-full flex items-center max-w-full"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <nuxt-link :to="`/${locale}`">
              <img
                class="h-[26px] lg:h-8 3xl:h-10 w-auto"
                src="~/assets/images/logo.svg"
                alt="Hayot Ildizi"
              />
            </nuxt-link>
          </div>
          <div
            class="hidden lg:ml-8 2xl:ml-16 lg:flex 2xl:space-x-8 items-center"
          >
            <!-- Current: "border-indigo-500 text-gray-900", Default: "text-[#262626] font-semibold hover:border-gray-300 hover:text-gray-700" -->
            <nuxt-link
              :to="`/${locale}`"
              class="lg:text-sm 3xl:text-base inline-flex items-center border-b px-1 pt-1 pb-2 font-semibold"
              :class="
                $route.fullPath === '/ru' || $route.fullPath === '/uz'
                  ? 'border-[#03A64A] text-primary'
                  : 'text-[#5E5E5E] hover:text-gray-700 hover:border-gray-300 border-transparent'
              "
            >
              {{ $t("home") }}
            </nuxt-link>
            <nuxt-link
              :to="`/${locale}#achievements`"
              class="lg:text-sm 3xl:text-base inline-flex items-center border-b px-1 pt-1 pb-2 font-semibold"
              :class="
                $route.fullPath.includes('#achievements')
                  ? 'border-[#03A64A] text-primary'
                  : 'text-[#5E5E5E] hover:text-gray-700 hover:border-gray-300 border-transparent'
              "
              >{{ $t("about") }}
            </nuxt-link>
            <nuxt-link
              :to="`/${locale}#illnesses`"
              class="lg:text-sm 3xl:text-base inline-flex items-center border-b px-1 pt-1 pb-2 font-semibold"
              :class="
                $route.fullPath.includes('#illnesses')
                  ? 'border-[#03A64A] text-primary'
                  : 'text-[#5E5E5E] hover:text-gray-700 hover:border-gray-300 border-transparent'
              "
            >
              {{ $t("illnesses") }}
            </nuxt-link>
            <nuxt-link
              :to="`/${locale}#reviews`"
              class="lg:text-sm 3xl:text-base inline-flex items-center border-b px-1 pt-1 pb-2 font-semibold"
              :class="
                $route.fullPath.includes('#reviews')
                  ? 'border-[#03A64A] text-primary'
                  : 'text-[#5E5E5E] hover:text-gray-700 hover:border-gray-300 border-transparent'
              "
            >
              {{ $t("reviews") }}
            </nuxt-link>
            <nuxt-link
              :to="`/${locale}#certificates`"
              class="lg:text-sm 3xl:text-base inline-flex items-center border-b px-1 pt-1 pb-2 font-semibold"
              :class="
                $route.fullPath.includes('#certificates')
                  ? 'border-[#03A64A] text-primary'
                  : 'text-[#5E5E5E] hover:text-gray-700 hover:border-gray-300 border-transparent'
              "
            >
              {{ $t("certificates") }}
            </nuxt-link>
          </div>
        </div>
        <div class="hidden lg:flex items-center space-x-5">
          <Menu as="div" class="relative text-left">
            <div>
              <MenuButton
                class="inline-flex w-full justify-center rounded-sm ring-1 ring-[#E1E1E1] bg-[#F4F4F4] px-2 py-1 3xl:px-4 3xl:py-2 text-sm font-medium text-primary hover:bg-[#e5e5e5] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                <div class="flex items-center space-x-1">
                  <img
                    :src="`https://hatscripts.github.io/circle-flags/flags/${activeLocale.alpha2}.svg`"
                    class="rounded-full size-4"
                  />
                  <span class="text-sm 3xl:text-base">
                    {{ activeLocale.short }}
                  </span>
                </div>
                <ChevronDownIcon
                  class="-mr-1 ml-2 h-5 w-5 text-primary"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10"
              >
                <div class="px-1 py-1">
                  <MenuItem
                    v-slot="{ active }"
                    v-for="lang in locales"
                    :key="lang.code"
                  >
                    <button
                      :class="[
                        lang.code == locale
                          ? 'bg-success/30 text-white'
                          : 'text-primary hover:bg-success/10 transition',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                      @click="setLocale(lang.code)"
                    >
                      <img
                        :src="`https://hatscripts.github.io/circle-flags/flags/${lang.alpha2}.svg`"
                        class="rounded-full size-4"
                      />
                      <span class="ml-2">
                        {{ lang.name }}
                      </span>
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <btn :to="`/${locale}#contact-us`"> {{ $t("contact-us") }} </btn>
        </div>
        <div class="lg:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1 8.90005H0.9C0.661306 8.90005 0.432387 8.80519 0.263604 8.63644C0.0948213 8.46769 0 8.23873 0 8.00005C0 7.76135 0.0948213 7.53244 0.263604 7.36365C0.432387 7.19487 0.661306 7.10005 0.9 7.10005H17.1C17.3387 7.10005 17.5676 7.19487 17.7364 7.36365C17.9051 7.53244 18 7.76135 18 8.00005C18 8.23873 17.9051 8.46769 17.7364 8.63644C17.5676 8.80519 17.3387 8.90005 17.1 8.90005ZM17.1 2.60005H0.9C0.661306 2.60005 0.432387 2.50522 0.263604 2.33645C0.0948213 2.16766 0 1.93875 0 1.70005C0 1.46135 0.0948213 1.23244 0.263604 1.06365C0.432387 0.894873 0.661306 0.800049 0.9 0.800049H17.1C17.3387 0.800049 17.5676 0.894873 17.7364 1.06365C17.9051 1.23244 18 1.46135 18 1.70005C18 1.93875 17.9051 2.16766 17.7364 2.33645C17.5676 2.50522 17.3387 2.60005 17.1 2.60005ZM17.1 15.2001H0.9C0.661306 15.2001 0.432387 15.1052 0.263604 14.9364C0.0948213 14.7677 0 14.5387 0 14.3001C0 14.0614 0.0948213 13.8324 0.263604 13.6637C0.432387 13.4949 0.661306 13.4001 0.9 13.4001H17.1C17.3387 13.4001 17.5676 13.4949 17.7364 13.6637C17.9051 13.8324 18 14.0614 18 14.3001C18 14.5387 17.9051 14.7677 17.7364 14.9364C17.5676 15.1052 17.3387 15.2001 17.1 15.2001Z"
                fill="#5E5E5E"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <Dialog
      as="div"
      class="lg:hidden w-full"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-[101] max-w-full bg-black/70" />
      <DialogPanel
        class="fixed inset-y-0 left-0 z-[101] w-full max-w-[80%] overflow-y-auto bg-white px-[18px] pt-2 pb-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between">
            <nuxt-link :to="`/${locale}`" class="-m-1.5 p-1.5">
              <span class="sr-only">Hayot Ildizi</span>
              <div>
                <nuxt-link :to="`/${locale}`">
                  <img
                    src="~/assets/images/logo.svg"
                    alt="Hayot Ildizi"
                    class="h-[26px]"
                  />
                </nuxt-link>
              </div>
            </nuxt-link>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <nuxt-link
                  :to="`/${locale}`"
                  class="block items-center border-b px-1 pt-1 pb-2 font-semibold"
                  :class="
                    $route.fullPath === '/ru' || $route.fullPath === '/uz'
                      ? 'border-[#03A64A] text-primary'
                      : 'text-[#5E5E5E] hover:text-gray-700 hover:border-gray-300 border-transparent'
                  "
                  @click="mobileMenuOpen = false"
                >
                  {{ $t("home") }}
                </nuxt-link>
                <nuxt-link
                  :to="`/${locale}#achievements`"
                  class="block items-center border-b px-1 pt-1 pb-2 font-semibold"
                  :class="
                    $route.fullPath.includes('#achievements')
                      ? 'border-[#03A64A] text-primary'
                      : 'text-[#5E5E5E] hover:text-gray-700 hover:border-gray-300 border-transparent'
                  "
                  @click="mobileMenuOpen = false"
                  >{{ $t("about") }}
                </nuxt-link>
                <nuxt-link
                  :to="`/${locale}#illnesses`"
                  class="block items-center border-b px-1 pt-1 pb-2 font-semibold"
                  :class="
                    $route.fullPath.includes('#illnesses')
                      ? 'border-[#03A64A] text-primary'
                      : 'text-[#5E5E5E] hover:text-gray-700 hover:border-gray-300 border-transparent'
                  "
                  @click="mobileMenuOpen = false"
                >
                  {{ $t("illnesses") }}
                </nuxt-link>
                <nuxt-link
                  :to="`/${locale}#reviews`"
                  class="block items-center border-b px-1 pt-1 pb-2 font-semibold"
                  :class="
                    $route.fullPath.includes('#reviews')
                      ? 'border-[#03A64A] text-primary'
                      : 'text-[#5E5E5E] hover:text-gray-700 hover:border-gray-300 border-transparent'
                  "
                  @click="mobileMenuOpen = false"
                >
                  {{ $t("reviews") }}
                </nuxt-link>
                <nuxt-link
                  :to="`/${locale}#certificates`"
                  class="block items-center border-b px-1 pt-1 pb-2 font-semibold"
                  :class="
                    $route.fullPath.includes('#certificates')
                      ? 'border-[#03A64A] text-primary'
                      : 'text-[#5E5E5E] hover:text-gray-700 hover:border-gray-300 border-transparent'
                  "
                  @click="mobileMenuOpen = false"
                >
                  {{ $t("certificates") }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Menu as="div" class="relative text-left mb-4">
            <div>
              <MenuButton
                class="inline-flex w-full justify-center rounded-sm ring-1 ring-[#E1E1E1] bg-[#F4F4F4] px-4 py-2 text-sm font-medium text-primary hover:bg-[#e5e5e5] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                <div class="flex items-center space-x-1">
                  <img
                    :src="`https://hatscripts.github.io/circle-flags/flags/${locale}.svg`"
                    class="rounded-full size-4"
                  />
                  <span v-if="locale == 'uz'">O'zb</span>
                  <span v-else-if="locale == 'ru'">Рус</span>
                </div>
                <ChevronUpIcon
                  class="-mr-1 ml-2 h-5 w-5 text-primary"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-full top-0 -translate-y-[115%] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10"
              >
                <div class="px-1 py-1">
                  <MenuItem
                    v-slot="{ active }"
                    v-for="lang in locales"
                    :key="lang.code"
                  >
                    <button
                      :class="[
                        lang.code === locale ? 'bg-success/30 text-white' : 'text-primary hover:bg-success/10 transition',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                      @click="setLocale(lang.code)"
                    >
                      <img
                        :src="`https://hatscripts.github.io/circle-flags/flags/${lang.alpha2}.svg`"
                        class="rounded-full size-4"
                      />
                      <span class="ml-2">
                        {{ lang.name }}
                      </span>
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <btn
            full
            :to="`/${locale}#contact-us`"
            @click="mobileMenuOpen = false"
          >
            {{ $t("contact-us") }}
          </btn>
        </div>
      </DialogPanel>
    </Dialog>
  </nav>
  <div
    class="pt-[54px] lg:pt-[94px] lg:pb-[100px] pb-3 main"
    :class="$route.name.startsWith('index__') ? 'bg-[#FAFDF2]' : 'bg-white'"
  >
    <slot />
  </div>
  <footer class="bg-primary pt-6 pb-3" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="container">
      <div class="2xl:grid 2xl:grid-cols-8 lg:gap-8">
        <div class="xl:col-span-4">
          <img
            class="h-8 lg:h-12 text-white"
            src="~/assets/images/footer-logo.svg"
            alt="Hayot Ildizi"
          />
          <p class="text-white/50 font-light mt-3 text-sm lg:text-base">
            {{ $t("footer-text") }}
          </p>
          <div class="flex mt-4 items-center space-x-3">
            <img
              class="size-6 lg:size-8"
              src="~/assets/images/phone.svg"
              alt="phone-icon"
            />
            <nuxt-link
              to="tel:+998(71) 230 33 99"
              class="text-success lg:text-[21px] font-medium"
              >+998(71) 230 33 99</nuxt-link
            >
          </div>
        </div>
        <div class="mt-8 xl:col-span-4 xl:mt-0">
          <div class="lg:grid lg:grid-cols-4 md:gap-8 space-y-4 md:space-y-0">
            <div class="lg:text-left">
              <nuxt-link
                :to="`/${locale}#achievements`"
                class="text-sm 3xl:text-lg text-[#F7F8FB] font-bold"
              >
                {{ $t("about") }}
              </nuxt-link>
            </div>
            <div class="lg:text-center">
              <nuxt-link
                :to="`/${locale}#illnesses`"
                class="text-sm 3xl:text-lg text-[#F7F8FB] font-bold"
              >
                {{ $t("illnesses") }}
              </nuxt-link>
            </div>
            <div class="lg:text-center">
              <nuxt-link
                :to="`/${locale}#reviews`"
                class="text-sm 3xl:text-lg text-[#F7F8FB] font-bold"
              >
                {{ $t("reviews") }}
              </nuxt-link>
            </div>
            <div class="lg:text-right">
              <nuxt-link
                :to="`/${locale}#certificates`"
                class="text-sm 3xl:text-lg text-[#F7F8FB] font-bold"
              >
                {{ $t("certificates") }}
              </nuxt-link>
            </div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-y-[18px] mt-6">
            <div class="flex items-center space-x-2">
              <img
                class="size-8"
                src="~/assets/images/instagram.svg"
                alt="instagram-icon"
              />
              <nuxt-link to="https://www.instagram.com/hayotildizi" class="text-[#FFFFFFD9]"
                >@hayotildizi</nuxt-link
              >
            </div>
            <div class="flex items-center space-x-2 lg:justify-center">
              <img
                class="size-8"
                src="~/assets/images/facebook.svg"
                alt="facebook-icon"
              />
              <nuxt-link to="https://www.facebook.com/hayotildizi/" class="text-[#FFFFFFD9]"
                >@hayotildizi</nuxt-link
              >
            </div>
            <div class="flex items-center space-x-2 lg:justify-end">
              <img
                class="size-8"
                src="~/assets/images/telegram.svg"
                alt="telegram-icon"
              />
              <nuxt-link to="https://t.me/hayotildizi" class="text-[#FFFFFFD9]"
                >@hayotildizi</nuxt-link
              >
            </div>
            <div class="flex items-center space-x-2">
              <img
                class="size-8"
                src="~/assets/images/youtube.svg"
                alt="youtube-icon"
              />
              <nuxt-link to="https://www.youtube.com/@user-tc3xo2ih5e" class="text-[#FFFFFFD9]"
                >@hayotildizi</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-7 border-t border-[#FFFFFF1F] pt-4">
        <p class="text-[#FFFFFFBF] text-center text-xs lg:text-base">
          {{ $t("copy-right") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const { locale, setLocale } = useI18n();
const mobileMenuOpen = ref(false);
const route = useRoute();
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
  }
);
const locales = [
  { name: "O'zbekcha", code: "uz", alpha2: "uz", short: "O'zb" },
  { name: "Русский", code: "ru", alpha2: "ru", short: "Рус" },
  { name: "Қазақша", code: "kk", alpha2: "kz", short: "Қаз" },
  { name: "Кыргызча", code: "ky", alpha2: "kg", short: "Кыр" },
  { name: "Тоҷикӣ", code: "tg", alpha2: "tj", short: "Тоҷ" },
  { name: "Түркмәнчә", code: "tk", alpha2: "tm", short: "Түр" },
];

const activeLocale = computed(() => {
  return locales.find((l) => l.code === locale.value);
});
</script>
