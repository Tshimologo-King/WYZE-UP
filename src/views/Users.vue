<template>
    <div v-if="users" id="users">
        <div class="userProfile">
            <div v-for="user in users" :key="user.idUsers">
                <div class="userCard">
                    <h3>{{user.userName}}</h3>
                    <h4>{{user.userEmail}}</h4>
                    <h4>{{user.userPassword}}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Users",
    computed: {
        user() {
            return this.$store.state.users;
        }
    },
    mounted(){
        this.$store.dispatch("getUSERS");
    }
}
</script>