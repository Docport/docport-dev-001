module.exports = {
  "inputs": {
    "start": {
      "example": 1,
      "defaultsTo": 0,
      "friendlyName": "At least",
      "description": "The min acceptable integer to generate",
      "required": true,
      "type": "number",
      "name": "start"
    },
    "end": {
      "example": 1,
      "defaultsTo": 0,
      "friendlyName": "No greater than",
      "description": "The max acceptable integer to generate",
      "required": true,
      "type": "number",
      "name": "end"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "example": 1,
      "friendlyName": "then",
      "description": "OK.",
      "isDefault": true,
      "type": "number",
      "name": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var start = Number(inputs.start);
    var end = Number(inputs.end);
    var result = Math.ceil(Math.random() * end) + start;
    exits.success(result);
  },
  "identity": "generate-random-integer"
};