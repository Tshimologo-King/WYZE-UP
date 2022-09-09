<template>
  <div v-if="subscriber">
    <div v-for="subscriber in subscribers" :key="subscriber.idSubscriber" class="subscriber">
      <div id="subscriberCard">
        <h3>{{ subscriber.userName }}</h3>
        <h4>{{subscriber.userEmail}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "subscriber",
  props: ["idsubscriber"],
  computed: {
    subscriber() {
      return this.$store.state.subscriber;
    },
  },
  mounted() {
    this.$store.dispatch("getSubscriber", this.$route.params.id)
  }
}
</script>
