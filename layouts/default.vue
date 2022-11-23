<template>
  <v-app class="content" dark>
    <TopBar />
    <v-main style="margin-top: 5em;">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span style="text-align: center; width: 100%;">&copy; IndieWiki {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
@import "~/assets/variables.scss";
  .content{
    background-color: $bg;
  }
</style>
<style lang="scss">
@import "~/assets/variables.scss";
html, body{
  overflow-y: hidden;
  background-color: $bg;
}
</style>