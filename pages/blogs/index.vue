<template>
  <div class="container">
    <h2 class="text-xl lg:text-[38px] text-primary font-semibold">
      {{ $t("all-blogs") }}
    </h2>
    <div class="grid gird-cols-1 lg:grid-cols-3 4xl:grid-cols-4 gap-3 lg:gap-8 mt-2 lg:mt-5">
      <blog-card v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script setup>
const blogs = api("/blogs/").data;
</script>
