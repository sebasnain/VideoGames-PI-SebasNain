const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plataformas:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    imagen:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lanzamiento:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating:{
      type: DataTypes.DOUBLE,
      allowNull: false,
    }
});
};
