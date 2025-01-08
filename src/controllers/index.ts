import Car from '../models/index';

class IndexController {
  private cars: Car[] = [];
  private currentId: number = 1;

  public getCars(req: any, res: any) {
    res.json(this.cars.map(car => car.toJson()));
  }

  public createCar(req: any, res: any) {
    const { make, model } = req.body;
    if (!make || !model) {
      return res.status(400).json({ error: "Make and model are required" });
    }
    const newCar = new Car(this.currentId++, make, model);
    this.cars.push(newCar);
    res.status(201).json(newCar.toJson());
  }
}

export default IndexController;