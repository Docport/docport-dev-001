module.exports = {
  "inputs": {
    "variable": {
      "id": "e4c808aa-feb8-4020-881d-a018ab519774",
      "friendlyName": "Left-Hand Value",
      "description": "left side of the comparison",
      "typeclass": "*",
      "required": true
    },
    "test": {
      "id": "d0456660-646d-42e2-8ec0-33944751c3d4",
      "friendlyName": "Right-Hand Value",
      "description": "right side of the comparison",
      "typeclass": "*",
      "required": true
    },
    "comparison": {
      "id": "a9a63a4a-5784-4e16-92a2-7d059a382ca5",
      "extendedDescription": "Available comparisons: ==, !=, <, <=, ===, !==, >=, >, in, isUndefined, isNotUndefined, isEmpty, isNotEmpty",
      "friendlyName": "Comparison",
      "description": "The comparison to perform",
      "example": ">",
      "required": true
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "pass": {
      "id": "then",
      "friendlyName": "pass",
      "description": "The comparison evaluates to \"true\"."
    },
    "fail": {
      "id": "3300a2cd-0c65-4ff6-b668-58a5133c95f0",
      "friendlyName": "fail",
      "description": "The comparison evaluates to \"false\"",
      "example": ""
    }
  },
  "defaultExit": "pass",
  "fn": function(inputs, exits, env) {
    return exits();
  },
  "identity": "If"
};