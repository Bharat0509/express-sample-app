// Creating Tokens
import Cookies from 'js-cookie'

const sendToken = (user, statusCode, res) => {

  const token = user.getJWTToken()
  console.log(token);
  //undefinded aa raha hai
  // options for cookie
    const options = {
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite:"None",

  }
  user = {...user._doc, token}
  Cookies.set('name', 'value', {...options})
  return res.cookie('token', token, options).status(statusCode).json({
    success: true,
   user})
}

export default sendToken
