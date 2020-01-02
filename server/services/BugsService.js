import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../Utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    console.log("From Get All");
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

  async editBug(id, update) {
    console.log(update);
    console.log(id);
    let data = await _repository.findOneAndUpdate(
      { _id: id, closed: false },
      update,
      {
        new: true
      }
    );
    console.log(data);

    if (!data) {
      throw new ApiError("Cannot Edit A Closed Bug", 400);
    }
    return data;
  }
  async closeBug(id) {
    let data = await _repository.findByIdAndUpdate(id, { closed: true });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const bugsService = new BugsService();
export default bugsService;
