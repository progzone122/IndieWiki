<template>
  <div class="main">
    <div class="main-left">
      <div class="form">
        <v-text-field
          v-model="search_input"
          placeholder="Введите поисковой запрос"
          filled
          rounded
          clearable
          color="white"
        >
          <v-btn
            icon
            slot="append"
            style="margin-top: -0.4em;"
            @click="search(search_input)"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-text-field>
      </div>
      <ul class="form-results">
        <li v-for="i in 20" :key="i">asfdosdajflksd</li>
      </ul>
    </div>
    <div class="main-right">
      <v-tabs
        color="white"
        bg-color="white"
      >
        <v-tab @click="tab = 'one'">Рекомендуемое</v-tab>
        <v-tab @click="tab = 'two'">Новое</v-tab>
        <v-tab @click="tab = 'three'">Последние коммиты</v-tab>
      </v-tabs>

      <v-card-text>
          <ul v-if="tab === 'one'">
            <li v-for="i in tab_content.one" :key="i">{{ i.title }}</li>
          </ul>
          <ul v-if="tab === 'two'">
            <li v-for="i in tab_content.two" :key="i">{{ i.title }}</li>
          </ul>
          <ul v-if="tab === 'three'">
            <li v-for="i in tab_content.three" :key="i">{{ i.title }}</li>
          </ul>
      </v-card-text>
    </div>
  </div>
</template>

<script>
import * as database from "~/assets/database.json";
export default {
  name: 'index',
  layout: "default",
  data() {
    return {
      tab: "one",
      tab_content: {
        one: [
          {
            title: "Test"
          },
          {
            title: "Test"
          },
          {
            title: "Test"
          },
          {
            title: "Test"
          },
          {
            title: "Test"
          },
          {
            title: "Test"
          },
          {
            title: "Test"
          },
        ],
        two: [

        ],
        three: [

        ]
      },
      methods: {
        search(request){
          
        }
      },
    }
  },
  created() {
    console.log(database);
  },
}
</script>
<style scoped lang="scss">
  .main{
    width: 100%;
    height: 87vh;
    display: flex;
    padding-top: 2em;
    .main-left{
      width: 60%;
      height: 100%;
      // background-color: red;
    }
    .main-right{
      width: 40%;
      height: 100%;
      border-radius: 0.8em;
      ul{
        background-color: $color1;
        padding: 0;
        list-style-type: none;
        border-radius: 0.8em;
        margin-top: 1.7em;
        height: 65vh;
        overflow-y: auto;
        li{
          padding: 1em;
          cursor: pointer;
          &:hover{
            color: rgb(200, 200, 200);
            background-color: $color2;
          }
        }
      }
    }
  }
  .form{
    width: 90%;
  }
  .form-results{
    width: 90%;
    height: 50%;
    background-color: $color1;
    border-radius: 0.8em;
    list-style-type: none;
    overflow-y: auto;
    padding: 0;
    overflow-x: hidden;
    li{
      padding-top: 1em;
      padding-bottom: 1em;
      padding-left: 1em;
      width: 100%;
      background-color: transparent;
      cursor: pointer;
      &:hover{
        color: rgb(200, 200, 200);
        background-color: $color2;
      }
    }
  }
  @media screen and (max-width: "960px") {
    .main{
      flex-direction: column;
      height: auto;
      gap: 3em;
      .main-left{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .form-results{
          height: 20em;
        }
      }
      .main-right{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
</style>
<style lang="scss">
  @media screen and (max-width: "960px") {
    html, body{
      overflow-y: scroll;
    }
  }
</style>