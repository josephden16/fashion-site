<template>
  <section class="info">
    <div class="contact">
      <div class="head">CONTACT AN ADVISOR</div>
      <div class="lead">Available 24/7.</div>
      <div class="content">
        To speak with a Customer Care
        Representative, call 1.800.550.0005 or
        use the chat and email services below.
      </div>
      <div class="links">
        <a href="#">Chat</a>
        <a href="#">Email</a>
      </div>
    </div>
    <div class="find">
      <div class="head">FIND A STORE</div>
      <div class="content">Enter a location to find the closest CHANEL stores</div>
      <input type="text" placeholder="search by town or zip code" class="input-field" />
    </div>
    <div class="newsletter">
      <div class="head">NEWSLETTER</div>
      <div class="content">Subscribe to receive news from CHANEL</div>
      <div>
        <input type="email" placeholder="Enter your email address" class="input-field" />
      </div>
      <div class="privacy-policy">
        <label class="main">
          <input type="checkbox" />
          <span class="geekmark"></span>
        </label>
        <span class="condition">I agree to the Privacy Policy</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.info {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  margin: 90px 90px 60px 90px;
  gap: 40px;
  justify-content: center;
  text-align: left;
  color: #999999;
  font-size: 13px;
  .contact {
    width: 80%;
  }
  .find,
  .newsletter,
  .contact {
    margin: auto;
  }
}

.links {
  a {
    color: #000;
    font-size: 16px;
    padding-right: 8px;
  }
}

.input-field {
  border-radius: 25px;
  outline: none;
  border: 1px solid #000;
  padding: 12px 45px;
  width: 220px;
  background: url("../assets/icons8-search.svg");
  background-position: 12px 14px;
  background-repeat: no-repeat;
  background-size: 20px;
  font-size: 16px;
}

.find {
  .content {
    margin-bottom: 60px;
  }
}

.privacy-policy {
  margin-top: 30px;
  display: flex;
  flex-flow: row nowrap;
  .condition {
    margin-left: 12px;
    margin-top: 4px;
  }
}

// credit to geeeksforgeeks.org

/* hide the default checkbox */
input[type="checkbox"] {
  visibility: hidden;
}
.main {
  display: block;
  position: relative;
  padding-left: 0;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 20px;
  // border: 1px solid black;
}

/* creating a custom checkbox */
.geekmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: white;
  border: 1px solid black;
}
/* specify the background color to be shown when the check
is active */
.main .input:active ~ .geekmark {
  background-color: white;
}
/* checkmark to be shown in checkbox */
/* it is not to be shown when not checked */
.geekmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* display the checkmark when checked */
.main input:checked ~ .geekmark:after {
  display: block;
}
/* styling the checkmark using webkit */
/* rotated the rectangle by 45deg and showing only two border to make it look
like a tickmark */
.main .geekmark:after {
  left: 5px;
  bottom: 4px;
  width: 8px;
  height: 15px;
  border: solid black;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

@media screen and (max-width: 1150px) {
  .info {
    display: grid;
    grid-template-columns: 100%;
    margin: 90px 90px 60px 90px;
    gap: 40px;
    text-align: left;
    align-items: left;
    color: #999999;
    font-size: 13px;
    .find,
    .newsletter,
    .contact {
      width: 330px;
      margin: auto;
    }
  }
}

@media screen and (max-width: 490px) {
  .info {
    margin: 90px 30px 60px 30px;
    grid-template-columns: 100%;
  }
  .input-field {
    border-radius: 25px;
    outline: none;
    border: 1px solid #000;
    padding: 12px 45px;
    width: 180px;
    background: url("../assets/icons8-search.svg");
    background-position: 12px 10px;
    background-repeat: no-repeat;
    background-size: 20px;
    font-size: 16px;
  }
}
</style>