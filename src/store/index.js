import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    users: null,
    careers: null,
    career: null,
    subscribers: null,
    subscriber: null,
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
    setSubscribers(state, subscribers) {
      state.subscribers = subscribers;
    },
    setSubscriber(state, subscriber) {
      state.subscriber = subscriber;
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

    //Get Users and single id
    getUSERS: async (context) => {
      fetch("https://wyze-up.herokuapp.com/Users")
        .then((res) => res.json())
        .then((data) => context.commit("setUSERS", data))
        .catch((err) => console.log(err.message));
    },
    getUSER: async (context, id) => {
      fetch("https://wyze-up.herokuapp.com/Users/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setUSER", data))
        .catch((err) => console.log(err.message));
    },

    //Careers (Single View included)
    getCareers: async (context) => {
      const response = await fetch("https://wyze-up.herokuapp.com/Careers");
      const { results } = await response.json();
      if (results == undefined || results == null) {
        console.log("No Careers Available😢");
      } else {
        context.commit("setCareers", results);
      }
    },
    getCareer: async (context, id) => {
      fetch("https://wyze-up.herokuapp.com/Careers/" + id)
        .then((res) => res.json())
        .then((data) => {
          context.commit("setCareer", data.results);
        })
        .catch((err) => console.log(err.message));
    },
    getSubscribers: async (context) => {
      fetch("https://wyze-up.herokuapp.com/subscribers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res = res.json()))
        .then((data) => context.commit("setSubscribers", data))
        .catch((err) => console.log(err.message));
    },
    getSubscriber: async (context, id) => {
      fetch("https://wyze-up.herokuapp.com/subscribers/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setSubscriber", data))
        .catch((err) => console.log(err.message));
    },
  },

  modules: {},
});
