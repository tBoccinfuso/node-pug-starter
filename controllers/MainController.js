// GET - index
exports.getIndex = (req, res, next) => {
  res.render('index', data = {
    title: 'Home',
    path: '/'
  })
}

// GET - 1
exports.getPage1 = (req, res, next) => {
  res.render('pages/page1', data = {
    title: 'Page 1',
    path: '/1'
  })
}

// GET - 2
exports.getPage2 = (req, res, next) => {
  res.render('pages/page2', data = {
    title: 'Page 2',
    path: '/2'
  })
}