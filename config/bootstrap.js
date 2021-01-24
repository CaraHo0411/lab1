/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  await Item.createEach(
    [{ "id": 1, "product": "Trilipix" },
  { "id": 2, "product": "Australian Gold" },
  { "id": 3, "product": "azithromycin" },
  { "id": 4, "product": "PROMETHAZINE DM" },
  { "id": 5, "product": "PROLONG 101" },
  { "id": 6, "product": "Pollens - Grasses, Brome, Smooth Bromus inermis" },
  { "id": 7, "product": "Chemstar Antibac" },
  { "id": 8, "product": "Phenytoin Sodium" },
  { "id": 9, "product": "Lorazepam" },
  { "id": 10, "product": "Gabapentin" }])

};
