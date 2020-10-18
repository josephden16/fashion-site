<template>
  <div class="item-container">
    <div class="items">
      <div class="item" v-for="(product, index) in products" :key="index">
        <div class="item__img">
          <img :src="product.url" :alt="product.name" />
        </div>
        <div class="item__info">
          <p class="item__info__name">{{ product.name }}</p>
          <p class="item__info__price">{{ currency + product.price }}</p>
        </div>
        <form action="#" class="item__buy">
          <input type="submit" value="ADD TO CART" class="buy" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products", "currency"]
};
</script>

<style lang="scss">
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
    cursor: pointer;
  }
  &__img {
    text-align: center;
    img {
      width: 220px;
      height: 250px;
      font-size: 14px;
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