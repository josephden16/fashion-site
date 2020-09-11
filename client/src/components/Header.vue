<template>
  <header class="header"> 
    <div class="header__main">
      <div class="header__main__menu">
        <img
          @click="openNav"
          v-if="!navOpen"
          class="menu"
          src="../assets/icons8-menu.svg"
          alt="menu"
        />
        <img @click="openNav" v-else src="../assets/cancel.svg" class="menu" alt="cancel" />
      </div>
      <div class="header__main__logo">
        <router-link to="/">
          <img src="../assets/logo3.svg" alt="site logo" id="logo" />
        </router-link>
      </div>
      <a href="#" class="cart">
        <img src="../assets/cart.svg" alt="cart" />
      </a>
    </div>
    <nav class="header__nav">
      <ul>
        <li>
          <router-link
            :class="{active: $route.name === 'Haute Couture'}"
            to="/haute_couture"
          >HAUTE COUTURE</router-link>
        </li>
        <li>
          <router-link
            :class="{active: $route.name === 'Fashion' | $route.params.category === 'fashion'}"
            to="/fashion"
          >FASHION</router-link>
        </li>
        <li>
          <router-link
            :class="{active: $route.params.category==='watches'}"
            to="/catalog/watches"
          >WATCHES</router-link>
        </li>
        <li>
          <router-link
            :class="{active: $route.params.category==='jewelry'}"
            to="/catalog/jewelry"
          >FINE JEWELRY</router-link>
        </li>
        <li>
          <router-link
            :class="{active: $route.params.category ==='eyewear'}"
            to="/catalog/eyewear"
          >EYE WEAR</router-link>
        </li>
        <li>
          <router-link
            :class="{active: $route.params.category ==='fragrance'}"
            to="/catalog/fragrance"
          >FRAGRANCE</router-link>
        </li>
        <li>
          <router-link
            :class="{active: $route.params.category ==='makeup'}"
            to="/catalog/makeup"
          >MAKEUP</router-link>
        </li>
        <li>
          <router-link
            :class="{active: $route.params.category ==='skincare'}"
            to="/catalog/skincare"
          >SKINCARE</router-link>
        </li>
      </ul>
      <div class="header__nav__accessibles">
        <router-link to="/">
          <img src="../assets/icons8-search.svg" id="search" alt="search" />
        </router-link>
        <router-link to="/account">
          <img src="../assets/profile-icon-png.png" width="50px" alt="profile" />
        </router-link>
        <a href="#">
          <img src="../assets/icons8-star-32.png" id="star" alt="star" />
        </a>
        <a href="#">
          <img src="../assets/icons8-bookmark.svg" alt="bookmark" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    openNav() {
      let nav = document.querySelector(".header__nav");
      if (this.navOpen) {
        this.navOpen = false;
        nav.style.display = "none";
      } else {
        this.navOpen = true;
        nav.style.display = "block";
      }
    },
  },
  computed: {
    className() {
      if (this.navOpen) {
        return "header__nav open";
      } else {
        return "header__nav";
      }
    },
  },
};
</script>

<style lang="scss">
// header
.open {
  display: block;
}
.header {
  .menu {
    display: none;
  }
  &__main {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    &__logo {
      margin-top: 20px;
      #logo {
        width: 190px;
        position: relative;
      }
    }
  }

  &__nav {
    border-bottom: 1px solid #b4b4b4;
    padding: 18px 150px;
    margin-top: 30px;
    &__accessibles {
      position: absolute;
      right: 50px;
      top: 20px;
      a {
        text-decoration: none;
        margin: 30px 12px;
        img {
          width: 25px;
          cursor: pointer;
        }
      }
    }
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      li {
        a {
          text-decoration: none;
          color: #1b1b1b;
          font-size: 13px;
          padding: 16px 0;
          &:hover {
            border-bottom: 4px solid #1b1b1b;
          }
        }
      }
    }
  }
}
.active {
  border-bottom: 4px solid #1b1b1b;
}
// cart icon
.cart {
  position: absolute;
  right: 18px;
  top: 18px;
  img {
    width: 30px;
  }
}
@media screen and (max-width: 1150px) {
  .header {
    padding-top: 25px;
    background-color: #fff;
    width: 100%;
    &__main {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      padding-bottom: 25px;
      &__menu {
        margin-left: 15px;
        .menu {
          display: block;
          position: absolute;
          left: 18px;
          top: 22px;
          width: 24px;
        }
      }
      &__logo {
        margin-top: 0;
        #logo {
          width: 160px;
          position: relative;
        }
      }
      &__accessibles {
        position: absolute;
        right: 10px;
        margin-top: 0;
        a {
          text-decoration: none;
          margin: 30px 12px;
          img {
            width: 22px;
            cursor: pointer;
          }
        }
      }
    }

    &__nav {
      border-bottom: 1px solid #b4b4b4;
      padding: 18px 60px;
      margin-top: 30px;
      display: none;
      transition: display 500ms ease-out;
      text-align: center;
      &__accessibles {
        position: relative;
        right: 0;
        top: 20px;
        margin-bottom: 15px;
        a {
          text-decoration: none;
          margin: 30px 12px;
          img {
            width: 25px;
            cursor: pointer;
          }
        }
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        li {
          padding: 12px;
          margin: auto;
          a {
            text-decoration: none;
            color: hsl(0, 0%, 11%);
            font-size: 14px;
            padding: 16px 0;
            &:hover {
              border: 2px dotted #1b1b1b;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 690px) {
  .header {
    &__main {
      &__logo {
        margin-right: 58px;
        #logo {
          width: 130px;
        }
      }
      &__accessibles {
        position: absolute;
        right: 10px;
        margin-top: 0;
        a {
          img {
            width: 18px;
          }
        }
      }
    }

    &__nav {
      border-bottom: 1px solid #b4b4b4;
      padding: 18px 60px;
      margin-top: 30px;
      display: none;
      transition: display 500ms ease-out;
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        li {
          padding: 12px;
          margin: auto;
          a {
            text-decoration: none;
            color: hsl(0, 0%, 11%);
            font-size: 14px;
            padding: 16px 0;
            &:hover {
              border: 2px dotted #1b1b1b;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 490px) {
  .header {
    position: sticky;
    top: 0;
    &__main {
      &__logo {
        margin-top: 0;
        #logo {
          width: 130px;
          position: relative;
        }
      }
      &__accessibles {
        position: absolute;
        right: 0px;
        margin-top: 0;
        a {
          text-decoration: none;
          margin: 30px 6px;
          img {
            width: 15px;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .header {
    &__main {
      &__logo {
        margin-top: 0;
        #logo {
          width: 110px;
          position: relative;
        }
      }
      &__accessibles {
        position: absolute;
        right: 0px;
        margin-top: 0;
        margin-left: 28px;
        a {
          text-decoration: none;
          margin: 30px 6px;
          img {
            width: 15px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>