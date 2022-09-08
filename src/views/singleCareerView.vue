<template>
  <div v-if="career">
    <div v-for="career in career" :key="career.idCareers" class="career">
      <div class="careerCards">
        <h3>{{ career.careerTitle }}</h3>
      </div>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
</style>
