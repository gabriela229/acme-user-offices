$(function(){
  function renderUsers(){
    $.get('/users')
      .then( users => {
        UsersList(users);
      })
    }

    renderUsers();
    UserForm();

  google.maps.event.addDomListener(window, 'load', initialize);

  function renderOffices(){
    $.get('/offices')
      .then( offices => {
        OfficesList(offices);
      })

  }
  renderOffices();


})
