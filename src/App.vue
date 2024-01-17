<template>
  <HeaderComponent /> 
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import 'bulma/css/bulma.css';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style>
  :root {
    --cor-principal: #FFAEC2;
    --cor-footer: #FE7596;
    --rosa-claro: #FFF2F2;
    --rosa-detalhes: #FF91AC;
    --branco: #FFFFFF;
    --branco-azulado: #F0FCFF;
    --preto-principal: #424242;

    --fonte-principal: 'Dosis', sans-serif;
    --fonte-secundaria: 'Montserrat Alternates', sans-serif;

    --filtro-branco: invert(100%) sepia(0%) saturate(7481%) hue-rotate(275deg) brightness(114%) contrast(99%);
  }

  * { 
    margin: 0;
    padding: 0;
  }
</style>
