module.exports = {
  "inputs": {
    "string": {
      "description": "The string to convert",
      "example": "5",
      "required": true,
      "type": "string",
      "name": "string",
      "friendlyName": "string"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "notANumber": {
      "description": "The provided string cannot be converted into a number.",
      "name": "notANumber",
      "friendlyName": "notANumber"
    },
    "success": {
      "description": "OK.",
      "example": 5,
      "isDefault": true,
      "type": "number",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var _ = require('lodash');
    if (_.isNaN(+inputs.string)) {
      return exits.notANumber();
    }
    return exits.success(inputs.string);
  },
  "identity": "convert-to-number"
};