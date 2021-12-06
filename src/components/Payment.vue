<template>
    <router-view></router-view>
  <Header />
  <section class="personal-info-sec">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="personal-info-wrp">
            <form id="personal-info">
              <div class="row">
                <div class="col-12 col-md-7">
                  <div class="personal-info-title">Personal Information</div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="yourname">Your Name:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="yourname"
                        name="yourname"
                        placeholder="john doe"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-sm-6">
                      <label for="phonenumber">Phone Number:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="+00 0000 000000"
                      />
                    </div>
                    <div class="form-group col-sm-6">
                      <label for="emailaddress">Email Address:</label>
                      <input
                        type="email"
                        class="form-control"
                        id="emailaddress"
                        name="emailaddress"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <div class="info-table-wrp">
                        <div class="table-responsive">
                          <table class="table">
                            <thead>
                              <tr >
                                <th scope="col">Keyword</th>
                                <th scope="col">Timeline</th>
                                <th scope="col">Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="resultat in resultats" :key="resultat.id">
                                <td>{{ resultat.keyword}}</td>
                                <td>{{ resultat.timeline}}</td>
                                <td class="font-weight-bold">{{ resultat.price}}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-5">
                  <div class="info-sidebar">
                    <div class="personal-info-title">Payment</div>
                    <div class="form-row">
                      <div class="form-group col-6">
                        <label class="radio-wrap"
                          >Credit Card
                          <input
                            type="radio"
                            name="paymentmethod"
                            checked="checked"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="form-group col-6">
                        <label class="radio-wrap"
                          >Debit card
                          <input type="radio" name="paymentmethod" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <div class="payment-method-img">
                          <img
                            src="../assets/images/payment-method.png"
                            alt="payment-method"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="cardnumber">Card Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cardnumber"
                          name="cardnumber"
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-7">
                        <label for="expirydate">Expiry Date</label>
                        <input
                          type="text"
                          class="form-control"
                          id="expirydate"
                          name="expirydate"
                          placeholder="MM / YY"
                        />
                      </div>
                      <div class="form-group col-5">
                        <label for="cvv">CVV</label>
                        <input
                          type="password"
                          class="form-control"
                          id="cvv"
                          name="cvv"
                          placeholder="xxx"
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="nameoncard">Name On Card</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nameoncard"
                          name="nameoncard"
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <input
                          type="submit"
                          class="form-control submit-payment"
                          value="Make Payment"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "Payment",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      clique: 0,
      resultats: JSON.parse(localStorage.getItem("checked")),
    };
  }
};
</script>

<style>
</style>