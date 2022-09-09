<template>
    <div v-if="users" id="users">
        <div class="userProfile">
            <SingleUsers/>
            <div v-for="user in users" :key="user.idUsers">
                <div class="userCard">
                    <h3>{{user.userName}}</h3>
                    <h4>{{user.userEmail}}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SingleUsers from '@/components/singleUsers.vue';
export default {
    name: "Users",
    computed: {
        user() {
            return this.$store.state.users;
        }
    },
    mounted(){
        this.$store.dispatch("getUSERS");
    },
    components: {
    SingleUsers
}
}
</script>