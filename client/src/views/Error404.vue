<template>
  <div>
    <Header />
    <div class="error">
      <h1>404</h1>
      <h1>Page Not Found</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.error {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

h1 {
  font-size: 5rem;
  text-align: center;
}

@media screen and (max-width: 360px) {
  h1 {
    font-size: 3.3rem;
  }
}
</style>