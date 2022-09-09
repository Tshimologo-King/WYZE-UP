<template>
  <!-- <div v-if="career">
    <div id="careerCards">
      <div class="newPost">
        <div v-if="showModal">
          <div class="backdrop">
            <div class="modal-content">
              <img
                :src="career[0].careerURLImage"
                :alt="image"
                style="height: 200px; width: 250px"
              />
              <div class="infobox">
                <p>Title: {{ career[0].careerTitle }}</p>
                <p>Career Industry: {{ career[0].careerIndustry }}</p>
                <p>Career Description: {{ career[0].careerDescription }}</p>
                <p>
                  Career Role & Responsibilities:
                  {{ career[0].careerDayInLife }}
                </p>
                <p>
                  Institutions offering courses: {{ career[0].institutions }}
                </p>
              </div>
              <button class="close" @click="toggleModal">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div>
    {{ career }}
    <!-- {{ career["careerTitle"] }}-->
    {{ career.careerTitle }}
  </div>
</template>
<script>
export default {
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
