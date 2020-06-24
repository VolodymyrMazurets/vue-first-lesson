<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{user.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "UsersList",
  props: {
    users: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: "Users"
    }
  }
};
</script>