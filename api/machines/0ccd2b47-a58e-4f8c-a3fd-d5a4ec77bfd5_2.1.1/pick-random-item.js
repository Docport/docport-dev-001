module.exports = {
  "inputs": {
    "array": {
      "typeclass": "array",
      "description": "The array of items to pick from",
      "required": true,
      "type": "array",
      "name": "array",
      "friendlyName": "array"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "friendlyName": "then",
      "description": "OK.",
      "getExample": function(inputs, env, input) {
        return inputs.array[0];
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var _ = require('lodash');
    var list = inputs.array;
    return exits.success(_.sample(list));
  },
  "identity": "pick-random-item"
};