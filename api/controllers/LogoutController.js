var Machine = require("machine");
module.exports = {
    find: function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Forget
                sails.machines['cebb1bbf-8b7f-4447-bfe1-5eae49cfbc28_1.1.0'].Forget({
                    "keys": ["loggedIn"]
                }).setEnvironment({
                    req: req,
                    sails: sails
                }).exec({
                    "error": function(forget) {
                        return exits.error({
                            data: forget,
                            status: 500
                        });

                    },
                    "then": function(forget) {
                        return exits.respond({
                            data: "/login",
                            action: "redirect",
                            status: 200
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