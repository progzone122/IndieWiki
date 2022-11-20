<template>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      elevation="0"
      color="transparent"
      class="bar"
    >
        <v-btn
            icon
            @click="$router.push('/IndieWiki/')"
            v-if="back_button"
        >
            <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <!-- <v-btn
            icon
            @click.stop="clipped = !clipped"
        >
            <v-icon>mdi-application</v-icon>
        </v-btn>
        <v-btn
            icon
            @click.stop="fixed = !fixed"
        >
            <v-icon>mdi-minus</v-icon>
        </v-btn> -->
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer />
        <v-btn
            icon
        >
            <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn
            icon
            @click.stop="rightDrawer = !rightDrawer"
        >
            <v-icon>mdi-menu</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    name: "TopBar",
    data() {
        return {
            title: null,
            back_button: false
        }
    },
    mounted() {
        this.title = document.title;
        if (window.location.pathname === "/IndieWiki/"){
            this.back_button = false;
        } else {
            this.back_button = true;
        }
    },
}
</script>
<style lang="scss">
    .bar{
        padding: 1em;
    }
</style>