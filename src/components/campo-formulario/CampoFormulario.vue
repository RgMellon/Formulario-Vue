<template>
  <div class="form-group">

    <div v-if="$v.dado.$error" class="form-width">
      <label :class="{ 'form-label--error': $v.dado.$error }"> {{ label }} * </label>
      <input class="faixa faixa-vermelho" v-model.trim="dado" @input="$v.dado.$touch()"
        :class="{ 'form-group--error': $v.dado.$error }" @focus="valida(false)" @blur="valida(true)">
      <span class="form-group__message" v-if="!$v.dado.minLength">Minimo {{$v.dado.$params.minLength.min}} letras .</span>
      <span class="form-group__message" v-if="!$v.dado.required">Campo Obrigatorio</span>
    </div>

    <div v-else class="form-width">
      <label :class="formLabel"> {{ label }} * </label>
      <input v-if="formLabel == 'form_label_azul'" class="faixa faixa-azul" v-model.trim="dado" @input="$v.dado.$touch()"
        @focus="valida(false)" @blur="valida(true)">
      <input v-else class="faixa faixa-cinza" v-model.trim="dado" @input="$v.dado.$touch()"
        @focus="valida(false)" @blur="valida(true)">
    </div>

  </div>
</template>
<script>
  import { required, minLength, between } from 'vuelidate/lib/validators';
  export default {
  props:['label', 'required'],
  data () {
    return {
      dado: '',
      valido: true,
    }
  },
  methods: {
    valida(param){
        if(param == false)
          this.valido = false
        else{
          this.valido = true;
        }
      }
  },
  validations: {
    dado: {
      required,
      minLength: minLength(4)
    },
  },
  computed:{
    formLabel(){
      if(this.valido == true && this.dado == '')
        return 'form__label';
      else return 'form_label_azul'
    }
  }

}
</script>

<style scoped>
  .form-width{
    width: 100%;
  }
  .faixa {
    transition: 1s;
    width: 100%;
    padding-top: 1.5rem;
    outline: none;
    font-size: inherit;
    margin: 8px 0;
    border: none;
    box-sizing: border-box;
  }
  .faixa-vermelho{
    border-bottom: 2px solid red;
  }
  .faixa-cinza{
    border-bottom: 2px solid #716969c9;
  }
  .faixa-azul{
    border-bottom: 2px solid blue;
  }
  .form_label_azul{
    transition: 1s;
    display: block;
    color: #716969c9;
    position: absolute;
    font-size: 1rem;
    color: blue;
    margin-top: 10px;
  }
  .form__label{
    line-height: 6px;
    transition: 1s;
    display: block;
    color: #716969c9;
    position: absolute;
    font-size: 1.3rem;
    margin-top: 30px;
  }
  .form-group{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1 1;
    flex: 1 1;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    min-width: 24px;
    padding: 18px 0 0;
    position: relative;
    width: 100%;
    outline: none;
    -webkit-transition: -webkit-box-shadow .3s cubic-bezier(.25,.8,.5,1);
    transition: -webkit-box-shadow .3s cubic-bezier(.25,.8,.5,1);
    -o-transition: box-shadow .3s cubic-bezier(.25,.8,.5,1);
    transition: box-shadow .3s cubic-bezier(.25,.8,.5,1);
    transition: box-shadow .3s cubic-bezier(.25,.8,.5,1),-webkit-box-shadow .3s cubic-bezier(.25,.8,.5,1);
  }
  .form-group--error{
    border-bottom: 2px solid red;
  }
  .form-label--error{
    transition: 1s;
    display: block;
    color: #716969c9;
    position: absolute;
    font-size: 1rem;
    color: red;
    margin-top: 10px;
  }
</style>

