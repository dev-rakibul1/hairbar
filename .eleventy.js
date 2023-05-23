module.exports = function (eleventyConfig) {
  // CSS file config
  eleventyConfig.addPassthroughCopy("./src/css/animate.min.css");
  eleventyConfig.addPassthroughCopy("./src/css/aos.css");
  eleventyConfig.addPassthroughCopy("./src/css/bootstrap.min.css");
  eleventyConfig.addPassthroughCopy("./src/css/font-awesome.min.css");
  eleventyConfig.addPassthroughCopy("./src/css/jquery.fancybox.css");
  eleventyConfig.addPassthroughCopy("./src/css/nice-select.css");
  eleventyConfig.addPassthroughCopy("./src/css/owl.carousel.min.css");
  eleventyConfig.addPassthroughCopy("./src/css/owl.theme.default.min.css");
  eleventyConfig.addPassthroughCopy("./src/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/style.css");

  // javascript file config
  eleventyConfig.addPassthroughCopy("./src/js/aos-inital.js");
  eleventyConfig.addPassthroughCopy("./src/js/aos.js");
  eleventyConfig.addPassthroughCopy("./src/js/bootstrap.bundle.min.js");
  eleventyConfig.addPassthroughCopy("./src/js/isotope.js");
  eleventyConfig.addPassthroughCopy("./src/js/jquery-3.4.1.min.js");
  eleventyConfig.addPassthroughCopy("./src/js/jquery.fancybox.min.js");
  eleventyConfig.addPassthroughCopy("./src/js/jquery.nicescroll.min.js");
  eleventyConfig.addPassthroughCopy("./src/js/main.js");
  eleventyConfig.addPassthroughCopy("./src/js/nice-select.js");
  eleventyConfig.addPassthroughCopy("./src/js/owl.carousel.min.js");

  // images config
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addPassthroughCopy("./src/admin/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
