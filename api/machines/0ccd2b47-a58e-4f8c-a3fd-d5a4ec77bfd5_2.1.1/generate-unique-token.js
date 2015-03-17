module.exports = {
  "inputs": {},
  "exits": {
    "error": {
      "example": undefined
    },
    "success": {
      "description": "OK.",
      "example": "1a17d9af25aef464b46481d901ba2005",
      "isDefault": true,
      "type": "string",
      "name": "success",
      "friendlyName": "success"
    }
  },
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    module.exports.rack = module.exports.rack || require('hat').rack();
    exits.success(module.exports.rack());
  },
  "identity": "generate-unique-token"
};