<template>
  <header class="header">
    <div class="header__main">
      <div class="header__main__menu">
        <img class="menu" src="../assets/icons8-menu.svg" alt="menu" />
      </div>
      <div class="header__main__logo">
        <router-link to="/">
          <img src="../assets/logo3.svg" alt="site logo" id="logo" />
        </router-link>
      </div>
      <div class="header__main__accessibles">
        <router-link to="/">
          <img src="../assets/icons8-search.svg" id="search" alt="search" />
        </router-link>
        <router-link to="./account">
          <img src="../assets/profile-icon-png.png" width="50px" alt="profile" />
        </router-link>
        <a href="#">
          <img src="../assets/icons8-star-32.png" id="star" alt="star" />
        </a>
        <a href="#">
          <img src="../assets/icons8-bookmark.svg" alt="bookmark" />
        </a>
      </div>
    </div>
    <nav class="header__nav">
      <ul>
        <li>
          <a href="./haute_couture.html">HAUTE COUTURE</a>
        </li>
        <li>
          <a href="./fashion.html">FASHION</a>
        </li>
        <li>
          <a href="./watches-catalog.html">WATCHES</a>
        </li>
        <li>
          <a href="./jewelry-catalog.html">FINE JEWELRY</a>
        </li>
        <li>
          <a href="./eyewear-catalog.html">EYE WEAR</a>
        </li>
        <li>
          <a href="./fragrance-catalog.html">FRAGRANCE</a>
        </li>
        <li>
          <a href="./makeup-catalog.html">MAKEUP</a>
        </li>
        <li>
          <a href="./skincare-cataolg.html">SKINCARE</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
// header
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
    &__accessibles {
      position: absolute;
      right: 10px;
      margin-top: 20px;
      a {
        text-decoration: none;
        margin: 30px 12px;
        img {
          width: 25px;
          cursor: pointer;
        }
      }
    }
  }

  &__nav {
    border-bottom: 1px solid #b4b4b4;
    padding: 18px 150px;
    margin-top: 30px;
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