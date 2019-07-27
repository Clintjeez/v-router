<template>
  <div id="app">
    <div class="bs-component">
              <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/blog">Blog</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/service">Service</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  
}
</style>
