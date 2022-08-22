<template>
  <main>
    <HomeMain/>
    <HomeTrend/>
  </main>
</template>
<script>
import HomeMain from "../components/home-components/HomeMain.vue";
import HomeTrend from "../components/home-components/HomeTrend.vue";
export default {
    components: { 
      HomeMain,
      HomeTrend
    }
}
</script>
<style>

</style>