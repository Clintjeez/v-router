<template>
  <div class="service">
    <h1>{{service}}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'service',
  data () {
    return {
      service: 'Welcome to Service'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
