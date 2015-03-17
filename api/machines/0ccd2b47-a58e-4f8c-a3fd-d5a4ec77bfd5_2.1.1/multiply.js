module.exports = {
  "inputs": {
    "a": {
      "description": "The first number.",
      "example": 2,
      "required": true,
      "type": "number",
      "name": "a",
      "friendlyName": "a"
    },
    "b": {
      "description": "The second number.",
      "example": -10,
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
      "example": -20,
      "isDefault": true,
      "type": "number",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    return exits.success(inputs.a * inputs.b);
  },
  "identity": "multiply"
};