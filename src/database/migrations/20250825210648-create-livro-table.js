'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livro', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      autor: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      ano_publicacao: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      genero: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      preco: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      criado_em: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      atualizado_em: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    await queryInterface.addIndex('livro', ['titulo']);
    await queryInterface.addIndex('livro', ['autor']);
    await queryInterface.addIndex('livro', ['ano_publicacao']);
    await queryInterface.addIndex('livro', ['genero']);
    await queryInterface.addIndex('livro', ['preco']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('livro');
  }
};