<template>
  <div class="buttons">
    <h1>buttons</h1>
    <h4>{{counter}}</h4>
    <app-button @click="increment">Inkrement</app-button>
    <app-button @click="decrement">Dekrement</app-button>
  </div>
</template>
<script>

export default {
  name: "Buttons",

  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    }
  }
};
</script>