<template>
  <footer class="footer">
    <div class="site-logo">
      <img src="../assets/logo3.svg" alt="site logo" />
    </div>
    <div class="footer__container">
      <div class="footer__container__contents">
        <div class="footer__container__contents-head">Explore Chanel.com</div>
        <ul>
          <li>
            <a href="./fashion-catalog.html">Fashion</a>
          </li>
          <li>
            <a href="./watches-catalog.html">Watches</a>
          </li>
          <li>
            <a href="./jewelry-catalog.html">Fine Jewelry</a>
          </li>
          <li>
            <a href="./eyewear-catalog.html">Eye Wear</a>
          </li>
          <li>
            <a href="./fragrance-catalog.html">Fragrance</a>
          </li>
          <li>
            <a href="./makeup-catalog.html">Makeup</a>
          </li>
          <li>
            <a href="./skincare-cataolg.html">Skincare</a>
          </li>
        </ul>
      </div>
      <div class="footer__container__contents">
        <div class="footer__container__contents-head">ONLINE SERVICES</div>
        <ul>
          <li>
            <a href="#">Payment Methods</a>
          </li>
          <li>
            <a href="#">Shipping Options</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div class="footer__container__contents">
        <div class="footer__container__contents-head">BOUTIQUE SERVICES</div>
        <ul>
          <li>
            <a href="#">Store Locator</a>
          </li>
        </ul>
      </div>
      <div class="footer__container__contents">
        <div class="footer__container__contents-head">THE HOUSE OF CHANEL</div>
        <ul>
          <li>
            <a href="#">Inside Chanel</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Foundation Chanel</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Report to Society</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__social">
      <div class="change-location">Change location</div>
      <div class="footer__social__icons">
        <span>
          <i class="fab fa-instagram"></i>
        </span>
        <span>
          <i class="fab fa-linkedin"></i>
        </span>
        <span>
          <i class="fab fa-facebook-f"></i>
        </span>
        <span>
          <i class="fab fa-twitter"></i>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
// footer
.footer {
  background-color: #363636;
  padding-top: 65px;
  padding: 70px 100px 50px 100px;
  .site-logo {
    width: 185px;
    margin: auto;
    padding-bottom: 30px;
  }
  &__social {
    padding-top: 35px;
    padding-bottom: 35px;
    display: flex;
    flex-flow: row nowrap;
    .change-location {
      color: #ddd;
      margin: auto;
      text-align: center;
      padding-top: 10px;
    }
    &__icons {
      position: absolute;
      right: 92px;
      margin-bottom: 8px;
      span {
        color: #ddd;
        font-size: 28px;
        padding: 0 8px;
      }
    }
  }
  &__container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    &__contents {
      padding-bottom: 35px;
      &-head {
        color: #fff;
        font-weight: lighter;
        margin-bottom: 20px;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        li {
          padding: 5px 0;
          &:last-child {
            padding: 5px 0 0 0;
          }
          a {
            text-decoration: none;
            color: #828282;
            font-size: 14px;
            transition: color 500ms ease-out;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1150px) {
  .footer {
    &__container {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      text-align: center;
    }
  }
}

@media screen and (max-width: 690px) {
  .footer {
    &__social {
      .change-location {
        text-align: left;
        margin: 0;
      }
      &__icons {
        position: absolute;
        right: 92px;
        margin-bottom: 8px;
        span {
          color: #ddd;
          font-size: 23px;
          padding: 0 8px;
        }
      }
    }
  }
}

@media screen and (max-width: 490px) {
  .footer {
    padding-bottom: 35px;
    &__social {
      .change-location {
        text-align: left;
        margin: 0;
      }
      &__icons {
        position: absolute;
        left: 92px;
        margin-top: 48px;
        span {
          color: #ddd;
          font-size: 23px;
          padding: 0 8px;
        }
      }
    }
  }
}
</style>