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
                        // List tables
                        sails.machines['6edbad64-fa7f-4121-832d-7b636cae7f50_0.3.1'].listTables({
                            "connectionUrl": sails.config.treeline['connectionUrl']
                        }).exec({
                            "error": function(listTables) {
                                return exits.error({
                                    data: listTables,
                                    status: 500
                                });

                            },
                            "couldNotConnect": function(listTables) {
                                return exits.respond({
                                    action: "respond_with_status",
                                    status: 500
                                });

                            },
                            "success": function(listTables) {
                                return exits.respond({
                                    data: {
                                        tables: listTables
                                    },
                                    action: "display_view",
                                    status: 200,
                                    view: "tables"
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
    },
    $table: function(req, res) {
        Machine.build({
            inputs: {
                "table": {
                    "example": "abc123",
                    "required": true
                },
                "limit": {
                    "example": 12,
                    "required": true
                },
                "skip": {
                    "example": 30,
                    "required": true
                },
                "sort": {
                    "example": "[{\"columnName\": \"direwolves\", direction: 1}]",
                    "required": true
                }
            },
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
                        // Describe table
                        sails.machines['6edbad64-fa7f-4121-832d-7b636cae7f50_0.3.1'].describeTable({
                            "connectionUrl": sails.config.treeline['connectionUrl'],
                            "table": inputs.table
                        }).exec({
                            "error": function(describeTable) {
                                return exits.error({
                                    data: describeTable,
                                    status: 500
                                });

                            },
                            "couldNotConnect": function(describeTable) {
                                return exits.respond({
                                    action: "respond_with_status",
                                    status: 500
                                });

                            },
                            "invalidTable": function(describeTable) {
                                return exits.respond({
                                    action: "respond_with_status",
                                    status: 500
                                });

                            },
                            "success": function(describeTable) {
                                // Count records
                                sails.machines['6edbad64-fa7f-4121-832d-7b636cae7f50_0.3.1'].countRecords({
                                    "connectionUrl": sails.config.treeline['connectionUrl'],
                                    "table": inputs.table
                                }).exec({
                                    "error": function(countRecords) {
                                        return exits.error({
                                            data: countRecords,
                                            status: 500
                                        });

                                    },
                                    "couldNotConnect": function(countRecords) {
                                        return exits.respond({
                                            action: "respond_with_status",
                                            status: 500
                                        });

                                    },
                                    "invalidCollection": function(countRecords) {
                                        return exits.respond({
                                            action: "respond_with_status",
                                            status: 500
                                        });

                                    },
                                    "success": function(countRecords) {
                                        // Is it defined?
                                        sails.machines['0ccd2b47-a58e-4f8c-a3fd-d5a4ec77bfd5_2.1.1'].Isitdefined_question({
                                            "value": inputs.sort
                                        }).exec({
                                            "error": function(isItDefined) {
                                                return exits.error({
                                                    data: isItDefined,
                                                    status: 500
                                                });

                                            },
                                            "fail": function(isItDefined) {
                                                // List records
                                                sails.machines['6edbad64-fa7f-4121-832d-7b636cae7f50_0.3.1'].listRecords({
                                                    "connectionUrl": sails.config.treeline['connectionUrl'],
                                                    "table": inputs.table,
                                                    "schema": describeTable,
                                                    "limit": inputs.limit,
                                                    "skip": inputs.skip
                                                }).exec({
                                                    "error": function(listRecords2) {
                                                        return exits.error({
                                                            data: listRecords2,
                                                            status: 500
                                                        });

                                                    },
                                                    "couldNotConnect": function(listRecords2) {
                                                        return exits.respond({
                                                            action: "respond_with_status",
                                                            status: 500
                                                        });

                                                    },
                                                    "invalidCollection": function(listRecords2) {
                                                        return exits.respond({
                                                            action: "respond_with_status",
                                                            status: 500
                                                        });

                                                    },
                                                    "success": function(listRecords2) {
                                                        return exits.respond({
                                                            data: {
                                                                records: listRecords2,
                                                                table: inputs.table,
                                                                count: countRecords
                                                            },
                                                            action: "display_view",
                                                            status: 200,
                                                            view: "records"
                                                        });

                                                    }
                                                });

                                            },
                                            "success": function(isItDefined) {
                                                // Parse JSON
                                                sails.machines['0ccd2b47-a58e-4f8c-a3fd-d5a4ec77bfd5_2.1.1'].parseJson({
                                                    "json": isItDefined,
                                                    "schema": [{
                                                        columnName: "foo",
                                                        direction: 1
                                                    }]
                                                }).exec({
                                                    "error": function(parseJSON) {
                                                        return exits.error({
                                                            data: parseJSON,
                                                            status: 500
                                                        });

                                                    },
                                                    "couldNotParse": function(parseJSON) {
                                                        return exits.respond({
                                                            action: "respond_with_status",
                                                            status: 500
                                                        });

                                                    },
                                                    "success": function(parseJSON) {
                                                        // List records
                                                        sails.machines['6edbad64-fa7f-4121-832d-7b636cae7f50_0.3.1'].listRecords({
                                                            "connectionUrl": sails.config.treeline['connectionUrl'],
                                                            "table": inputs.table,
                                                            "schema": describeTable,
                                                            "limit": inputs.limit,
                                                            "skip": inputs.skip,
                                                            "sort": parseJSON
                                                        }).exec({
                                                            "error": function(listRecords) {
                                                                return exits.error({
                                                                    data: listRecords,
                                                                    status: 500
                                                                });

                                                            },
                                                            "couldNotConnect": function(listRecords) {
                                                                return exits.respond({
                                                                    action: "respond_with_status",
                                                                    status: 500
                                                                });

                                                            },
                                                            "invalidCollection": function(listRecords) {
                                                                return exits.respond({
                                                                    action: "respond_with_status",
                                                                    status: 500
                                                                });

                                                            },
                                                            "success": function(listRecords) {
                                                                return exits.respond({
                                                                    data: {
                                                                        records: listRecords,
                                                                        table: inputs.table,
                                                                        count: countRecords
                                                                    },
                                                                    action: "display_view",
                                                                    status: 200,
                                                                    view: "records"
                                                                });

                                                            }
                                                        });

                                                    }
                                                });

                                            }
                                        });

                                    }
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