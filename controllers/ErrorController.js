// 404 page render
exports.get404 = (req, res, next) => {
  res.status(404).render('404', data = {
      title: '404 - Page Not Found!'
  });
}