
let myMixin = {
  data(){
    return {
      valido: true,
      dado: '',
    }
  },

  methods: {
    valida(param){
      if(param == true)
        this.valido = true;
      else
        this.valido = false;
    }
  },

  computed:{
      formLabel(){
        if(this.valido == true && this.dado == '')
          return 'form__label';
        else return 'form_label_azul'
      },
    }
}

export default myMixin;
