import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NotesService {
  async getAll() {
    return await _repository.find({});
  }
}

const notesService = new NotesService();
export default notesService;
