const db = require('../database/index');

const { DataTypes } = require('sequelize');

const psycho = db.define("psycho", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_psycho: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_psycho: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    presentation: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    tableName: 'psycho',
    timestamps: false,
    underscored: true
});

module.exports = psycho;

