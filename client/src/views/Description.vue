<template>
  <div class="description">
    <Header />
    <ProductSection :dataObject="springSummer" />
    <section class="impressions">
      <div class="impressions__container">
        <h2>Impressions after the show</h2>
        <p>RITA ORA, AYAMI NAKAJO, CAROLINE DE MAIGRET AND SOFIA COPPOLA WERE AMONG THE GUESTS AT THE SPRING-SUMMER 2018 HAUTE COUTURE SHOW</p>
      </div>
      <div class="impressions__image">
        <img
          src="https://res.cloudinary.com/tega/image/upload/v1597074663/fashion-site/backgrounds/impressions_fxqogx.jpg"
          alt
        />
      </div>
    </section>
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
.product-section__content {
  .content {
    width: 50%;
    margin: 0px auto 40px auto;
    font-weight: lighter;
  }
}

.impressions {
  // height: 400px;
  &__container {
    text-align: center;
    width: 50%;
    margin: 65px auto;
    h2 {
      font-size: 2.3rem;
    }
    p {
      font-weight: lighter;
      font-size: 15px;
    }
  }

  &__image {
    margin: auto;
    text-align: center;
    margin-bottom: 150px;
    img {
      width: 70%;
      height: 450px;
    }
  }
}

.open {
  display: block;
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
</style>