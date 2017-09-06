$(function(){
  function renderUsers(){
    $.get('/users')
      .then( users => {
        renderOfficeOptions()
        .then( options =>{
          users.forEach(function(user){
               user.options = options;
          })
        })
        .then( () => {
          UsersList(users);
          renderSelectedOffices();
        })
      })

  }

  function renderSelectedOffices(){
    $.get('/users')
      .then( users => {
        users.forEach(function(user){

          $('#user-list').find('select').each(function(ind, select){
            if ( $(select).attr('data-user-id')*1 === user.id){
              $(select).find('option').each(function(ind, option){
                if ($(option).val()*1 === user.officeId){
                  $(option).prop('selected', 'selected');
                }

              })
            }
          })
        })
      })
  }

  renderUsers();

  google.maps.event.addDomListener(window, 'load', initialize);

  function renderOffices(){
    $.get('/offices')
      .then( offices => {
        OfficesList(offices);
      })

  }
  renderOffices();

  function UsersAndOptions(){
    renderOfficeOptions()
    renderUsers()
  }

  function initialize() {
    var input = document.getElementById('address-form');
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function() {

      var place = autocomplete.getPlace();
      var name = place.formatted_address;
      var lat = place.geometry.location.lat();
      var lng = place.geometry.location.lng();

      addOffice({name: name, lat: lat, lng: lng})
      .then( office => {
        renderUsers()
        OfficeForm(office);
      })

    })
  }

  function addOffice(officeObj){
    return $.post('/offices', officeObj)
    .then( office => {
      return office;
    })
  }


  function renderOfficeOptions(){
    return $.get('/offices')
    .then( offices => {
     return offices.reduce(function(memo, office){
        memo +=
        `<option value="${office.id}">${office.name}</option>`;
        return memo;
      }, '');

    })
    .then( options => {
      return options;
    });
  }

  function addUser(data){
    return $.post('/users', data)
    .then((user) => {
      return user;
    })
  }

  function renderUser(){
      var userName = $('#user-form').find('input').val();
      var data = {name: userName};
      addUser(data)
      .then( (usr) => {
        $('#user-form').find('input').val('');
        renderOfficeOptions()
          .then( options => {
            usr.options = options;
            user(usr)

          })
      })


  }
  $('#user-form').on('click', 'button', function(){
      renderUser();
  })

  function updateUser(id){
    var officeId = $(`select[data-user-id='${id}']`).find('option:selected').val();
    $.ajax({
      url: `/users/${id}`,
      method: 'PUT',
      data: {officeId: officeId}
    })
    .then( () => {
      console.log('here')
      renderOffices();
    });
  }

  $('#user-list').on('change', 'select', function(){

    updateUser($(this).attr('data-user-id'));
  })


  function deleteUser(id){
    $.ajax({
      url: `/users/${id}`,
      type: 'DELETE'
    })
    .then( () => {
      renderUsers();
      renderOffices()
    })
  }

  $('#user-list').on('click', 'button', function(){
    deleteUser($(this).parent().siblings()
    .find('select')
    .attr('data-user-id'));
  })

  function deleteOffice(id){
    $.ajax({
      url: `/offices/${id}`,
      type: 'DELETE'
    })
    .then( () => {
      renderOfficeOptions();
      renderOffices();
    })
  }

  $('#office-list').on('click', 'button', function(){
    deleteOffice($(this).parent().parent()
    .attr('data-office-id'));
  })
});
