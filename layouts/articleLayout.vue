<template>
  <v-app class="content" dark>
    <TopBar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'articleLayout',
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
    overflow-y: scroll;
    background-color: $bg;
  }
</style>