const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('post', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:true
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    likes:{
       type:DataTypes.INTEGER,
       defaultValue:0
    },
    saved:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    postedBy:{
        type:DataTypes.STRING,
        allowNull:false
    }

  });
};



