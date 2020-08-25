<template>
  <div class="catalog">
    <div v-if="loading === true" id="loading"></div>
    <Header />
    <div class="item-container">
      <div class="items">
        <div class="item" v-for="(product, index) in products" :key="index">
          <div class="item__img">
            <img :src="product.url" :alt="product.product_name" />
          </div>
          <div class="item__info">
            <p class="item__info__name">{{ product.product_name }}</p>
            <p class="item__info__price">{{ currency + product.price }}</p>
          </div>
          <form action="#" class="item__buy">
            <input type="submit" value="ADD TO CART" class="buy" />
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      products: null,
      failedToFetch: false,
      loading: true,
      category: this.$route.params.product_name,
      currency: "$",
    };
  },
  mounted() {
    const products = require("../products");
    if (products) {
      setTimeout(() => {
        this.products = products[this.category];
        this.loading = false;
      }, 1 * 1000);
    } else {
      setTimeout(() => {
        this.loading = false;
      }, 8 * 1000);
      const products = require("../products");
      this.products = products[this.category];
      this.loading = false;
    }
  },
};
</script>

<style lang="scss">
// loading gif
#loading {
  background: url("https://res.cloudinary.com/tega/image/upload/v1598331654/fashion-site/icons/spinner_v6zkca.gif")
    no-repeat center center;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #fff;
}

// catalog pages
.item-container {
  margin: 60px 100px;
}
.items {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 20px;
}

.item {
  padding: 35px 0;
  border-radius: 4px;
  transition: box-shadow 200ms ease-out, transform 200ms ease-out;
  width: 270px;
  margin: auto;
  &:hover {
    box-shadow: 1px 44px 28px 0px rgba(0, 0, 0, 0.05),
      -3px -4px 28px 0px rgba(0, 0, 0, 0.05);
  }
  &__img {
    text-align: center;
    img {
      width: 220px;
      height: 250px;
    }
  }

  &__info {
    margin-top: 24px;
    text-align: center;
    &__price {
      font-weight: bolder;
    }
  }

  &__buy {
    text-align: center;
    .buy {
      text-decoration: none;
      color: #000;
      margin: auto;
      font-size: 13px;
      width: 240px;
      cursor: pointer;
      padding: 10px 0;
      background-color: #fff;
      border: 1px solid;
      border-radius: 3px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .items {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    gap: 15px;
  }

  .item-container {
    margin: 60px 40px;
  }
  .item {
    padding: 35px 0;
    border-radius: 4px;
    transition: box-shadow 200ms ease-out;
    &:hover {
      box-shadow: 1px 44px 28px 0px rgba(0, 0, 0, 0.05),
        -3px -4px 28px 0px rgba(0, 0, 0, 0.05);
    }
    &__img {
      text-align: center;
      img {
        width: 200px;
        height: 210px;
      }
    }

    &__info {
      margin-top: 24px;
      text-align: center;
      &__price {
        font-weight: bolder;
      }
    }

    &__buy {
      text-align: center;
      .buy {
        text-decoration: none;
        color: #000;
        margin: auto;
        font-size: 13px;
        width: 210px;
        cursor: pointer;
        padding: 10px 0;
        background-color: #fff;
        border: 1px solid;
        border-radius: 3px;
      }
    }
  }
}

@media screen and (max-width: 1050px) {
  .items {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    gap: 5px;
  }
  .item {
    padding: 35px 0;
    border-radius: 4px;
    width: 260px;
    margin: auto;
    transition: box-shadow 200ms ease-out;
    &:hover {
      box-shadow: 1px 44px 28px 0px rgba(0, 0, 0, 0.05),
        -3px -4px 28px 0px rgba(0, 0, 0, 0.05);
    }
    &__img {
      text-align: center;
      img {
        width: 200px;
        height: 210px;
      }
    }

    &__info {
      margin-top: 24px;
      text-align: center;
      &__price {
        font-weight: bolder;
      }
    }

    &__buy {
      text-align: center;
      .buy {
        text-decoration: none;
        color: #000;
        margin: auto;
        font-size: 13px;
        width: 210px;
        cursor: pointer;
        padding: 10px 0;
        background-color: #fff;
        border: 1px solid;
        border-radius: 3px;
      }
    }
  }
}

@media screen and (max-width: 885px) {
  .items {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 5px;
  }
  .item {
    padding: 35px 0;
    border-radius: 4px;
    width: 240px;
    margin: auto;
    transition: box-shadow 200ms ease-out;
    &:hover {
      box-shadow: 1px 44px 28px 0px rgba(0, 0, 0, 0.05),
        -3px -4px 28px 0px rgba(0, 0, 0, 0.05);
    }
    &__img {
      text-align: center;
      img {
        width: 180px;
        height: 200px;
      }
    }

    &__info {
      margin-top: 24px;
      &__price {
        font-weight: bolder;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .item-container {
    margin: 60px 10px;
  }
  .items {
    display: grid;
    grid-template-columns: 100%;
    gap: 5px;
  }
  .item {
    padding: 35px 0;
    border-radius: 4px;
    width: 260px;
    margin: auto;
    transition: box-shadow 200ms ease-out;
    &:hover {
      box-shadow: 1px 44px 28px 0px rgba(0, 0, 0, 0.05),
        -3px -4px 28px 0px rgba(0, 0, 0, 0.05);
    }
    &__img {
      text-align: center;
      img {
        width: 200px;
        height: 210px;
      }
    }

    &__buy {
      text-align: center;
      .buy {
        text-decoration: none;
        color: #000;
        margin: auto;
        font-size: 13px;
        width: 210px;
        cursor: pointer;
        padding: 10px 0;
        background-color: #fff;
        border: 1px solid;
        border-radius: 3px;
      }
    }
  }
}
</style>