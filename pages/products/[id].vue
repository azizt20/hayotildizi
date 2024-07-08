<template>
  <div class="container lg:mt-10" v-if="product">
    <div
      style="background-image: url('/images/illness-bg.png')"
      class="w-full flex flex-col lg:flex-row-reverse items-start aspect-[12/5] bg-center bg-cover bg-no-repeat px-4 lg:pr-[78px] lg:pl-[62px] pb-10"
    >
      <img
        class="w-full lg:w-[35%] 4xl:max-h-[85%] object-contain transform lg:rotate-[14deg] mt-4 lg:mt-10"
        :src="product.image"
        :alt="product.title"
        loading="lazy"
      />
      <div class="lg:w-[65%] lg:mt-10">
        <div
          class="border-b-[3px] border-[#CBEA7B] text-xs lg:text-[21px] font-semibold py-[10px] w-fit"
        >
          {{ $t("transform-health") }}
        </div>
        <h1 class="text-xl lg:text-5xl font-bold text-[#323638] mt-1.5 lg:mt-3">
          {{ product.title }}
        </h1>
        <p class="text-sm lg:text-base text-[#5E5E5E] mt-2 lg:mt-5">
          {{ product.description }}
        </p>
        <btn class="mt-3 lg:mt-12" to="#contact-us">
          {{ $t("book-now") }}
        </btn>
        <div class="flex mt-3 lg:mt-9 space-x-2 items-center">
          <div
            class="flex px-[10px] py-2 border border-[#CBEA7B] rounded-[58px] w-[75px]"
          >
            <img
              class="size-[25px]"
              src="~/assets/images/person1.png"
              alt="person1"
              loading="lazy"
            />
            <img
              class="size-[25px] absolute ml-[15px] z-[2]"
              src="~/assets/images/person2.png"
              alt="person2"
              loading="lazy"
            />
            <img
              class="size-[25px] absolute ml-[30px] z-[3]"
              src="~/assets/images/person3.png"
              alt="person3"
              loading="lazy"
            />
          </div>
          <span class="text-[#323638] text-xs lg:text-xl font-semibold">
            <span class="text-success font-bold">430+</span>
            {{ $t("happy-customers") }}
          </span>
        </div>
      </div>
    </div>
    <h2
      class="text-center text-xl lg:text-[38px] text-primary font-semibold lg:mt-16"
    >
      {{ $t("features") }}
    </h2>
    <p
      class="mt-2 lg:mt-5 text-[13px] lg:text-base text-[#333333] text-center max-w-[844px] mx-auto"
    >
      {{ $t("features-desc") }}
    </p>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-[22px] lg:mt-[60px]"
    >
      <features-card
        v-for="feature in product.features"
        :key="feature.id"
        :feature="feature"
      />
    </div>
    <div id="contact-us" class="mt-10">
      <contact-us />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const product = api(`/products/${route.params.id}/`).data;

useSeoMeta({
  title: `Hayot Ildizi | ${product?.value?.title}`,
  ogTitle: `Hayot Ildizi | ${product?.value?.title}`,
  description:
    "🌿 Go'zallik va salomatlik bir flakonda! Spirulina va Ginseng Extract. 🚛 Bepul yetkazish xizmati.",
  ogDescription:
    "🌿 Go'zallik va salomatlik bir flakonda! Spirulina va Ginseng Extract. 🚛 Bepul yetkazish xizmati.",
});
</script>
