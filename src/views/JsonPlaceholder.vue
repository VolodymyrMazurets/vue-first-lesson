<template>
  <div>
    <router-view v-if="$route.name === 'PostDetails'" />
    <ul v-else>
      <li
        v-for="({body, title, id}) in posts"
        :key="id"
        class="uk-card uk-card-default uk-card-body uk-width-1-2@m"
      >
        <h3 class="uk-card-title">{{title}}</h3>
        <p>{{body}}</p>
        <button
          @click="$router.push({name: 'PostDetails', params: {id}})"
          class="uk-button uk-button-primary"
        >Show Details</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "JsonPlaceholder",
  data() {
    return {
      posts: []
    };
  },
  methods: {
    async fetchData() {
      try {
        const data = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ).then(response => response.json());
        this.posts = data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.fetchData();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}
li {
  margin-bottom: 16px;
  margin-right: 16px;
  flex-basis: 20%;
  max-width: 20%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>