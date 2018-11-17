const express = require('express');

const router = express.Router();
const ZoneController = require('../controllers/ZoneController');
const controllers = require('../controllers');

/* GET ALL purpose*/
router.get("/:resource", (req, res, next) => {
  const resource = req.params.resource;
  const controller = controllers[resource]

  if (controller == null){
    res.json({
      confirmation: "echec sur la ressource..",
      message: "mauvais adressage de ressource: .." + resource
    })
    return
  }

  controller.find(req.query, (err, results) => {
    if (err){
        res.json({
          confirmation: "Echec de lecture..",
          message: "Introuvable.."
        });

        return
    }

    res.json({
      confirmation: "success",
      results: results
    });
  })
});

/* POST purpose */

router.post("/:resource", (req, res, next) => {
  const resource = req.params.resource;
  const controller = controllers[resource]

  if (controller == null){
    res.json({
      confirmation: "echec sur la ressource..",
      message: "mauvais adressage de ressource: .." + resource
    })
    return
  }

  controller.create(req.body, (err, result) => {
      if (err){
          res.json({
            confirmation: "Echec de creation..",
            message: "point Introuvable.."
          });

          return
      }

      res.json({
        confirmation: "success",
        result: result
      });
    })

});

/* GET AN ID purpose */
router.get("/:resource/:id", (req, res, next) => {
  const resource = req.params.resource;
  const id = req.params.id;

  const controller = controllers[resource]

  if (controller == null){
    res.json({
      confirmation: "echec sur la ressource..",
      message: "mauvais adressage de ressource: .." + resource
    })
    return
  }

  controller.findById(id, (err, result) => {
      if (err){
          res.json({
            confirmation: "Echec de lecture..",
            message: "Introuvable.."
          });

          return
      }

      res.json({
        confirmation: "success",
        result: result
      });
    })
  })


module.exports = router;
