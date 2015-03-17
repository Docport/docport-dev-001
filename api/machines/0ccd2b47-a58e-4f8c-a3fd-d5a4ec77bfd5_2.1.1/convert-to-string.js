module.exports = {
  "inputs": {
    "value": {
      "description": "The value to convert",
      "typeclass": "*",
      "required": true,
      "type": "*",
      "name": "value",
      "friendlyName": "value"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "description": "OK.",
      "example": "some string",
      "isDefault": true,
      "type": "string",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    return exits.success(inputs.value + '');
  },
  "identity": "convert-to-string"
};