module.exports = function(eleventyConfig) {

    // Copy the `assets` directory to `_site`
    eleventyConfig.addPassthroughCopy("_includes/assets");
};
