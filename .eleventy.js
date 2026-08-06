const markdownItTaskLists = require("markdown-it-task-lists");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {

    // Copy the `assets` directory to `_site`
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItTaskLists));

    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};
