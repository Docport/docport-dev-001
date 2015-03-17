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
    },
    "table": {
      "description": "The name of the table.",
      "example": "direwolves",
      "required": true,
      "type": "string",
      "name": "table",
      "friendlyName": "table"
    },
    "query": {
      "description": "The selection criteria (like the WHERE clause)",
      "extendedDescription": "Standard query selectors from the Postgresql method.",
      "typeclass": "dictionary",
      "type": "dictionary",
      "name": "query",
      "friendlyName": "query"
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
    "invalidCollection": {
      "description": "Provided `table` input is not a valid name for a Postgresql table.",
      "name": "invalidCollection",
      "friendlyName": "invalidCollection"
    },
    "success": {
      "description": "OK.",
      "example": 123,
      "isDefault": true,
      "type": "number",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    // Dependencies
    var pg = require('pg');
    var wlSQL = require('waterline-sequel');

    // Rename inputs for clarity
    var table = inputs.table;
    var query = {
      where: inputs.query || null
    };

    // WL SQL options
    var sqlOptions = {
      parameterized: true,
      caseSensitive: true,
      escapeCharacter: '"',
      casting: true,
      canReturnValues: true,
      escapeInserts: true,
      declareDeleteAlias: false,
      wlNext: {
        caseSensitive: true
      }
    };

    var normalizedSchema = {};
    normalizedSchema[table] = {
      tableName: table,
      identity: table,
      attributes: {}
    };

    // Build the SQL query based on the query inputs
    var sequel = new wlSQL(normalizedSchema, sqlOptions);
    var sql;

    // Build a query for the specific query strategy
    try {
      sql = sequel.count(table, query);
    } catch (e) {
      return exits.error(e);
    }

    // Create a new postgresql client
    var client = new pg.Client(inputs.connectionUrl);
    client.connect(function(err) {

      if (err) {
        return exits.error(err);
      }

      client.query(sql.query[0], sql.values[0], function(err, results) {
        client.end();

        if (err) {
          return exits.error(err);
        }

        var count = results.rows[0] && results.rows[0].count;
        return exits.success(count);
      });
    });

  },
  "identity": "count-records"
};