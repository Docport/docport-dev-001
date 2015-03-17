module.exports = {
  "inputs": {
    "a": {
      "description": "The first number.",
      "example": 5,
      "required": true,
      "type": "number",
      "name": "a",
      "friendlyName": "a"
    },
    "b": {
      "description": "The second number.",
      "example": 2,
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
      "example": 2.5,
      "isDefault": true,
      "type": "number",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    return exits.success(inputs.a / inputs.b);
  },
  "identity": "divide"
};