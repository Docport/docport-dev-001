module.exports.routes = {
  "get /list-users": "List-usersController.find",
  "get /tables": "TablesController.find",
  "get /signup": "SignupController.get_find",
  "post /signup": "SignupController.post_create",
  "post /login": "LoginController.post_create",
  "get /logout": "LogoutController.find",
  "get /": "Home$Controller.find",
  "get /login": "LoginController.get_find",
  "get /tables/:table": "TablesController.$table"
};