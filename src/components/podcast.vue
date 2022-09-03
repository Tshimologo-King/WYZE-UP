<template>
  <div id="pod-Cards">
    <router-link
      :to="{ name: 'podcast', params: { id: this.podcasts.idPodcasts } }"
    >
      <div class="card">
        <div class="content">
          <div class="front">
            <h4>{{ podcast.podcastTitle }}</h4>
            <p>{{ podcast.podcastLink }}</p>
          </div>
          <div class="back">
            <div class="infobox">
              <h4>{{ podcast.podTranscript }}</h4>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Podcast",
  props: ["podcast"],
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card{
  border: 1px solid black;
}

.front{
  border: 1px solid black;
}
</style>