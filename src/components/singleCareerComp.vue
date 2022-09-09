<template>
  <div v-if="career">
    <div v-for="career in careers" :key="career.idCareers" class="career">
      <router-link
        :to="{ name: 'singleCareer', params: { id: careers.idCareers } }"
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
</template>

<script>
export default {
  name: "Career",
  props: ["idCareers"],
  computed: {
    career() {
      return this.$store.state.career;
    },
  },
  mounted() {
    this.$store.dispatch("getCareer", this.$route.params.id);
  },
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
</style>