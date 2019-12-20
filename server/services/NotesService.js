import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NotesService {
  createNote(body) {
    throw new Error("Method not implemented.");
  }
}

const notesService = new NotesService();
export default notesService;
