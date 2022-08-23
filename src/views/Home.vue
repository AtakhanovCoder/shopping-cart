<template>
  <main>
    <Main></Main>
    <Trend/>
    <Blog/>
    <ClothesLogo/>
  </main>
</template>
<script>
import Main from "../components/home-components/Main.vue";
import Trend from "../components/home-components/Trend.vue";
import ClothesLogo from "@/components/home-components/ClothesLogo.vue";
import Blog from "../components/home-components/Blog.vue";
export default {
    components: {
    Main,
    Trend,
    ClothesLogo,
    Blog
}
}
</script>
<style>

</style>