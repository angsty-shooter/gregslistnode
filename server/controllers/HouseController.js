import express from "express";
import BaseController from "../utils/BaseController";
import { houseService } from "../services/HouseService";

export class HouseController extends BaseController {
    constructor() {
      super("api/houses");
      this.router
        .get("", this.getAll)
        .get('/:id', this.getOne)
        .post("", this.create)
        .delete('/:id', this.delete)
        .put("/:id", this.edit)
    }
    async edit(req, res, next) {
        try {
          res.send(await houseService.edit(req.params.id, req.body))
        } catch (error) {
          next(error)
        }
      }
      async delete(req, res, next) {
        try {
          res.send(await houseService.delete(req.params.id))
        } catch (error) {
          next(error)
        }
      }
    
        async getAll(req, res, next) {
            try {
                // return res.send({results: await housesService.find(req.query), message: "got the houses"});
                return res.send(await houseService.find(req.query));
        } catch (error) {
          next(error);
        }
      }
    
      async getOne(req, res, next) {
        try {
            return res.send(await houseService.findById(req.params.id));
    } catch (error) {
      next(error);
    }
    }
    
    
        async create(req, res, next) {
            try {
            let house = await houseService.create(req.body)
            res.status(201).send(house);
          } catch (error) {
          next(error);
        }
      }
}