'use strict';
module.exports = fn => {
  if (!(fn instanceof Function)) {
    throw new Error('Must supply a function');
  }
  return (req, res, next) => {
    const routePromise = fn(req, res, next);
    if (routePromise.catch) {
      routePromise.catch(err => next(err));
    }
  }
}
