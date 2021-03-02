import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CarsService {
  async edit(id, body) {
    return await dbContext.Cars.findByIdAndUpdate(id, body, { new: true })
  }
  async delete(id) {
    return await dbContext.Cars.findByIdAndDelete(id)
  }
    async find(query = {}) {
    return await dbContext.Cars.find(query)
  }

  async findById(id) {
      const car = await dbContext.Cars.findById(id)
      if (!car) {
      throw new BadRequest("Invalid Id");
    }
    return car;
  }

    async create(newCar) {
        return await dbContext.Cars.create(newCar)
    }
}

export const carsService = new CarsService();
