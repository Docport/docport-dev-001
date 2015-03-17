module.exports = {
  "inputs": {
    "dictionary": {
      "description": "The object to build.",
      "typeclass": "dictionary",
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
      "friendlyName": "then",
      "description": "OK.",
      "getExample": function(inputs, env, input) {
        return inputs.dictionary;
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    return exits.success(inputs.dictionary);
  },
  "identity": "create-dictionary"
};