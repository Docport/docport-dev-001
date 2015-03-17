module.exports = {
  "inputs": {
    "connectionUrl": {
      "description": "The postgresql connection URL",
      "defaultsTo": "postgres://foo:bar@localhost:5432/machinepack_postgresql",
      "example": "postgres://foo:bar@localhost:5432/machinepack_postgresql",
      "required": true,
      "type": "string",
      "name": "connectionUrl",
      "friendlyName": "connectionUrl"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "couldNotConnect": {
      "description": "Could not connect to Postgresql server at specified `connectionUrl`.",
      "extendedDescription": "Make sure the credentials are correct and that the server is running.",
      "name": "couldNotConnect",
      "friendlyName": "couldNotConnect"
    },
    "success": {
      "description": "OK.",
      "example": [
        "direwolves"
      ],
      "isDefault": true,
      "type": "array",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var pg = require('pg');

    // Create a new postgresql client
    var client = new pg.Client(inputs.connectionUrl);
    client.connect(function(err) {

      if (err) {
        return exits.error(err);
      }

      var query = "SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema'";
      client.query(query, function(err, results) {

        client.end();

        if (err) {
          return exits.error(err);
        }

        // Build an array of tablenames
        results.rows = results.rows || [];

        var names = results.rows.map(function(row) {
          return row.tablename;
        });

        return exits.success(names);
      });

    });
  },
  "identity": "list-tables"
};