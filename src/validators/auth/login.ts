import Validator from "fastest-validator";

const v = new Validator();

const schema = {};

const check = v.compile(schema);

export { check as loginValidator };
