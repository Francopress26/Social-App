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
    liked:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    },
    likedBy: { 
      type: DataTypes.TEXT, 
      defaultValue:null,
      get() {
          return JSON.parse(this.getDataValue('likedBy'));
      }, 
      set(val) {
          return this.setDataValue('likedBy', JSON.stringify(val));
      }
    },
    comments: { 
      type: DataTypes.STRING, 
      defaultValue:null,

      get() {
          return JSON.parse(this.getDataValue('comments'));
      }, 
      set(val) {
          return this.setDataValue('comments', JSON.stringify(val));
      }
  },
    postedBy:{
        type:DataTypes.STRING,
        allowNull:false
    },
    profilePic:{
      type:DataTypes.STRING,
      allowNull:false
    }

  });
};



