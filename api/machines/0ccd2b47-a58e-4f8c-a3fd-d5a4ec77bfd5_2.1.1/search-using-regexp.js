module.exports = {
  "inputs": {
    "string": {
      "example": "hello world",
      "description": "The string to search",
      "required": true,
      "type": "string",
      "name": "string",
      "friendlyName": "string"
    },
    "regexp": {
      "example": "world",
      "description": "The regular expression to match against (as a string- don't include prefix and suffix slashes)",
      "required": true,
      "type": "string",
      "name": "regexp",
      "friendlyName": "regexp"
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "invalidRegexp": {
      "friendlyName": "invalid regex",
      "description": "Provided regular expression is invalid (cannot be instantiated into a RegExp object)",
      "name": "invalidRegexp"
    },
    "fail": {
      "friendlyName": "no match found",
      "description": "No match found",
      "name": "fail"
    },
    "success": {
      "friendlyName": "match found",
      "description": "OK.",
      "example": "world",
      "isDefault": true,
      "type": "string",
      "name": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    // Check that the regexp is valid
    var regexp;
    try {
      regexp = new RegExp(inputs.regexp);
    } catch (e) {
      return exits.invalidRegexp(e);
    }

    var matches = inputs.string.match(regexp);
    if (!matches) {
      return exits.fail();
    }
    return exits.success(matches[0]);

  },
  "identity": "search-using-regexp"
};