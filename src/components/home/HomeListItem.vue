<template>
  <li class="home-list-item">
      <input type="checkbox" :value="val" v-model="checked">{{label}}</li>
</template>
<script>
export default {
  name: "HomeListItem",
  props: {
    label: {
      type: String,
      required: true
    },
    val: {
      type: Boolean,
    },
    value: Boolean,
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.onChange(val);
      },
    },
  },
  methods: {
    onChange(e) {
      this.$emit('input', e);
    },
  },
};
</script>