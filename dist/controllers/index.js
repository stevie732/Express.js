"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../models/index"));
class IndexController {
    constructor() {
        this.cars = [];
        this.currentId = 1;
    }
    getCars(req, res) {
        res.json(this.cars.map(car => car.toJson()));
    }
    createCar(req, res) {
        const { make, model } = req.body;
        if (!make || !model) {
            return res.status(400).json({ error: "Make and model are required" });
        }
        const newCar = new index_1.default(this.currentId++, make, model);
        this.cars.push(newCar);
        res.status(201).json(newCar.toJson());
    }
}
exports.default = IndexController;
