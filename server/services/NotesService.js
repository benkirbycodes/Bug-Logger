import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../Utils/ApiError";

const _repository = mongoose.model("Note", Note);

class NotesService {
  //NOTE Below, make sure BugId is actually BugId
  async getNotesByBugId(BugId) {
    let data = await _repository.find({ BugId });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }
  async createNote(body) {
    return await _repository.create(body);
  }

  async editNoteByBugId(BugId, body) {
    let data = await _repository.findByIdAndUpdate(BugId, body, { new: true });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }
  async deleteNote(id) {
    let data = await _repository.findByIdAndDelete(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }
}

const notesService = new NotesService();
export default notesService;
