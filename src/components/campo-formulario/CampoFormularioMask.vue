<template>
  <div class="form-group">
    <div v-if="errors.has(`${nome}`) " class="form-width" >
      <label :class="{'form-label--error': errors.has(`${nome}`) } "> {{ label }} * </label>

      <input :name="nome" class="faixa faixa-vermelho" v-model.trim="dado"
         v-validate :data-vv-rules="validacao"
         :class="{ 'form-group--error': errors.has(`${nome}`) }"
         @focus="valida(false)" @blur="valida(true)" v-mask="mask" >

    </div>
    <div v-else class="form-width">
      <label :class="formLabel"> {{ label }} * </label>
        <input :name="nome" v-if="formLabel == 'form_label_azul'" class="faixa faixa-azul"
        v-model.trim="dado" v-validate :data-vv-rules="validacao"
        @focus="valida(false)" @blur="valida(true)" v-mask="mask">

      <input v-else :name="nome"  class="faixa faixa-cinza" v-model.trim="dado"
        @focus="valida(false)" @blur="valida(true)" v-mask="mask">

    </div>

    <span v-show="errors.has(`${nome}`)"
      :class="{'has-error': errors.has(`${nome}`) }" >
          {{ errors.first(`${nome}`) }}
    </span>

  </div>
</template>

<script>
  import myMixin from '../../mixins/valida';
  export default {
    props:['label', 'nome', 'required', 'validacao', 'mask'],
    mixins:[myMixin],
    name: 'form-mask',
    data(){
       return {

      }
    },
  }
</script>

<style src="../../assets/css/formulario.css">

</style>
