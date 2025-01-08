"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(id, make, model) {
        this.id = id;
        this.make = make;
        this.model = model;
    }
    static fromJson(json) {
        return new Car(json.id, json.make, json.model);
    }
    toJson() {
        return {
            id: this.id,
            make: this.make,
            model: this.model
        };
    }
}
exports.default = Car;
