<template>
  <section :class="dataObject.className">
    <div class="product-section__content">
      <p>{{ dataObject.title }}</p>
      <h1 class="lead">{{ dataObject.lead }}</h1>
      <p v-show="dataObject.content" class="content">{{ dataObject.content }}</p>
      <a class="btn" :href="dataObject.url">See more</a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
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