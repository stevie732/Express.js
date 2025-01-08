"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const routes = (0, express_1.Router)();
const controller = new controllers_1.default();
routes.get('/cars', controller.getCars.bind(controller));
routes.post('/cars', controller.createCar.bind(controller));
exports.default = routes;
