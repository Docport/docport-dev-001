module.exports = {
  "inputs": {
    "strings": {
      "description": "The array of strings to concatenate",
      "example": [
        "foo"
      ],
      "required": true,
      "type": "array",
      "name": "strings",
      "friendlyName": "strings"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "description": "OK.",
      "example": "foo",
      "isDefault": true,
      "type": "string",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var result = '';
    for (var i = 0; i < inputs.strings.length; i++) {
      result += inputs.strings[i];
    }
    return exits.success(result);
  },
  "identity": "concat"
};