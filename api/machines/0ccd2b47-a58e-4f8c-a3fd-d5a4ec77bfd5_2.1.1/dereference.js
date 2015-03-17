module.exports = {
  "inputs": {
    "dictionary": {
      "description": "The dictionary to dereference",
      "typeclass": "dictionary",
      "required": true,
      "type": "dictionary",
      "name": "dictionary",
      "friendlyName": "dictionary"
    },
    "keypath": {
      "description": "The key to look up (can be nested, e.g. \"avatar\" or \"avatar.sizeInBytes\")",
      "example": "mom.email",
      "required": true,
      "type": "string",
      "name": "keypath",
      "friendlyName": "keypath"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "description": "OK.",
      "getExample": function(inputs, env, input) {
        var subtree = inputs.dictionary;
        try {
          env._.each(inputs.keypath.split('.'), function(subkey) {
            subtree = subtree[subkey];
          });
        } catch (e) {
          return;
        }
        return subtree;
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

    var subtree = inputs.dictionary;
    try {
      _.each(inputs.keypath.split('.'), function(subkey) {
        subtree = subtree[subkey];
      });
    } catch (e) {
      return exits.error(e);
    }
    return exits.success(subtree);
  },
  "identity": "dereference"
};