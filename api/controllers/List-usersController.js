var Machine = require("machine");
module.exports = {
    find: function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Does Session Value Exist?
                sails.machines['cebb1bbf-8b7f-4447-bfe1-5eae49cfbc28_1.1.0'].DoesSessionValueExist_question({
                    "name": "loggedIn"
                }).setEnvironment({
                    req: req,
                    res: res,
                    sails: sails
                }).exec({
                    "error": function(doesSessionValueExist) {
                        return exits.error({
                            data: doesSessionValueExist,
                            status: 500
                        });

                    },
                    "success": function(doesSessionValueExist) {
                        // List User
                        sails.machines['_project_746_0.0.0'].find_user({}).setEnvironment({
                            sails: sails
                        }).exec({
                            "success": function(listUser) {
                                return exits.respond({
                                    data: {
                                        users: listUser
                                    },
                                    action: "display_view",
                                    status: 200,
                                    view: "list-users"
                                });

                            },
                            "error": function(listUser) {
                                return exits.error({
                                    data: listUser,
                                    status: 500
                                });

                            }
                        });

                    },
                    "notSet": function(doesSessionValueExist) {
                        return exits.respond({
                            data: "/login",
                            action: "redirect",
                            status: 500
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};