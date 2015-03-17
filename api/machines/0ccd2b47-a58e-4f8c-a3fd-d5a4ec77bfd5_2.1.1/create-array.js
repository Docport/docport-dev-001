module.exports = {
  "inputs": {
    "array": {
      "description": "The array to build.",
      "typeclass": "array",
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
      "description": "OK.",
      "friendlyName": "then",
      "getExample": function(inputs, env, input) {
        return inputs.array;
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    return exits.success(inputs.array);
  },
  "identity": "create-array"
};