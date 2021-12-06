<template>
  <Header />
  <router-view/>
  <section class="free-seo-estimate">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-wrap text-center">
            <div class="section-title">Get a Free SEO Estimate</div>
            <div class="section-sub-title">
              Input your information below to find out an estimated SEO cost
              based on your needs.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="site-url-wrap text-center">
            <div class="site-url-text">Enter Your Website URL:</div>
            <form>
              <div class="form-row">
                <div class="form-group col-md-12 mb-0">
                  <input
                    type="text"
                    class="form-control"
                    id="" name=""
                    placeholder="Your Website URL"
                  />
                  <button
                    type="button"
                    class="website-btn"
                    v-on:click="urlorganinc();"
                  >submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <form>
            <div class="keywords-table table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">
                      Keyword
                    </th>
                    <th scope="col">Price</th>
                    <th scope="col">Timeline</th>
                    <th scope="col" class="text-center">Select</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in result" :key="item.id">
                    <td>{{ item.keyword }}</td>
                    <td>{{ item.timeline }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                      <label class="checkbox-wrap">
                       <input
          type="checkbox"
          name="item"
          :id="item"
          :value="item"
          v-model="checked"
        />

                        <span class="checkmark"></span>
                      </label>
                    </td>
                  </tr>

                  <tr class="disabled-row">
                    <td colspan="2"></td>
                    <td colspan="2" class="text-center">
                      <button class="submitbtn">loadmore</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="form-row text-center">
              <div class="form-group col-md-12 mb-0">
                <button class="submitbtn"  @click="goToHome()">Calculate</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "index",
  data() {
    return {
      result: [],
      checked: [],
      iteam: []
    };
  },
  components: {
    Header,
    Footer,
  },
  watch: {
    checked(newValue) {
      localStorage.setItem("checked", JSON.stringify(newValue));
    }
  },
  mounted() {
    this.checked = JSON.parse(localStorage.getItem("checked")) || []
  },
  methods: {
    async urlorganinc() {
        let result = await axios.get("http://localhost:3000/keywords");
        
      this.result = result.data;
    },
    goToHome(){
   this.$router.push('/payment'); 
      }
  },
};
</script>

<style>
</style>