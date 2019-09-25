import double, { add, name } from './utilities'
import scream from './scream'
import validator from 'validator'
import uuidv4 from 'uuid/v4'

console.log('index.js')
console.log(add(32, 3))
console.log(scream(name))
console.log(double(3))
const testEmail = validator.isEmail('vamsidharKaranam')
console.log(testEmail)
console.log(uuidv4())