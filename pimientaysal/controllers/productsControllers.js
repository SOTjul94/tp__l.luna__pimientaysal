const products = require("../data/products");

module.exports = {
  /*   */
  detailSlug: (req, res) => {
    let product = products.find((product) => product.slug === req.params.slug);

    return res.render("detalleMenu", {
      title: `Product ${product.slug}`,
      product,
    });
  },
};