// Get the token from localStorage
const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
function get_auth(){
  if(token && user){
    return {
      token: token,
      user: user
    }
  }
  return false;
}