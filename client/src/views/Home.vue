<template>
  <div class="home">
    <Header />
    <main>
      <ProductSection :dataObject="fashion" />
      <ProductSection :dataObject="watches" />
      <ProductSection :dataObject="jewelry" />
      <ProductSection :dataObject="eyewear" />
      <Info />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductSection from "@/components/ProductSection.vue";
import Info from "@/components/Info.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    ProductSection,
    Info,
  },
  data() {
    return {
      fashion: {
        title: "Fashion",
        lead: "Metiers d'Art 2017/2018",
        url: "/fashion",
        content: "",
        className: "product-section fashion",
      },
      watches: {
        title: "Watches",
        lead: "J12 Classic",
        url: "/catalog/watches",
        content: "",
        className: "product-section watches",
      },
      jewelry: {
        title: "Jewelry",
        lead: "Coco Rush",
        url: "/catalog/jewelry",
        content: "",
        className: "product-section jewelry",
      },
      eyewear: {
        title: "Eye Wear",
        lead: "Sun Shades",
        url: "/catalog/eyewear",
        content: "",
        className: "product-section eyewear",
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
.fashion {
  background-image: url("https://res.cloudinary.com/tega/image/upload/v1597064440/fashion-site/backgrounds/fashion_qfwm8b_fj6se2.jpg");
}
.watches {
  background-image: url("https://res.cloudinary.com/tega/image/upload/v1597064521/fashion-site/backgrounds/watches_bwc82l.jpg");
}
.jewelry {
  background-image: url("https://res.cloudinary.com/tega/image/upload/v1597064587/fashion-site/backgrounds/jewelry_bzpwtz.jpg");
}
.eyewear {
  background-image: url("https://res.cloudinary.com/tega/image/upload/v1597145342/fashion-site/backgrounds/maxresdefault_icj4xn.jpg");
}
.btn {
  width: 170px;
  margin: auto;
  padding: 25px 0;
  border: none;
  outline: none;
  background-color: #999999;
  font-size: 15px;
  color: #fff;
  font-weight: lighter;
  cursor: pointer;
  transition: background 500ms;
  text-decoration: none;
  &:hover {
    background: #bbb;
  }
}

.head {
  color: #000;
  font-size: 16px;
  margin-bottom: 35px;
}

.lead {
  margin-bottom: 20px;
}

.content {
  margin-bottom: 30px;
}

@media screen and (max-width: 400px) {
  .product-section__content {
    .content {
      width: 80%;
      margin: 0px auto 40px auto;
      font-weight: lighter;
    }
  }
  .product-section {
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-left: none;
    border-right: none;
    flex-flow: column nowrap;
    justify-content: center;
    border-bottom: 1px solid #b4b4b4;
    text-align: center;
    &__content {
      color: #fff;
      display: flex;
      text-align: center;
      p {
        font-size: 16px;
      }
      .lead {
        margin-bottom: 50px;
        font-size: 1.8rem;
      }
    }
  }
}
</style>
