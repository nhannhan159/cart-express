export default (sequelize, DataTypes) => {
  let Location = sequelize.define('location', {
    postalCode: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Location;
};