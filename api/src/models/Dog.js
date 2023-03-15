const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

//entregamos por parametro la instancia de sequelize(database)
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    weight:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    life_span:{
      type:DataTypes.STRING,
      allowNull:false,
    }
  },{
    timestamps: false
  });
};
