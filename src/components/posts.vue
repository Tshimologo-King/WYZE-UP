<template>
  <div id="postCard">
    <router-link :to="{ name: 'Posts', params: { id: this.posts.idPosts } }">
      <div class="card">
        <div class="content-head">
          <h3>{{ post.userName }}</h3>
        </div>
        <div class="contentBody">
          <strong
            ><h5>{{ post.postTitle }}</h5></strong
          >
          <p>{{ post.postDescription }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {};
  },
};
</script>
