// Creating Tokens
const sendToken = (user, statusCode, res) => {

  const token = user.getJWTToken()
  console.log(token);
  // options for cookie
  const options = {
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    httpOnly: true
  }
  user = {...user._doc, token}
  return res.status(statusCode).cookie('token', token, options).json({
    success: true,
   user})
}

export default sendToken
