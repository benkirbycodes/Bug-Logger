import express from "express";
import bugsService from "../services/BugsService";
import notesService from "../services/NotesService";

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      .get("/bugs", this.getAll)
      .get("/bugs/:id", this.getById)
      .get("/bugs/:id/notes", this.getNotesByBugId)
      .post("/bugs", this.createBug)
      .put("/bugs/:id", this.editBug)
      .put("/bugs/:id/notes/:id", this.editNoteByBugId)
      .delete("/bugs/:id", this.closeBug)
      .delete("/bugs/:id/notes/:id", this.deleteNote);
  }

  async getAll(req, res, next) {
    try {
      let data = await bugsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await bugsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getNotesByBugId(req, res, next) {
    try {
      let data = await notesService.getNotesByBugId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async createBug(req, res, next) {
    try {
      let data = await bugsService.createBug(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async editBug(req, res, next) {
    try {
      let data = await bugsService.editBug(req.params.id, req.body);
    } catch (error) {
      next(error);
    }
  }
  async editNoteByBugId(req, res, next) {
    try {
      let data = await notesService.editNoteByBugId(req.params.id, req.body);
    } catch (error) {
      next(error);
    }
  }
  async closeBug(req, res, next) {
    try {
      let data = await bugsService.closeBug(req.params.id);
    } catch (error) {
      next(error);
    }
  }
  //NOTE Below, not sure what ids will be needed, double check
  async deleteNote(req, res, next) {
    try {
      let data = await notesService.deleteNote(req.params.id);
    } catch (error) {
      next(error);
    }
  }
}
