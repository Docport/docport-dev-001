module.exports = {
  "inputs": {
    "name": {
      "example": "scott",
      "friendlyName": "name",
      "required": true
    },
    "email": {
      "example": "scott",
      "friendlyName": "email",
      "required": true
    },
    "password": {
      "example": "scott",
      "friendlyName": "password",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "name": "scott",
        "email": "scott",
        "password": "scott",
        "id": 123,
        "createdAt": "2015-03-17T03:51:15.739Z",
        "updatedAt": "2015-03-17T03:51:15.739Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.user.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_user"
};