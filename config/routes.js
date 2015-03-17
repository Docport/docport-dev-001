module.exports.routes = {
  "post /signup": "SignupController.create",
  "get /tables": "TablesController.find",
  "post /login": "LoginController.post_create",
  "get /logout": "LogoutController.find",
  "get /": "Home$Controller.find",
  "get /login": "LoginController.get_find",
  "get /tables/:table": "TablesController.$table"
};