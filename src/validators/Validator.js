import Joi from 'joi';

export default class Validator {
  
  static #defaultOptions = {
    allowUnknown: false
  }
  
  static #email = Joi.string().email({tlds: {allow: false}});
  static #password = Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,50}$/));
  static #firstname = Joi.string().alphanum();
  static #lastname = Joi.string().alphanum();
  
  static email = (value) => {
    return !this.#email.validate(value, this.#defaultOptions).error;
  }
  
  static password = (value) => {
    return !this.#password.validate(value, this.#defaultOptions).error;
  }
  
  static firstname = (value) => {
    return !this.#firstname.validate(value, this.#defaultOptions).error;
  }
  
  static lastname = (value) => {
    return !this.#lastname.validate(value, this.#defaultOptions).error;
  }
  
}