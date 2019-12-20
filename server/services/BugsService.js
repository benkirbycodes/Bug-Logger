import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }
  getById(id) {
    throw new Error("Method not implemented.");
  }
  createBug(body) {
    throw new Error("Method not implemented.");
  }
  editBug(id, body) {
    throw new Error("Method not implemented.");
  }
  closeBug(id) {
    throw new Error("Method not implemented.");
  }
}

const bugsService = new BugsService();
export default bugsService;
