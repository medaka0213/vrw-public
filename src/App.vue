<template>
  <div id="page-content">
    <header>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/events">打ち上げ・イベント</router-link></li>
        <li><router-link to="/meetups">集会</router-link></li>
        <li><router-link to="/slides">スライド資料</router-link></li>
      </ul>
    </header>
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style scoped lang="scss">
#app {
  header{
    background : #004F8A;
      ul{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
          li{
            margin: 10px;
              a{
                color: #fff;
              }
          }
      }
  }
  .v-enter-active, .v-leave-active {
    transition: opacity .5s;
  }
  .v-enter, .v-leave-to {
    opacity: 0;
  }
}
</style>