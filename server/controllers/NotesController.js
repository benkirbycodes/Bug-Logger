import express from "express";
import notesService from "../services/NotesService";

export default class NotesController {
  constructor() {
    this.router = express.Router().post("/notes", this.createNote);
  }

  //NOTE Below, does it need bug id?
  async createNote(req, res, next) {
    try {
      let res = await notesService.createNote(req.body);
    } catch (error) {
      next(error);
    }
  }
}
