'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      const { name } = data;
      data.slug = createSlug(name);
    },
  },  
};

function createSlug(str) {
  return str.toLowerCase().replace(/ /g, '-');
}