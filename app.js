// Host location
const host = 'http://localhost:8000';


function logout() {
  localStorage.removeItem('user');
  $.ajax({
    url: host + '/api/logout',
    type: 'POST',
    headers: {
      Authorization: 'Bearer ' + token
    },
    success: function(response) {
      localStorage.removeItem('token');
      window.location.href = 'index.html';
    }
  });
}