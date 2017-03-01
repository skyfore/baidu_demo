<template>
  <div id="app">
    <TopMenu></TopMenu>
    <SideBar></SideBar>
    <MainContainer></MainContainer>
    <Foot></Foot>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue';
import SideBar from './components/SideBar.vue';
import MainContainer from './components/Main.vue';
import Foot from './components/Foot.vue';

export default {
  name: 'app',
  components: {
    TopMenu,
    SideBar,
    MainContainer,
    Foot
  }
}
</script>