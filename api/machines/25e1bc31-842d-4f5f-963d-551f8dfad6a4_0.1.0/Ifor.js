module.exports = {
  "inputs": {
    "tests": {
      "id": "436cd194-aadf-4785-a6ca-e55991139981",
      "extendedDescription": "Available comparisons: ==, !=, <, <=, ===, !==, >=, >, in, isUndefined, isNotUndefined, isEmpty, isNotEmpty",
      "friendlyName": "Tests",
      "description": "Array of dictionaries each with \"leftValue\", \"rightValue\" and \"comparison\"",
      "typeclass": "array",
      "required": true
    }
  },
  "exits": {
    "error": {
      "example": undefined
    },
    "pass": {
      "id": "then",
      "friendlyName": "pass",
      "description": "One ore more of the comparisons evaluated to \"true\"."
    },
    "fail": {
      "id": "f508910e-b888-4bdd-87c9-f9c66e65be60",
      "friendlyName": "fail",
      "description": "None of the comparisons evaluated to \"true\".",
      "example": ""
    }
  },
  "defaultExit": "pass",
  "fn": function(inputs, exits, env) {

    if (!_.isArray(inputs.tests)) {
      return exits.error("Tests input is not an array.");
    }

    var success = false;
    var error = false;

    _.each(inputs.tests, function(test) {

      if (success || error) {
        return;
      }

      var variable = test.leftValue;
      var testValue = test.rightValue;
      var comparison = test.comparison;

      try {
        var compareSuccess;
        if (!comparison) {
          comparison = '==';
        }

        switch (comparison) {
          case '==':
            compareSuccess = (variable == testValue);
            break;
          case '===':
            compareSuccess = (variable === testValue);
            break;
          case '>':
            compareSuccess = (variable > testValue);
            break;
          case '<':
            compareSuccess = (variable < testValue);
            break;
          case '>=':
            compareSuccess = (variable >= testValue);
            break;
          case '<=':
            compareSuccess = (variable <= testValue);
            break;
          case '!=':
            compareSuccess = (variable !== testValue);
            break;
          case '!==':
            compareSuccess = (variable !== testValue);
            break;
          case 'in':
            if (!_.isArray(testValue)) {
              return exits.error("Test variable is not an array.");
            }
            compareSuccess = testValue.indexOf(variable) != -1;
            break;
          case 'isUndefined':
            compareSuccess = _.isUndefined(variable);
            break;
          case 'isNotUndefined':
            compareSuccess = !(_.isUndefined(variable));
            break;
          case 'isEmpty':
            compareSuccess = _.isEmpty(variable);
            break;
          case 'isNotEmpty':
            compareSuccess = !(_.isEmpty(variable));
            break;
          default:
            error = "`" + comparison + "` is not a valid comparison.";
        }

        if (compareSuccess) {
          success = true;
        }
      } catch (e) {
        error = e;
        return;
      }
    });

    if (error) {
      return exits.error(error);
    } else if (success) {
      return exits.pass();
    } else {
      return exits.fail();
    }
  },
  "identity": "Ifor"
};