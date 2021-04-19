module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define("feedback", {
      roomID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fTemperature: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fAirQuality: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fHumidity: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  
    return Feedback;
  };