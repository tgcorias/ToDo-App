function errorHandler(err, req, res, next){
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  })
}

function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}

module.exports = { errorHandler, boomErrorHandler }
