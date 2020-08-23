<template>
  <div>
    <Header />
    <section class="account">
      <div class="account__main">
        <h4>Account</h4>
        <div class="account__main__header">
          <div class="account__main__header-links" @click="selectTab('signin')">
            <span href="#" :class="{active: selectedTab === 'signin'}">Sign in</span>
          </div>
          <div class="account__main__header-links" @click="selectTab('signup')">
            <span :class="{active: selectedTab === 'signup'}">Register</span>
          </div>
        </div>

        <div class="account__main__signin" v-show="selectedTab === 'signin'">
          <h4 class="head">Welcome back</h4>
          <div class="account__main__form">
            <p>Sign in with your email and password.</p>
            <div class="account__main__form__field">
              <input type="email" placeholder="Email" />
            </div>
            <div class="account__main__form__field">
              <input type="password" placeholder="Password" />
            </div>
            <div class="account__main__form__forgot-password">
              <p>
                Forgot password?
                <span class="dir">></span>
                <a href="#">Show Password</a>
              </p>
            </div>
            <div class="account__main__form__remember-me">
              <label class="main">
                <input type="checkbox" />
                <span class="geekmark"></span>
                <span>Remember me</span>
              </label>
            </div>
            <div class="account__main__form__submit">
              <input type="submit" value="Sign in" />
            </div>
          </div>
        </div>

        <div class="account__main__signup" v-show="selectedTab === 'signup'">
          <h4 class="head">Create an Account</h4>
          <div class="account__main__form">
            <p>Sign in with your email and password.</p>
            <div class="account__main__form__field">
              <input type="email" placeholder="Email" />
            </div>
            <div class="account__main__form__field">
              <input type="password" placeholder="Password" />
            </div>
            <div class="account__main__form__field">
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div class="account__main__form__submit">
              <input type="submit" value="Sign up" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Info />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Info from "@/components/Info.vue";
export default {
  components: {
    Header,
    Footer,
    Info,
  },
  data() {
    return {
      selectedTab: "signin",
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style lang="scss">
.account {
  text-align: center;
  margin-bottom: 95px;
  h4 {
    font-size: 22px;
  }
  &__main {
    width: 400px;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    &__header {
      &-links {
        display: inline-block;
        margin-bottom: 20px;
        .active {
          border-bottom: 3px solid #41c7db;
        }
        span {
          padding: 12px 50px;
          text-decoration: none;
          color: #000;
          cursor: pointer;
        }
      }
    }

    &__form {
      p {
        color: #999;
        font-size: 15px;
      }
      &__field {
        input {
          padding: 8px;
          width: 300px;
          margin-bottom: 15px;
        }
        input[type="email"],
        input[type="password"] {
          border: 1px solid #777;
        }
      }

      &__forgot-password {
        text-align: left;
        p {
          color: #000;
          margin-left: 40px;
        }

        a {
          color: #000;
        }
      }

      &__remember-me {
        text-align: left;
        .main {
          margin-left: 40px;
          &:last-child {
            font-size: 15px;
            padding-left: 15px;
          }
        }
      }

      &__submit {
        margin-top: 15px;
        input {
          width: 320px;
          padding: 10px 0;
          font-size: 16px;
          background-color: #fff;
          border: 1px solid #777;
          border-radius: 3px;
          cursor: pointer;
          color: #222;
        }
      }
    }
    .head {
      text-align: center;
      font-weight: lighter;
      margin-bottom: 0px;
    }
  }
}

.dir {
  color: #999;
  font-size: 20px;
  padding-top: 8px;
  margin-left: 10px;
  margin-right: 20px;
}

@media screen and (max-width: 400px) {
  .account {
    text-align: center;
    h4 {
      font-size: 22px;
    }
    &__main {
      width: 340px;
      margin: auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;

      &__header {
        &-links {
          display: inline-block;
          margin-bottom: 20px;
          .active {
            border-bottom: 3px solid #41c7db;
          }
          a {
            padding: 12px 50px;
            text-decoration: none;
            color: #000;
          }
        }
      }

      &__form {
        p {
          color: #999;
          font-size: 15px;
        }
        &__field {
          input {
            padding: 8px;
            width: 250px;
            margin-bottom: 15px;
          }
        }

        &__forgot-password {
          text-align: left;
          p {
            color: #000;
            margin-left: 40px;
          }

          a {
            color: #000;
          }
        }

        &__remember-me {
          text-align: left;
          .main {
            margin-left: 40px;
            &:last-child {
              font-size: 15px;
              padding-left: 15px;
            }
          }
        }

        &__submit {
          margin-top: 15px;
          input {
            width: 270px;
            padding: 10px 0;
            font-size: 16px;
            background-color: #fff;
            border: 1px solid #777;
            cursor: pointer;
            color: #222;
          }
        }
      }
      .head {
        text-align: center;
        font-weight: lighter;
        margin-bottom: 0px;
      }
    }
  }
}
</style>