
function validaTamanho(value){
  console.log(value.length)
  if(value.length == 14)
      return true;
  else return false;
}

function validate (value) {
  let tamanho = validaTamanho(value);
  if(tamanho)
    return true;
  else return false;
}

export default validate
