module.exports = {
  "inputs": {
    "json": {
      "description": "The JSON string to parse",
      "example": "{\"some json\": \"like this\"}",
      "required": true,
      "type": "string",
      "name": "json",
      "friendlyName": "json"
    },
    "schema": {
      "description": "An example of what the resulting data should look like.",
      "typeclass": "*",
      "required": true,
      "type": "*",
      "name": "schema",
      "friendlyName": "schema"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "couldNotParse": {
      "description": "Could not parse provided string- must be a valid JSON string.",
      "extendedDescription": "Oftentimes this error is a result of not using double-quotes.  Refer to the official JSON specification at http://www.json.org/ for more information.",
      "name": "couldNotParse",
      "friendlyName": "couldNotParse"
    },
    "success": {
      "description": "OK.",
      "getExample": function(inputs, env, input) {
        return inputs.schema;
      },
      "isDefault": true,
      "hasDynamicOutputType": true,
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var parsedJson;
    try {
      parsedJson = JSON.parse(inputs.json);
    } catch (e) {
      return exits.couldNotParse(e);
    }
    return exits.success(parsedJson);
  },
  "identity": "parse-json"
};