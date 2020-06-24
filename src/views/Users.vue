<template>
  <div class="users">
    <users-list :users="users" title="Users props"/>
    <users-list :users="users" title="Users 2"/>
    <users-list :users="users" title="Users 3"/>
  </div>
</template>
<script>
import UsersList from '../components/UsersList.vue';

export default {
  name: "Users",
  components: {
      UsersList,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Vova"
        },
        {
          id: 2,
          name: "Sasha"
        }
      ]
    };
  }
};
</script>