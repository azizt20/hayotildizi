<template>
  <section class="container">
    <swiper
      :modules="[Pagination]"
      :space-between="10"
      class="banner-swiper"
      :pagination="{ clickable: true, dynamicBullets: true }"
    >
      <swiper-slide
        v-for="banner in banners"
        :key="banner.id"
        class="relative aspect-[339/133] lg:aspect-[48/11] bg-center bg-cover bg-no-repeat rounded-[9px] lg:rounded-[13px]"
        :style="`background-image: url(${banner.image})`"
      >
        <img
          :src="banner.products_image"
          alt="products"
          class="w-[55%] lg:w-[45%] absolute right-[9px] lg:right-10 bottom-[11px] lg:bottom-[34px]"
          loading="lazy"
        />
        <img
          src="~/assets/images/certificates.png"
          alt="banner"
          class="absolute lg:left-1/2 top-[9px] right-[17px] lg:right-auto lg:top-5 lg:-translate-x-1/2 w-[100px] lg:w-auto"
          loading="lazy"
        />
        <img
          src="~/assets/images/logo.svg"
          alt="logo"
          class="absolute left-[17px] lg:left-[6.7%] top-3 lg:top-9 w-[110px] lg:w-[270px]"
          loading="lazy"
        />
        <p
          class="absolute left-[17px] lg:left-[6.7%] top-1/3 lg:top-[40%] max-w-[137px] lg:max-w-[340px] font-light text-xs lg:text-lg 3xl:text-[21px] lg:leading-[27px] 3xl:leading-[31.18px]"
        >
          {{ banner.title }}
        </p>
        <div class="absolute left-[17px] lg:left-[6.7%] bottom-[10%]">
          <btn :to="banner.button_link" size="xs">
            {{ banner.button_text }}
          </btn>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <section id="achievements" class="container mt-10 lg:mt-16">
    <h2 class="text-center text-xl lg:text-[38px] text-primary font-semibold">
      {{ $t("company-achievements") }}
    </h2>
    <p
      class="mt-2 lg:mt-5 text-[13px] lg:text-base text-[#333333] text-center max-w-[844px] mx-auto"
    >
      {{ $t("company-achievements-desc") }}
    </p>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-[22px] lg:mt-[60px]"
    >
      <achievement-card
        v-for="achievement in achievements"
        :key="achievement.id"
        :achievement="achievement"
      />
    </div>
  </section>
  <section class="container lg:mt-[189px] mt-10" v-if="products?.length">
    <div class="flex lg:justify-between flex-col-reverse lg:flex-row">
      <div class="w-full lg:w-1/2">
        <p
          class="text-light text-xs lg:text-[19px] leading-1 lg:leading-[22.8px] text-[#464646]"
        >
          Hayot ildizi
        </p>
        <p
          class="font-bold text-2xl lg:text-[52px] lg:leading-[73.5px] text-[#323638]"
        >
          {{ products[0]?.title }}
        </p>
        <p
          class="text-light text-xs lg:text-[19px] leading-1 lg:leading-[22.8px] text-[#464646]"
        >
          Для активных резидентов
        </p>
        <div class="mt-3 lg:mt-7">
          <div
            v-for="i in 3"
            :key="i"
            class="flex items-start space-x-[14px] mt-3"
          >
            <span
              class="size-3 lg:size-5 mt-1.5 bg-[#29A6243D] rounded-full flex justify-center items-center"
            >
              <span
                class="size-1.5 lg:size-[8.5px] bg-success rounded-full"
              ></span>
            </span>
            <p
              class="w-fit text-xs lg:text-base text-[#333333] lg:leading-[29px]"
            >
              {{ products[0][`description_${i}`] }}
            </p>
          </div>
        </div>
        <div class="mt-6 lg:mt-16 flex items-center space-x-6">
          <btn
            size="lg"
            width="w-[190px]"
            :to="localePath(`/products/${products[0].id}`)"
            >{{ $t("buy") }}</btn
          >
          <btn
            size="lg"
            width="w-[190px]"
            :to="localePath(`/products/${products[0].id}`)"
            outline
            >{{ $t("more") }}</btn
          >
        </div>
      </div>
      <div
        class="lg:ml-10 w-full relative lg:w-auto sm:flex sm:justify-center sm:items-center"
      >
        <div
          class="border-2 border-success/10 aspect-square h-[266px] lg:h-[448px] rounded-full flex items-center justify-center relative float-right"
        >
          <div
            class="bg-success/10 rounded-full aspect-square h-[224px] lg:h-[376px]"
          >
            <img
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[312px] lg:max-h-[525px]"
              :src="products[0].image"
              :alt="products[0].title"
              loading="lazy"
            />
          </div>
          <div
            class="absolute left-[7%] top-1/4 vitamin flex items-center space-x-2"
          >
            <p class="text-[10px] lg:text-sm font-semibold">
              {{ products[0].vitamin_1 }}
            </p>
            <div
              class="border border-success aspect-square h-[26px] lg:h-[45px] rounded-full flex items-center justify-center"
            >
              <div
                class="bg-success rounded-full aspect-square h-[17.5px] lg:h-[29px]"
              ></div>
            </div>
          </div>
          <div
            class="absolute left-0 top-1/2 vitamin flex items-center space-x-2"
          >
            <p class="text-[10px] lg:text-sm font-semibold">
              {{ products[0].vitamin_2 }}
            </p>
            <div
              class="border border-success aspect-square h-[26px] lg:h-[45px] rounded-full flex items-center justify-center"
            >
              <div
                class="bg-success rounded-full aspect-square h-[17.5px] lg:h-[29px]"
              ></div>
            </div>
          </div>
          <div
            class="absolute left-[7%] top-3/4 vitamin flex items-center space-x-2"
          >
            <p class="text-[10px] lg:text-sm font-semibold">
              {{ products[0].vitamin_1 }}
            </p>
            <div
              class="border border-success aspect-square h-[26px] lg:h-[45px] rounded-full flex items-center justify-center"
            >
              <div
                class="bg-success rounded-full aspect-square h-[17.5px] lg:h-[29px]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="container lg:mt-[130px] mt-10"
    v-if="products?.length && products.length > 1"
  >
    <div class="flex lg:justify-between flex-col lg:flex-row">
      <div
        class="w-full relative lg:w-1/2 sm:flex sm:justify-center sm:items-center"
      >
        <div
          class="border-2 border-success/10 aspect-square h-[266px] lg:h-[448px] rounded-full flex items-center justify-center relative float-right"
        >
          <div
            class="bg-success/10 rounded-full aspect-square h-[224px] lg:h-[376px]"
          >
            <img
              class="absolute left-1/2 top-1/2 -translate-x-[35%] -translate-y-1/2 max-h-[312px] lg:max-h-[525px]"
              :src="products[1].image"
              :alt="products[1].title"
              loading="lazy"
            />
          </div>
          <div
            class="absolute left-[7%] top-1/4 vitamin flex items-center space-x-2"
          >
            <p class="text-[10px] lg:text-sm font-semibold">
              {{ products[1].vitamin_1 }}
            </p>
            <div
              class="border border-success aspect-square h-[26px] lg:h-[45px] rounded-full flex items-center justify-center"
            >
              <div
                class="bg-success rounded-full aspect-square h-[17.5px] lg:h-[29px]"
              ></div>
            </div>
          </div>
          <div
            class="absolute left-0 top-1/2 vitamin flex items-center space-x-2"
          >
            <p class="text-[10px] lg:text-sm font-semibold">
              {{ products[1].vitamin_2 }}
            </p>
            <div
              class="border border-success aspect-square h-[26px] lg:h-[45px] rounded-full flex items-center justify-center"
            >
              <div
                class="bg-success rounded-full aspect-square h-[17.5px] lg:h-[29px]"
              ></div>
            </div>
          </div>
          <div
            class="absolute left-[7%] top-3/4 vitamin flex items-center space-x-2"
          >
            <p class="text-[10px] lg:text-sm font-semibold">
              {{ products[1].vitamin_1 }}
            </p>
            <div
              class="border border-success aspect-square h-[26px] lg:h-[45px] rounded-full flex items-center justify-center"
            >
              <div
                class="bg-success rounded-full aspect-square h-[17.5px] lg:h-[29px]"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-2 sm:px-0 lg:w-1/2 lg:ml-10">
        <p
          class="text-light text-xs lg:text-[19px] leading-1 lg:leading-[22.8px] text-[#464646]"
        >
          Hayot ildizi
        </p>
        <p
          class="font-bold text-2xl lg:text-[52px] lg:leading-[73.5px] text-[#323638]"
        >
          {{ products[1]?.title }}
        </p>
        <p
          class="text-light text-xs lg:text-[19px] leading-1 lg:leading-[22.8px] text-[#464646]"
        >
          Для активных резидентов
        </p>
        <div class="mt-7">
          <div
            v-for="i in 3"
            :key="i"
            class="flex items-start space-x-[14px] mt-3"
          >
            <span
              class="size-3 lg:size-5 mt-1.5 bg-[#29A6243D] rounded-full flex justify-center items-center"
            >
              <span
                class="size-1.5 lg:size-[8.5px] bg-success rounded-full"
              ></span>
            </span>
            <p
              class="w-fit text-xs lg:text-base text-[#333333] lg:leading-[29px]"
            >
              {{ products[1][`description_${i}`] }}
            </p>
          </div>
        </div>
        <div class="mt-6 lg:mt-16 flex items-center space-x-6">
          <btn
            size="lg"
            width="w-[190px]"
            :to="localePath(`/products/${products[1].id}`)"
            >{{ $t("buy") }}</btn
          >
          <btn
            size="lg"
            width="w-[190px]"
            :to="localePath(`/products/${products[1].id}`)"
            outline
            >{{ $t("more") }}</btn
          >
        </div>
      </div>
    </div>
  </section>
  <section id="illnesses" class="container lg:mt-[210px] mt-10">
    <h2
      class="text-center text-xl lg:text-[38px] text-primary font-semibold max-w-[700px] mx-auto"
    >
      {{ $t("illness-title") }}
    </h2>
    <div class="grid gird-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-4 lg:mt-12">
      <illness-card
        v-for="illness in illnesses"
        :key="illness.id"
        :illness="illness"
      />
    </div>
  </section>
  <section class="container lg:mt-[130px] mt-10 w-full">
    <h2
      class="text-center text-xl lg:text-[38px] text-primary font-semibold max-w-[700px] mx-auto"
    >
      {{ $t("latest-blogs") }}
    </h2>
    <div
      class="grid gird-cols-1 lg:grid-cols-3 4xl:grid-cols-4 gap-3 lg:gap-8 mt-4 lg:mt-9"
    >
      <blog-card v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
    <div class="w-full flex justify-center mt-6 lg:mt-16">
      <btn size="lg" :to="localePath('blogs')" outline>{{
        $t("show-all")
      }}</btn>
    </div>
  </section>
  <section class="w-full overflow-x-hidden mt-10" id="reviews">
    <div class="container overflow-x-visible">
      <h2
        class="text-center text-xl lg:text-[38px] text-primary font-semibold max-w-[700px] mx-auto"
      >
        {{ $t("clients-review") }}
      </h2>
      <swiper
        :modules="[Navigation]"
        :space-between="20"
        :slides-per-view="'auto'"
        :breakpoints="{
          2500: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }"
        class="rounded-[13px] review-swiper mt-4 lg:mt-10"
        :navigation="{ nextEl: '.button-next', prevEl: '.button-prev' }"
      >
        <swiper-slide
          v-for="review in reviews"
          :key="review.id"
          class="relative max-w-[320px] md:max-w-full"
        >
          <review-card :review="review" />
        </swiper-slide>
        <div class="flex justify-between mt-12 container !ml-0">
          <div></div>
          <div class="flex space-x-4">
            <button
              class="button-prev rounded-full border-2 border-success size-[35px] flex items-center justify-center disabled:border-[#999999] group"
            >
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="transform rotate-180"
              >
                <path
                  d="M9 9L13 5M13 5L9 1M13 5L1 5"
                  class="stroke-[#03A64A] group-disabled:stroke-[#999999]"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              class="button-next rounded-full border-2 border-success size-[35px] flex items-center justify-center disabled:border-[#999999] group"
            >
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 9L13 5M13 5L9 1M13 5L1 5"
                  class="stroke-[#03A64A] group-disabled:stroke-[#999999]"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </swiper>
    </div>
  </section>
  <section class="container mt-10 lg:mt-[130px]" id="certificates">
    <h2
      class="text-center text-xl lg:text-[38px] text-primary font-semibold max-w-[700px] mx-auto"
    >
      {{ $t("our-certificates") }}
    </h2>
    <swiper
      :modules="[Navigation]"
      :space-between="20"
      :slides-per-view="3"
      :breakpoints="{
        2500: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }"
      class="mt-10"
      :navigation="{ nextEl: '.button-next', prevEl: '.button-prev' }"
    >
      <swiper-slide
        v-for="certificate in certificates"
        :key="certificate.id"
        class="relative"
      >
        <img
          :src="certificate.image"
          alt="certificate"
          class="w-full"
          loading="lazy"
        />
      </swiper-slide>
      <button
        aria-label="previous"
        class="button-prev absolute z-10 left-1 top-1/2 -translate-y-1/2 rounded-full bg-white size-12 flex items-center justify-center disabled:border-[#999999] group"
      >
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1L1 6L5 11"
            stroke="#262626"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        aria-label="next"
        class="button-next absolute z-10 right-1 top-1/2 -translate-y-1/2 rounded-full bg-white size-12 flex items-center justify-center disabled:border-[#999999] group"
      >
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="transform rotate-180"
        >
          <path
            d="M5 1L1 6L5 11"
            stroke="#262626"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </swiper>
  </section>
  <section class="container mt-10 lg:mt-[93px]" id="contact-us">
    <contact-us />
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const banners = api("/banners/").data;
const achievements = api("/achievements/").data;
const products = api("/products/").data;
const illnesses = api("/illnesses/").data;
const blogs = api("/blogs/").data;
const reviews = api("/reviews/").data;
const certificates = api("/certificates/").data;

const localePath = useLocalePath();

useSeoMeta({
  title: "Hayot Ildizi | Jenshen ekstrakti va Spirulina",
  ogTitle: "Hayot Ildizi | Jenshen ekstrakti va Spirulina",
  description:
    "🌿 Go'zallik va salomatlik bir flakonda! Spirulina va Ginseng Extract. 🚛 Bepul yetkazish xizmati.",
  ogDescription:
    "🌿 Go'zallik va salomatlik bir flakonda! Spirulina va Ginseng Extract. 🚛 Bepul yetkazish xizmati.",
});
</script>

<style scoped>
.vitamin {
  transform: translate(calc(-100% + 13px), -50%);
}
@media screen and (min-width: 1024px) {
  .vitamin {
    transform: translate(calc(-100% + 22.5px), -50%);
  }
}
</style>
