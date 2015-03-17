module.exports = {
  "inputs": {
    "array": {
      "typeclass": "array",
      "friendlyName": "In array",
      "description": "The array to search in (i.e. \"haystack\")",
      "required": true,
      "type": "array",
      "name": "array"
    },
    "item": {
      "typeclass": "*",
      "friendlyName": "Search for",
      "description": "The value to search for (i.e. \"needle\")",
      "required": true,
      "type": "*",
      "name": "item"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "notFound": {
      "friendlyName": "not found",
      "description": "Array does not contain specified item.",
      "name": "notFound"
    },
    "success": {
      "friendlyName": "found",
      "description": "OK.",
      "example": 8,
      "isDefault": true,
      "type": "number",
      "name": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var _ = require('lodash');
    var index = _.indexOf(inputs.array, inputs.item);
    if (index === -1) {
      return exits.notFound();
    }
    return exits.success(index);
  },
  "identity": "index-of"
};