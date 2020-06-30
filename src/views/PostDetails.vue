<template>
  <article class="uk-article">
    <h1 class="uk-article-title">
      {{post.title}}
    </h1>

    <p
      class="uk-text-lead"
    >{{post.body}}</p>
  </article>
</template>
<script>
import axios from "axios";

export default {
  name: "PostDetails",
  data() {
    return {
      post: {}
    };
  },
  methods: {
    async fetchPost(id) {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        this.post = data;
      } catch (error) {}
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.fetchPost(id);
  }
};
</script>