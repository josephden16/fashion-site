<template>
  <section :class="dataObject.className">
    <div class="product-section__content">
      <p>{{ dataObject.title }}</p>
      <h1 v-show="dataObject.head" >{{ dataObject.head }}</h1>
      <h1 class="lead">{{ dataObject.lead }}</h1>
      <p v-show="dataObject.content" class="content">{{ dataObject.content }}</p>
      <router-link class="btn" :to="dataObject.url">See more</router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    dataObject: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style>
</style>