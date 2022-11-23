<template>
    <div class="main">
      <div class="left" v-html="left"></div>
      <div class="right" v-html="right"></div>
    </div>
</template>
<script>
// import * as JsSearch from 'js-search';
// import * as database from "~/assets/database.json";
import left from "~/pages/articles/anderia/left.md";
import right from "~/pages/articles/anderia/right.md";
export default {
    name: "wiki",
    layout: "articleLayout",
    data() {
      return {
        id: this.$route.query.id
      }
    },
    created() {
      console.log(this.$route.query);
    },
    computed: {
      left() {
        return left
      },
      right() {
        return right
      },
    },
    methods: {
    },
}
</script>
<style scoped lang="scss">
@import "~/assets/variables.scss";
.main{
  display: flex;
  gap: 1em;
  .left{
    width: 60%;
  }
  .right{
    padding: 1em;
    background-color: $color2;
    border-radius: 0.8em;
    width: 40%;
  }
}
img[alt=main-photo]{
  width: 100px;
}
@media screen and (max-width: "1200px") {
  .main{
    align-items: center;
    flex-direction: column-reverse;
    .left{
      width: 100%;
    }
    .right{
      width: 100%;
    }
  }
}
</style>
<style lang="scss">
  html, body{
    overflow-y: scroll;
  }
  .right-ul{
    list-style-type: none;
    padding: 0;
    margin-top: 1em;
    li{
      display: flex;
      gap: 0.5em;
    }
  }
</style>