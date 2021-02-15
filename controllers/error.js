exports.notFound = (req, res, next) => {
    res.status(404).render('error', {pageTitle: 'Page not found', path: '/404'});
};