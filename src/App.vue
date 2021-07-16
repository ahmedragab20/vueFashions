<template>
  <div id="nav">
    <main-header />
    <onload />
    <welcome />
  </div>
  <router-view />
</template>
<script>
import mainHeader from './components/globle/mainHeader.vue';
import Onload from './components/globle/onload.vue';
import welcome from './components/globle/welcome.vue';
export default {
  name: "App",
  components: {mainHeader, Onload, welcome},
}
</script>