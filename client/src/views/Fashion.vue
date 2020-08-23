<template>
  <div>
      <Header />
      <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductSection from "@/components/ProductSection.vue";
export default {
  components: {
    Header,
    Footer,
    ProductSection,
  },
};
</script>

<style lang="scss">
// fashion page
.boutiques {
  background-image: url("https://res.cloudinary.com/tega/image/upload/v1597074615/fashion-site/backgrounds/boutique_dtydbg.jpg");
  background-position: unset;
  background-size: cover;
  background-repeat: no-repeat;
}

.new-collection {
  background-image: url("https://res.cloudinary.com/tega/image/upload/v1597074685/fashion-site/backgrounds/new-collection_qvuerk.jpg");
  .product-section__content {
    .head {
      color: #fff;
      font-weight: lighter;
      font-size: 2rem;
      margin: 0;
    }
    .lead {
      font-weight: lighter;
      margin-bottom: 50px;
    }
  }
}
</style>