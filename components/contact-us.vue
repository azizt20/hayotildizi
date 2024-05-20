<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
    <img src="~/assets/images/contact-us.png" alt="contact us" class="w-full" />
    <div class="flex items-center justify-center">
      <div
        class="bg-white p-4 lg:p-7 rounded-[10px] border border-[#E9E9E9] shadow-lg w-full max-w-[562px]"
      >
        <div>
          <label
            for="name"
            class="text-sm lg:text-base block font-semibold text-primary"
            >{{ $t("first_name-last_name") }}</label
          >
          <div class="mt-1 lg:mt-2">
            <input
              type="text"
              name="name"
              id="name"
              class="block bg-[#F7F7F7] w-full rounded-lg text-sm lg:text-base border-0 py-2 px-3 lg:py-4 lg:px-6 text-primary ring-1 ring-inset ring-[#E9E9E9] placeholder:text-[#B0B0B0] focus:ring-2 focus:ring-inset focus:outline-none focus:ring-success"
              :placeholder="$t('enter-name')"
              v-model="form.name"
            />
          </div>
        </div>
        <div class="mt-4 lg:mt-8">
          <label
            for="phone"
            class="text-sm lg:text-base block font-semibold text-primary"
            >{{ $t("phone_number") }}</label
          >
          <div class="mt-1 lg:mt-2">
            <input
              type="tel"
              name="phone"
              ref="phone"
              id="phone"
              class="phone-input block bg-[#F7F7F7] w-full rounded-lg text-sm lg:text-base border-0 py-2 px-3 lg:py-4 lg:px-6 text-primary ring-1 ring-inset ring-[#E9E9E9] placeholder:text-[#B0B0B0] focus:ring-2 focus:ring-inset focus:outline-none focus:ring-success"
              v-model="form.phone"
            />
          </div>
        </div>
        <div class="mt-4 lg:mt-8">
          <Listbox as="div" v-model="form.region">
            <ListboxLabel
              class="text-sm lg:text-base block font-semibold text-primary"
              >{{ $t("region") }}</ListboxLabel
            >
            <div class="relative mt-1 lg:mt-2">
              <ListboxButton
                class="relative w-full text-sm lg:text-base cursor-default rounded-lg bg-[#F7F7F7] py-2 pl-3 pr-10 lg:py-4 lg:pl-6 text-left text-primary shadow-sm ring-1 ring-inset ring-[#E9E9E9] focus:outline-none focus:ring-2 focus:ring-success"
              >
                <span class="block truncate" :class="form.region === '' ? 'text-[#B0B0B0]' : ''">{{
                  form.region === "" ? $t("enter-region") : form.region
                }}</span>
                <span
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <ChevronDownIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-success ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    as="template"
                    v-for="(region, i) in regions"
                    :key="i"
                    :value="region"
                    v-slot="{ active, selected }"
                  >
                    <li
                      :class="[
                        active ? 'bg-success text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-semibold' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ region }}</span
                      >

                      <span
                        v-if="selected"
                        :class="[
                          active ? 'text-white' : 'text-success',
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                        ]"
                      >
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <div class="mt-4 lg:mt-10">
          <btn full @click.stop="save" :disabled="loading">{{
            $t("get-consultation")
          }}</btn>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-[100]"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon
                  class="h-6 w-6 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  {{ $t("consultation-requested") }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t("consultation-requested-message") }}
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="show = false"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import intlTelInput from "intl-tel-input";
import ru from "intl-tel-input/i18n/ru";

import "intl-tel-input/build/css/intlTelInput.css";

const form = ref({
  name: "",
  phone: "",
  region: "",
});

const { t } = useI18n();

const show = ref(false);
const loading = ref(false);
const iti = ref(null);

const save = () => {
  if (!form.value.name || form.value.name.length < 3) {
    return;
  }
  if (!form.value.phone || iti.value.getNumber().length < 10) {
    return;
  }
  if (!form.value.region || form.value.region.length < 3) {
    return;
  }
  loading.value = true;
  api("/contact-us/", {
    method: "POST",
    body: { ...form.value, phone: iti.value.getNumber() },
  })
    .then(() => {
      form.value.name = "";
      form.value.phone = "";
      form.value.region = "";
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 5000);
    })
    .catch(() => {
      alert("Something went wrong, please try again later");
    });
  loading.value = false;
};
onMounted(() => {
  const input = document.querySelector("#phone");
  iti.value = intlTelInput(input, {
    i18n: ru,
    initialCountry: "uz",
    separateDialCode: true,
    countryOrder: ["uz", "kg", "tj", "tm", "kz", "ru"],
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.7/build/js/utils.js",
  });
});

const regions = computed(() => {
  return [
    t("tashkent"),
    t("samarkand"),
    t("bukhara"),
    t("fergana"),
    t("namangan"),
    t("andijan"),
    t("navoi"),
    t("karakalpakstan"),
    t("surkhandarya"),
    t("kashkadarya"),
    t("khorezm"),
    t("jizzakh"),
  ];
});
</script>
