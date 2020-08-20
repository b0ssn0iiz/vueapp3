<template>
<div>
<v-app>
  <v-navigation-drawer app>
    <p>navigation drawer</p>
     <v-btn large color="primary">ฟิตข่าว</v-btn> <br>
     
     <v-btn large color="error">Messenger</v-btn>
  </v-navigation-drawer>

  <v-app-bar app>
    <p>app bar</p>
  </v-app-bar>
  
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <p>footer</p>
  </v-footer>
  
</v-app>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      message: "RMUTL"
    }
  }
}
</script>

<style>

</style>