const sequelize = require('../../../config/configDB');
const { DataTypes } = require('sequelize');

const LivroModel = sequelize.define('LivroModel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            isInt: {
                msg: 'O ID deve ser um número inteiro'
            },
            min: {
                args: [1],
                msg: 'O is deve ser maior que zero'
            }
        }
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            len: {
                args: [2, 200]
            }
        }
    },
    autor: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ano_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }

},
    {
        tableName: 'livro',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    });

module.exports = LivroModel;