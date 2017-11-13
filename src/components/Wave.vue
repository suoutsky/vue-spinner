<template>
  <div class="wave">
    <Wave :show="true"></wave>
  </div>
</template>

<script>
import Wave from '../basic/Wave';
export default {
  components: {
    Wave
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wave {
    height: 100%;
    width: 100%;
    background-color: #1abc9c;
  }
</style>
