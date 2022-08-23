<template>
  <main>
    <Main></Main>
    <Trend/>
    <Blog/>
    <ClothesLogo/>
    <Footer></Footer>
  </main>
</template>
<script>
import Main from "../components/home-components/Main.vue";
import Trend from "../components/home-components/Trend.vue";
import ClothesLogo from "@/components/home-components/ClothesLogo.vue";
import Blog from "../components/home-components/Blog.vue";
import Footer from "@/components/home-components/Footer.vue";
export default {
    components: {
    Main,
    Trend,
    ClothesLogo,
    Blog,
    Footer
}
}
</script>
<style>

</style>