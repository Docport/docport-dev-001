var Machine = require("machine");
module.exports = {
    post_create: function(req, res) {
        Machine.build({
            inputs: {
                "username": {
                    "example": "foo",
                    "required": true
                },
                "password": {
                    "example": "foo",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // If...and...
                sails.machines['25e1bc31-842d-4f5f-963d-551f8dfad6a4_0.1.0'].Ifand({
                    "tests": [{
                        leftValue: inputs.username,
                        rightValue: sails.config.treeline['username'],
                        comparison: "=="
                    }, {
                        leftValue: inputs.password,
                        rightValue: sails.config.treeline['password'],
                        comparison: "=="
                    }]
                }).setEnvironment({
                    req: req,
                    res: res,
                    sails: sails
                }).exec({
                    "error": function(ifAnd) {
                        return exits.error({
                            data: ifAnd,
                            status: 500
                        });

                    },
                    "pass": function(ifAnd) {
                        // Remember
                        sails.machines['cebb1bbf-8b7f-4447-bfe1-5eae49cfbc28_1.1.0'].Remember({
                            "data": {
                                loggedIn: true
                            }
                        }).setEnvironment({
                            req: req,
                            sails: sails
                        }).exec({
                            "error": function(remember) {
                                return exits.error({
                                    data: remember,
                                    status: 500
                                });

                            },
                            "then": function(remember) {
                                return exits.respond({
                                    data: "/tables",
                                    action: "redirect",
                                    status: 200
                                });

                            }
                        });

                    },
                    "fail": function(ifAnd) {
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
    },
    get_find: function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                return exits.respond({
                    action: "display_view",
                    status: 200,
                    view: "login",
                    data: undefined
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};