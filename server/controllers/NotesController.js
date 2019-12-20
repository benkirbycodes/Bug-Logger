import express from "express";
import notesService from "../services/NotesService";

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      .post("", this.createNote)
      .delete("/:id", this.deleteNote);
  }

  //NOTE Below, does it need bug id?
  async createNote(req, res, next) {
    try {
      let data = await notesService.createNote(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async deleteNote(req, res, next) {
    try {
      let data = await notesService.deleteNote(req.params.id);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
}
