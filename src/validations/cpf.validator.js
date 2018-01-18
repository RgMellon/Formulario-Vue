
import CpfValidate from '../rules/cpf.rule'
const validator = {
  getMessage (field, args) {
    return 'CPF Invalido'
  },
  validate (value, args) {
    return CpfValidate(value)
  }
}
export default validator
