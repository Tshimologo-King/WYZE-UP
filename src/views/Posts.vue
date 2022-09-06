<template>
  <h1>JOin the community and share ideas</h1>

  <div id="postHeader">
    <div class="searchBar">
      <label for="searchBar">
        <input type="text" placeholder="Search Here" />
      </label>
      <button>Search</button>
    </div>
    <div class="newPost">
      <div v-if="showModal">
        <div class="backdrop">
          <div class="modal-content">
            <form @submit.prevent="addNewPost">
              <label for="postTitle">Post Title: </label>
              <input
                type="text"
                placeholder="Enter a Post Title"
                v-model="postTitle"
              />
              <label for="postDescription">Post Content: </label>
              <textarea
                name="postDescription"
                cols="30"
                rows="2"
                type="text"
                placeholder="Type Something"
                v-model="postDescription"
              ></textarea>
              <button class="add" type="submit">Add New post</button>
              <button class="close" @click="toggleModal">X</button>
            </form>
          </div>
        </div>
      </div>
      <button class="openButton" @click="toggleModal">Add New Post</button>
    </div>
  </div>
  <div v-if="posts">
    <div id="posts">
      <div v-for="post in posts" :key="post.idPosts">
        <div class="card">
          <div class="content-head">
            <h3>{{ post.userName }}</h3>
            <h3>{{post.idUsers}}</h3>
            <img
              :src="post.userImage"
              :alt="`${post.userName}`"
              style="height: 150px; width: 150px"
            />
          </div>
          <div class="contentBody">
            <strong
              ><h5>{{ post.postTitle }}</h5></strong
            >
            <p>{{ post.postDescription }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading Posts...⏳📬</div>
</template>

<script>
import posts from "@/components/posts.vue";
export default {
  name: "posts",
  data() {
    return {
      showModal: false,
      postTitle: "",
      postDescription: "",
      userName: "",
      idUsers: "",
    }; 
   },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
     async addNewPost() {
      this.$store.dispatch("newPost", {
        idPosts: this.$route.params.id,
        postTitle: this.postTitle,
        postDescription: this.postDescription,
        userName: this.$store.state.user,
        idUsers: this.$store.state.user
      });
  },
  component: {
    posts,
  },
  mounted() {
    this.$store.dispatch("getPost", this.$route.params.id);
    // this.$store.dispatch("getPost");
  },
  computed: {
    post() {
      return this.$store.state.post;
    },

  },},
}


</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#posts {
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-inline: auto;
  margin-top: 2.5rem;
}

#posts .card {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border: 1px solid green;
  padding: 10px;
  text-align: center;
}

#postHeader {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
.openButton {
  width: 100%;
  padding: 5px;
}
.searchBar {
  display: flex;
  position: relative;
}
.searchBar input {
  margin-right: 1rem;
  height: 40px;
  border-radius: 25px;
  padding: 10px;
}
.searchBar button {
  width: 20%;
  padding: 2.5px;
  position: relative;
}
.backdrop {
  height: 100%;
}
.modal-content {
  background-color: rgb(190, 224, 228);
  padding: 50px;
  height: 300px;
  width: 300px;
  border-radius: 25px;
  position: absolute;
  right: 20%;
}
.newPost form {
  display: flex;
  flex-direction: column;
}

.newPost form label {
  font-size: 14px;
  width: 100%;
  font-family: "Roboto Condensed", sans-serif;
  text-align: center;
  margin-bottom: 10px;
}
.newPost form input {
  height: 20px;
  margin-top: -10px;
  padding: 10px;
  width: 100%;
  text-align: center;
  margin-inline: auto;
  border-radius: 10px;
}

.newPost textarea {
  border-radius: 15px;
  padding: 5px;
  overflow-y: hidden;
  text-align: center;
}
.newPost .add {
  margin-top: 2rem;
  border-radius: 25px;
  width: 100px;
  height: 30px;
  margin-inline: auto;
}
.newPost .close {
  margin-top: 2rem;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 10px;
  aspect-ratio: 1;
  height: 30px;
  width: 30px;
  margin-inline: auto;
}
</style>
