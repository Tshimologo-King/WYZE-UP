<template>
  <div class="container">
    <nav />
    <div class="header">
      <div class="topBar">
        <div class="searchBar">
          <label for="searchBar">
            <input type="text" placeholder="Search Here" />
          </label>
          <button>Search</button>
        </div>
        <div class="adminPic">
          <img src="https://picsum.photos/200/300?random=1" />
        </div>
      </div>
      <div class="overall">
        <div class="card">
          <span>
            <div class="amount">12 of 12000</div>
            <div class="text">Careers</div>
          </span>
          <div class="icon"></div>
        </div>
        <div class="card">
          <span>
            <div class="amount">2 of 12000</div>
            <div class="text">Podcasts</div>
          </span>
          <div class="icon"></div>
        </div>
        <div class="card">
          <span>
            <div class="amount">10000</div>
            <div class="text">Users</div>
          </span>
          <div class="icon"></div>
        </div>
        <div class="card">
          <span>
            <div class="amount">1000</div>
            <div class="text">Subscribers</div>
          </span>
          <div class="icon"></div>
        </div>
      </div>

      <div id="adminVIEW">
        <!-- CAREERS -->
        <div class="card">
          <div v-if="careers" class="careers">
            <span v-for="career in careers" :key="career.idCareers">
              <router-link
                :to="{ name: 'career', params: { id: career.idCareers } }"
              >
                <div class="information">
                  <h3>{{ career.careerTitle }}</h3>
                </div>
              </router-link>
            </span>
          </div>
        </div>

        <!-- PODCASTS -->
        <div class="card">
          <div v-if="podcasts" class="podcasts">
            <span v-for="podcast in podcasts" :key="podcast.idPodcasts">
              <!-- <router-link
                :to="{
                  name: 'Podcasts',
                  params: { id: podcast.idPodcasts },
                }" 
              >-->
              <div class="information">
                <h3>{{ podcast.podcastTitle }}</h3>
              </div>
              <!-- </router-link> -->
            </span>
          </div>
        </div>

        <!-- REG USERS -->
        <div class="card">
          <div v-if="users" class="users">
            <span v-for="user in users" :key="user.idUsers">
                <div class="information">
                    <h3>{{user.userName}}</h3>
                    <h4>{{user.userEmail}}</h4>
                </div>
            </span>
          </div>
        </div>

        <!-- SUBSCRIBED USERS -->
        <div class="card">
          <div v-if="subscribers" class="subscribedPeople">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "users",
  methods: {},
  mounted() {
    this.$store.dispatch("getUsers");
    this.$store.dispatch("getCareers");
    this.$store.dispatch("getPodcasts");
    this.$store.dispatch("getSubscribers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    careers() {
      return this.$store.state.careers;
    },
    podcasts() {
      return this.$store.state.podcasts;
    },
    subscribers() {
      return this.$store.state.subscribers;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}
.container {
  position: relative;
  width: 100%;
}

.header {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: rgb(27, 95, 143);
  transition: linear 0.5s;
}
.header .topBar {
  width: 100%;
  background: rgb(27, 95, 143);
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.header .active {
  width: calc(100% - 65px);
  left: 65px;
}
.searchBar {
  position: relative;
  width: 450px;
  margin: 10px;
  display: flex;
}
.searchBar button {
  margin-left: 10px;
  padding: 10px;
  border-radius: 25px;
}
.searchBar label {
  position: relative;
  width: 100%;
}
.searchBar label input {
  width: 100%;
  border-radius: 25px;
  height: 50px;
  padding: 20px;
  border: 1px solid black;
  padding-left: 30px;
}
.adminPic {
  position: relative;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.adminPic img {
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
}
.overall {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
.overall .card {
  position: relative;
  background: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.overall .card .amount {
  position: relative;
  font-size: 23px;
  font-weight: 500;
}
.overall .card .title {
  color: grey;
}
#adminVIEW {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
#adminVIEW .card {
  position: relative;
  background: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.information{
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
}

.details {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
.userDetails {
  position: relative;
  min-height: 500px;
  background: rgb(102, 165, 207);
  padding: 20px;
}
.userDetails .cardTitle {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.userDetails .cardTitle h2 {
  font-weight: 600;
}
.userDetails .cardTitle a {
  position: relative;
  padding: 10px;
  background: blue;
  color: white;
  text-decoration: none;
  border-radius: 10px;
}
.details table {
  width: 100%;
  border: none;
  margin-top: 10px;
}
.details table thead td {
  font-weight: 600;
}
.details .userDetails table tr {
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
}
.details .userDetails table tbody tr:hover {
  background: white;
  color: black;
}
.details .userDetails table tbody tr:last-child {
  border-bottom: none;
}
.details .userDetails table tbody tr td {
  padding: 10px;
}
.details .userDetails table thead tr td:last-child,
.details .userDetails table tbody tr td:last-child {
  text-align: right;
}
.details .userDetails table thead tr td:nth-child(2),
.details .userDetails table tbody tr td:nth-child(2) {
  text-align: right;
  padding: 20px;
}
.details .userDetails table thead tr td:nth-child(3),
.details .userDetails table tbody tr td:nth-child(3) {
  text-align: center;
}
.status {
  position: relative;
  padding: 10px;
  background: red;
  border-radius: 5px;
  font-size: 14px;
  color: white;
}
.paid {
  background: lime;
}
.outstanding {
  background: orange;
}
.overdue {
  background: red;
}
.subscribers {
  position: relative;
  min-height: 500px;
  background: lightblue;
  padding: 20px;
  margin-bottom: 1rem;
}
.subscribers .image {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
}
.subscribers .image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.details .subscribers table tr:hover h4 span {
  background: blue;
  color: white;
}
.details .subscribers table tr td {
  padding: 10px;
}
.details .subscribers table tr td h4 {
  font-size: 20px;
  font-weight: 500;
  line-height: 1rem;
}
</style>
