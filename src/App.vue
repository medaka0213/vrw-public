<template>
  <div id="app">
    <header>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
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
    background : #777;
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