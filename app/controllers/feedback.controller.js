const db = require("../models");
const Feedback = db.feedbacks;
const Op = db.Sequelize.Op;

// Create and Save a new Feedback
exports.create = (req, res) => {
  console.log('create: ' + req);
  // Validate request
  if (!1==1) {
    console.log('yes no comply');
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Feedback
  const feedback = {
    roomID: req.body.roomID,
    fTemperature: req.body.fTemperature,
    fAirQuality: req.body.fAirQuality,
    fHumidity: req.body.fHumidity
  };

  // Save feedback in the database
  Feedback.create(feedback)
    .then(data => {
        console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the feedback."
      });
    });
};

// Retrieve all Feedbacks from the database.
exports.findAll = (req, res) => {
    const feedbackName = req.query.feedbackName;
    var condition = feedbackName ? { feedbackName: { [Op.like]: `%${feedbackName}%` } } : null;
  
    Feedback.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving feedbacks."
        });
      });
  
};

// Find a single Feedback with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Feedback.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Feedback with id=" + id
        });
      });
  
};

// Update a Feedback by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Feedback.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Feedback was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Feedback with id=${id}. Maybe Feedback was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Feedback with id=" + id
        });
      });
  
};

// Delete a Feedback with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Feedback.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Feedback was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Feedback with id=${id}. Maybe Feedback was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Feedback with id=" + id
        });
      });
  
};

// Delete all Feedbacks from the database.
exports.deleteAll = (req, res) => {
    Feedback.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Feedbacks were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all feedbacks."
          });
        });
    
};

// Find all published Feedbacks
exports.findAllPublished = (req, res) => {
    Feedback.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving feedbacks."
      });
    });

};