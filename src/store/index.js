import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    users: null,
    careers: null,
    career: null,
    podcasts: null,
    podcast: null,
    subscription: null,
    token: null,
  },
  getters: {},
  mutations: {
    setUSER(state, user) {
      state.user = user;
    },
    setUSERS(state, users) {
      state.users = users;
    },
    token(state, token) {
      state.token = token;
    },
    setCareers(state, careers) {
      state.careers = careers;
    },
    setCareer(state, career) {
      state.career = career;
    },
    setPodcasts(state, podcasts) {
      state.podcasts = podcasts;
    },
    setPodcast(state, podcast) {
      state.podcast = podcast;
    },
  },
  actions: {
    //Register, Login & Verification
    register: async (context, payload) => {
      fetch("https://wyze-up.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          userName: payload.userName,
          userEmail: payload.userEmail,
          userPassword: payload.userPassword,
          userRole: payload.userRole,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("user", json));
      console.log(payload);
    },

    login: async (context, payload) => {
      let response = await fetch("https://wyze-up.herokuapp.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: payload.userEmail,
          userPassword: payload.userPassword,
        }),
      });
      //Verify
      let data = await response.json();
      if (data.token) {
        context.commit("token", data.token);
        fetch("https://wyze-up.herokuapp.com/Users/user/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.commit("user", data.user);
          });
        console.log(data, payload);
      } else {
        alert(data);
      }
    },
    getUSERS: async (context) => {
      const response = await fetch("https://wyze-up.herokuapp.com/Users")
        .then((res) => res.json())
        .then((data) => {
          return data.results;
        });
      if (!response.length || response == null) {
        console.log("No USERS Found");
      } else {
        context.commit("setUSERS", response);
      }
    },
    getUSER: async (context, id) => {
      fetch("https://wyze-up.herokuapp.com/Users/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setUSER", data))
        .catch((err) => console.log(err.message));
    },

    //Careers, Posts, Articles, Podcasts, User Profiles (Single View included)
    getCareers: async (context) => {
      const response = await fetch("https://wyze-up.herokuapp.com/Careers")
        .then((res) => res.json())
        .then((data) => {
          return data.results;
        });
      if (!response.length || response == null) {
        console.log("No Careers Available😢");
      } else {
        context.commit("setCareers", response);
      }
    },
    getCareer: async (context, id) => {
      fetch("https://wyze-up.herokuapp.com/Careers/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setCareer", data))
        .catch((err) => console.log(err.message));
    },

    getPodcasts: async (context) => {
      const res = await fetch("https://wyze-up.herokuapp.com/Podcasts");
      const podcast = await res.json();
      context.commit("setPodcasts", podcast);
    },
    getPodcast: async (context, id) => {
      fetch("https://wyze-up.herokuapp.com/Podcasts/" + id)
        .then((res) => res.json())
        .then((data) => (this.podcasts = data))
        .catch((err) => context.commit("setPodcast", podcast));
    },
    getPosts: async (context) => {
      const res = await fetch("https://wyze-up.herokuapp.com/Posts")
        .then((res) => res.json())
        .then((data) => {
          return data.results;
        });
      context.commit("setPosts", posts);
    },
    getPost: async (context, id) => {
      fetch("https://wyze-up.herokuapp.com/Posts/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setPost", data))
        .catch((err) => console.log(err.message));
    },
    newPost: async (context, payload) => {
      fetch("https://wyze-up.herokuapp.com/Posts/", {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify({
          postTitle: payload.postTitle,
          postDescription: payload.postDescription,
          userName: payload.userName,
          idUser: this.idUsers,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setPost", json));
      console.log(payload);
    },
  },

  modules: {},
});
