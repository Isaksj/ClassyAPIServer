module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
      roomName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sTemperature: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sAirQuality: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sHumidity: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  
    return Room;
  };