import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../Utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }
  async createBug(body) {
    return await _repository.create(body);
  }

  async editBug(id, body) {
    let data = await _repository.findByIdAndUpdate(id, body, { new: true });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
  async closeBug(id) {
    let data = await _repository.findByIdAndDelete(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const bugsService = new BugsService();
export default bugsService;
