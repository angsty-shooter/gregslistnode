import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HouseService {
  async edit(id, body) {
    return await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
  }
  async delete(id) {
    return await dbContext.Houses.findByIdAndDelete(id)
  }
    async find(query = {}) {
    return await dbContext.Houses.find(query)
  }

  async findById(id) {
      const house = await dbContext.Houses.findById(id)
      if (!house) {
      throw new BadRequest("Invalid Id");
    }
    return house;
  }

    async create(newHouse) {
        return await dbContext.Houses.create(newHouse)
    }
}

export const houseService = new HouseService();