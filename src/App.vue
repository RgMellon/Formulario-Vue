<template>
  <div id="app">
    <div class="form-group">
      <div v-if="$v.dado.$error">
        <label :class="{ 'form-label--error': $v.dado.$error }">Name</label>
        <input class="faixa faixa-vermelho" v-model.trim="dado" @input="$v.dado.$touch()"
        :class="{ 'form-group--error': $v.dado.$error }" @focus="teste(false)" @blur="teste(true)">
      </div>
      <div v-else>
        <label :class="formLabel"> Name </label>
        <input v-if="formLabel == 'form_label_azul'" class="faixa faixa-azul" v-model.trim="dado" @input="$v.dado.$touch()"
          @focus="teste(false)" @blur="teste(true)">
        <input v-else class="faixa faixa-cinza" v-model.trim="dado" @input="$v.dado.$touch()"
          @focus="teste(false)" @blur="teste(true)">
      </div>
      </div>


      <div v-if="$v.dado.$error">
        <span class="form-group__message" v-if="!$v.dado.required">Campo Obrigatorio</span>
        <span class="form-group__message" v-if="!$v.dado.minLength">Name must have at least {{$v.dado.$params.minLength.min}} letters.</span>
    </div>
  </div>
</template>

<script>
  import { required, minLength, between } from 'vuelidate/lib/validators';
  export default {
  data () {
    return {
      dado: '',
      name: '',
      age: 0,
      valido: true,
    }
  },
  methods: {
    teste(param){
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
    age: {
      between: between(20, 30)
    }
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

<style>

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
