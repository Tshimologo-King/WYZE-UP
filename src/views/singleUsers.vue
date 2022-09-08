<template>
  <div v-if="user">
    <div v-for="user in users" :key="user.idUsers" class="user">
      <div class="careerCards">
        <h3>{{ user.userName }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["idUsers"],
  computed: {
    career() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getUser", this.$route.params.id);
  },
};
</script>
