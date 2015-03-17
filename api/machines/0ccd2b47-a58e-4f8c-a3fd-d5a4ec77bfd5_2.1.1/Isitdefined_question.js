module.exports = {
  "inputs": {
    "value": {
      "extendedDescription": "A value of any type may be provided.  If it evaluates to \"undefined\", the \"fail\" exit will be triggered.  Otherwise the \"pass\" exit will be triggered.",
      "friendlyName": "value",
      "description": "The value to check.",
      "typeclass": "*",
      "type": "*",
      "name": "value"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "fail": {
      "friendlyName": "fail",
      "description": "The value is undefined.",
      "name": "fail"
    },
    "success": {
      "id": "success",
      "friendlyName": "pass",
      "description": "OK.",
      "getExample": function(inputs, env, input) {
        return inputs.value;
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    if (typeof(inputs.value) === 'undefined') {
      return exits.fail();
    }
    return exits.success(inputs.value);
  },
  "identity": "Isitdefined_question"
};