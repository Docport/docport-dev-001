module.exports = {
  "inputs": {
    "numChars": {
      "description": "The number of random alphanumeric characters to generate.",
      "example": 6,
      "defaultsTo": 6,
      "type": "number",
      "name": "numChars",
      "friendlyName": "numChars"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "description": "OK.",
      "example": "6WE4RT",
      "isDefault": true,
      "type": "string",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var rdmString = '';
    for (var i = 0; i < (inputs.numChars || 6); i++) {
      rdmString += Math.random().toString(36).substr(2).toUpperCase();
    }
    return exits.success(rdmString.substr(0, inputs.numChars || 6));
  },
  "identity": "build-alphanumeric-string"
};