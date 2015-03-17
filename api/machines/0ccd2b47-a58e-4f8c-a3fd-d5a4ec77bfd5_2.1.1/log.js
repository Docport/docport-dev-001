module.exports = {
  "inputs": {
    "message": {
      "example": "hello world",
      "required": true,
      "description": "The message to output to the console.",
      "type": "string",
      "name": "message",
      "friendlyName": "message"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "description": "OK.",
      "isDefault": true,
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    console.log(inputs.message);
    return exits.success();
  },
  "identity": "log"
};