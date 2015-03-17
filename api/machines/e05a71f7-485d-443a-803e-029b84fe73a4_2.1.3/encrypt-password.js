module.exports = {
  "inputs": {
    "password": {
      "example": "l0lcatzz",
      "friendlyName": "Password",
      "description": "String to be encrypted",
      "required": true,
      "protect": true,
      "type": "string",
      "name": "password"
    },
    "difficulty": {
      "example": 10,
      "defaultsTo": 10,
      "description": "The difficulty index representing how \"hard\" to encrypted password would be to crack.",
      "extendedDescription": "See https://www.npmjs.com/package/bcrypt for more information.",
      "type": "number",
      "name": "difficulty",
      "friendlyName": "difficulty"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "example": "2$a492.abc3fadifhoi3hesdqd",
      "description": "OK.",
      "isDefault": true,
      "type": "string",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var difficulty = inputs.difficulty || 10;

    require('bcrypt').hash(inputs.password, difficulty, function(err, hash) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(hash);
    });

  },
  "identity": "encrypt-password"
};