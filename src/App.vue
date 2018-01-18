<template>
  <div id="app">
    <!--
    <meu-campo label="Nome"> </meu-campo>
    <meu-campo label="Cidade"> </meu-campo>
    <meu-campo label="Bairro"> </meu-campo> -->
    <campo-form label="Email" nome="email" validacao="required|email"> </campo-form>
    <campo-form label="Nome " nome="nome" validacao="required"> </campo-form>

  </div>
</template>

<script>
  import CampoFormulario from './components/campo-formulario/CampoFormulario';
  import CampoFormValidate from './components/campo-formulario/CampoFormValidate';
  import validationMixins from './validationMixins';
  export default {
    components: {
      'meu-campo': CampoFormulario,
      'campo-form': CampoFormValidate
    },
    data(){
      return {

      }
    },
    mixins:[validationMixins],
  }
</script>

<style>

</style>
