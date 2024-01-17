<template>
  <HeaderComponent />
  <main></main>
  <FooterComponent />
  <router-view></router-view>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import 'bulma/css/bulma.css';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
  :root {
    --cor-principal: #FFAEC2;
    --cor-hover: #FE7596;
    --rosa-claro: #FFF2F2;
    --rosa-detalhes: #FF91AC;
    --branco: #FFFFFF;
    --branco-azulado: #F0FCFF;
    --preto-principal: #424242;

    --fonte-principal: 'Dosis', sans-serif;
    --fonte-secundaria: 'Montserrat Alternates', sans-serif;

    --filtro-branco: invert(100%) sepia(0%) saturate(7481%) hue-rotate(275deg) brightness(114%) contrast(99%);
    --filtro-rosa: invert(64%) sepia(32%) saturate(1390%) hue-rotate(302deg) brightness(100%) contrast(104%);
    --filtro-rosa-claro: invert(3%) sepia(1%) saturate(3313%) hue-rotate(271deg) brightness(93%) contrast(124%);
    --filtro-branco-azulado: invert(11%) sepia(69%) saturate(1865%) hue-rotate(177deg) brightness(110%) contrast(105%);
  }

  * { 
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
  }
</style>
