module.exports = {
  "inputs": {
    "name": {
      "example": "scott",
      "friendlyName": "name"
    },
    "email": {
      "example": "scott",
      "friendlyName": "email"
    },
    "password": {
      "example": "scott",
      "friendlyName": "password"
    },
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving User instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "name": "scott",
        "email": "scott",
        "password": "scott",
        "id": 123,
        "createdAt": "2015-03-17T03:51:15.739Z",
        "updatedAt": "2015-03-17T03:51:15.739Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.user.update(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "update_user"
};