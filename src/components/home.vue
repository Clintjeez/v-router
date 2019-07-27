<template>
  <div class="home">
    <h1>Home</h1>
    <div class="row">
      <div class="col-4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
        <h3 @click="goTodetail()" >{{data.productTitle}}</h3>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Homw',
      products:[
        {
        productTitle:"ART 1",
        image: require('../assets/images/img1.jpg'), 
        productId: 1
      },
      {
        productTitle: "ART 2",
        image: require('../assets/images/img2.jpg'),
        productId: 2
      },
      {
        productTitle: "ART 3",
        image: require('../assets/images/img3.jpeg'),
        productId: 3
      },
      {
        productTitle: "ART 4",
        image: require('../assets/images/img4.jpeg'),
        productId: 4
      },
      {
        productTitle: "ART 5",
        image: require('../assets/images/img5.jpeg'),
        productId: 5
      },
      {
        productTitle: "ART 6",
        image: require('../assets/images/img6.jpeg')
      }
      ],
      methods:{
        goTodetail(){
          this.$router.push({name:'details'})
        }
      }
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
