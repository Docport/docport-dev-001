module.exports = {
  "inputs": {
    "dictionary": {
      "typeclass": "dictionary",
      "description": "The object from which the unique string hash will be calculated.",
      "required": true,
      "type": "dictionary",
      "name": "dictionary",
      "friendlyName": "dictionary"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "description": "OK.",
      "example": "e003c89cdf35cdf46d8239b4692436364b7259f9",
      "isDefault": true,
      "type": "string",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var hashFn = require('object-hash');

    var hash = hashFn(inputs.dictionary);
    return exits.success(hash);

  },
  "identity": "hash-dictionary"
};