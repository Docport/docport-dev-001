module.exports = {
  "inputs": {
    "a": {
      "description": "The number to subtract from.",
      "example": -20,
      "required": true,
      "type": "number",
      "name": "a",
      "friendlyName": "a"
    },
    "b": {
      "description": "The number to subtract.",
      "example": 2.2,
      "required": true,
      "type": "number",
      "name": "b",
      "friendlyName": "b"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "description": "OK.",
      "example": -22.2,
      "isDefault": true,
      "type": "number",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    return exits.success(inputs.a - inputs.b);
  },
  "identity": "subtract"
};