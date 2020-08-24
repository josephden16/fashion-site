<template>
<div class="haute_couture">
    <Header />
    <ProductSection :dataObject="springSummer"  />
    <ProductSection :dataObject="fallWinter" />
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
  data() {
    return {
      fallWinter: {
        title: "FALL-WINTER 2018",
        lead: "HAUTE COUTURE SHOW",
        url: "/catalog/fashion",
        className: "product-section fall-winter",
      },
      springSummer: {
        title: "SPRING-SUMMER 2018",
        lead: "HAUTE COUTURE SHOW",
        url: "/catalog/fashion",
        className: "product-section spring-summer",
      },
    };
  },
};
</script>

<style lang="scss">
.product-section {
  height: 650px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #b4b4b4;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  &__content {
    color: #fff;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: center;
    margin: auto;
    // padding-top: 140px;
    p {
      font-size: 18px;
    }
    .lead {
      margin-bottom: 50px;
      font-size: 2rem;
    }
  }
}
.spring-summer {
  background-image: url("https://res.cloudinary.com/tega/image/upload/v1597223988/fashion-site/backgrounds/summer-spring_c2cxdu.jpg");
  .product-section__content {
    color: black;
    .lead {
      font-weight: lighter;
    }
  }
}

.fall-winter {
  background-image: url("https://res.cloudinary.com/tega/image/upload/v1597074678/fashion-site/backgrounds/fall-winter_pkudfp.jpg");
  .product-section__content {
    color: #fff;
    .lead {
      font-weight: lighter;
    }
  }
}
</style>