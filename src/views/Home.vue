<template>
  <div class="home">
    <h1>My todo list</h1>
    <input type="text" v-model="text" @keyup.enter="createNewTodo" />
    <p>{{text}}</p>
    <ul>
      <home-list-item
        v-for="item in todos"
        :key="item.id"
        :label="item.label"
        v-model="item.checked"
        :val="item.checked"
      />
    </ul>
  </div>
</template>

<script>
import HomeListItem from "../components/home/HomeListItem.vue";

export default {
  name: "Home",
  components: {
    HomeListItem
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          label: "Помыть посуду",
          checked: true
        },
        {
          id: 2,
          label: "Помыть пол",
          checked: false
        },
        {
          id: 3,
          label: "Поесть",
          checked: false
        }
      ],
      text: ""
    };
  },
  methods: {
    createNewTodo() {
      const id = this.todos.length;
      this.todos.push({
        id: id + 1,
        label: this.text,
        checked: false
      });
      this.text = '';
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 40px;
  color: #0c180c;
}
ul {
  li:not(:last-child) {
    margin-bottom: 16px;
  }
}
p {
  font-size: 20px;
  color: red;
}
</style>
