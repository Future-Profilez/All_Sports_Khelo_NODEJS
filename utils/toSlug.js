const toSlug = (str) => {
    if (str) {
      return str
        .toLowerCase()
        .trim()
        .normalize("NFD")                 // split accented letters
        .replace(/[\u0300-\u036f]/g, "")  // remove accents
        .replace(/[^a-z0-9]+/g, "-")      // remove non-alphanumerics
        .replace(/^-+|-+$/g, "");         // trim hyphens
    } else {
      return ''
    }
  };

module.exports = { toSlug };