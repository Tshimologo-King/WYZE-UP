<template>
    <div v-if="subscribers" id="subscribers">
        <div class="subscriberBox">
            <div v-for="subscriber in subscribers" :key="subscriber.idsubscriber">
                <subscriber/>
            </div>
        </div>
    </div>
</template>

<script>
import subscriber from '@/components/subscriber.vue'
export default {
    name: "subscribers",
    component: {
        subscriber
    },
    computed: {
        subscriber() {
            return this.$store.state.subscribers;
        }
    },
    mounted() {
        this.$store.dispatch("getSubscribers");
    }
}
</script>