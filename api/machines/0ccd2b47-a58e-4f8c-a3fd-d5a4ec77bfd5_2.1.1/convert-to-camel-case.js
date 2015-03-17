module.exports = {
  "inputs": {
    "string": {
      "example": "foo-bar-baz",
      "description": "The dash-delimited string to convert",
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
    "success": {
      "description": "OK.",
      "example": "fooBarBaz",
      "isDefault": true,
      "type": "string",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var parts = inputs.string.split(/[\W_]/);
    var transformedParts = [];
    parts.forEach(function(part, index) {
      part = part.toLowerCase();
      if (index !== 0) {
        part = part[0].toUpperCase() + part.substr(1);
      }
      transformedParts.push(part);
    });
    return exits.success(transformedParts.join(''));

  },
  "identity": "convert-to-camel-case"
};