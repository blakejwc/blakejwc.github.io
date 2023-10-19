/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {

    // Copy the `assets` directory to `_site`
    eleventyConfig.addPassthroughCopy("css");

    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};
