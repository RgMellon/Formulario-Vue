<template>
  <div id="app">

    <campo-form label="Email" nome="email" validacao="required|email"> </campo-form>
    <campo-form label="Nome " nome="nome" mask="" validacao="required"> </campo-form>
    <campo-mask label="CPF" nome="cpf" validacao="required" mask="###.###.###-##"> </campo-mask>

  </div>
</template>

<script>

  import CampoFormValidate from './components/campo-formulario/CampoFormValidate';
  import CampoFormularioMask from './components/campo-formulario/CampoFormularioMask';
  export default {
    components: {
      'campo-form': CampoFormValidate,
      'campo-mask': CampoFormularioMask
    },
    data(){
      return {

      }
    },

  }
</script>

<style>

</style>
