'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Parks", [
       {parkName: 'Central Park', city:'Pheonix', provinceState:'Utah', country:'China', opened: new Date(), size:"big", description:"a really awesome park!!!", createdAt:new Date(), updatedAt: new Date()},
       {parkName: 'Central Park2', city:'Pheonix2', provinceState:'Utah2', country:'China2', opened: new Date(), size:"big2", description:"a really awesome park!!!2", createdAt:new Date(), updatedAt: new Date()}
    ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Parks', null, {});
  }
};
