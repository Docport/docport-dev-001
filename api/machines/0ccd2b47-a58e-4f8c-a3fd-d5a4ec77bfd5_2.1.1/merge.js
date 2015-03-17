module.exports = {
  "inputs": {
    "primary": {
      "description": "The dictionary whose keys will take precedence.",
      "typeclass": "dictionary",
      "required": true,
      "type": "dictionary",
      "name": "primary",
      "friendlyName": "primary"
    },
    "secondary": {
      "description": "The dictionary whose keys may be overridden by `primary`.",
      "typeclass": "dictionary",
      "required": true,
      "type": "dictionary",
      "name": "secondary",
      "friendlyName": "secondary"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "description": "OK.",
      "getExample": function(inputs, env, input) {
        return env._.merge(_.merge({}, inputs.secondary), inputs.primary);
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var _ = require('lodash');

    return exits.success(_.merge(_.merge({}, inputs.secondary), inputs.primary));
  },
  "identity": "merge"
};