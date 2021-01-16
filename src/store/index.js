import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";

export default new Vuex.Store({
  state: {
    post: {}
  },
  getters: {
    postDetail(state) {
      return state.post;
    }
  },
  mutations: {
    getPost(state, post) {
      state.post = post;
    }
  },
  actions: {
    getPost(context, postId) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + postId)
        .then((response) => {
          let post = response.data;
          context.commit("getPost", post);
        });
    }
  }
});
