<template>
  <h1>Find Your Career</h1>
  <div v-if="careers" id="careers">
    <div class="career-box">
      <div v-for="career in careers" :key="career.idCareers">
        <router-link
          :to="{ name: 'career', params: { id: this.careers.idCareers } }"
        >
          <div id="careerCards">
            <div class="newPost">
              <div v-if="showModal">
                <div class="backdrop">
                  <div class="modal-content">
                    <img
                      :src="career.careerURLImage"
                      :alt="image"
                      style="height: 200px; width: 250px"
                    />
                    <div class="infobox">
                      <p>Title: {{ career.careerTitle }}</p>
                      <p>Career Industry: {{ career.careerIndustry }}</p>
                      <p>Career Description: {{ career.careerDescription }}</p>
                      <p>
                        Career Role & Responsibilities:
                        {{ career.careerDayInLife }}
                      </p>
                      <p>
                        Institutions offering courses: {{ career.institutions }}
                      </p>
                    </div>
                    <button class="close" @click="toggleModal">X</button>
                  </div>
                </div>
              </div>
              <button class="openButton" @click="toggleModal">
                <span v-if="!showModal">{{ career.careerTitle }}</span>
              </button>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else>Loading Careers... 😊</div>
</template>

<script>
export default {
  name: "careers",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  mounted() {
    this.$store.dispatch("getCareers");
  },
  computed: {
    careers() {
      return this.$store.state.careers;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.career-box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
#careerCards {
  border: 1px solid black;
  margin: 5px;
  padding: 10px;
}
</style>