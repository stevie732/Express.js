class Car {
  id: number;
  make: string;
  model: string;

  constructor(id: number, make: string, model: string) {
    this.id = id;
    this.make = make;
    this.model = model;
  }

  static fromJson(json: any): Car {
    return new Car(json.id, json.make, json.model);
  }

  toJson(): any {
    return {
      id: this.id,
      make: this.make,
      model: this.model
    };
  }
}

export default Car;