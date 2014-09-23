"use strict";
var controller = require("./macros/controller")["default"] || require("./macros/controller");
var arrayController = require("./macros/array-controller")["default"] || require("./macros/array-controller");
var objectController = require("./macros/object-controller")["default"] || require("./macros/object-controller");

exports.controller = controller;
exports.arrayController = arrayController;
exports.objectController = objectController;