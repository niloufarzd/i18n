<template>
  <div id="app">
     <p>{{ $t("message.hello") }}</p>
     <select v-model="language" @change="changelanguage">
       <option value="fa">FA</option>
        <option value="ja">JA</option>
       <option value="en">EN</option>

     </select>

  </div>
</template>
<script>
 export default{
   data(){
      return {
      language :null

      }
   },
   methods:{
   changelanguage(){
   localStorage.setItem('lang',this.language);
   window.location.reload();
     }
   },
    created(){
       if(localStorage.getItem("lang")== null){
       localStorage.setItem("lang","fa");
       }
       this.language=localStorage.getItem("lang")
    }
  
 }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
