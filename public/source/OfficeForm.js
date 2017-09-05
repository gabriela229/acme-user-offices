function OfficeForm(office){
  $('#address-form').val('');
  var container = $('#office-list').find('ul');

  var count = 0;
  $.get('/users')
  .then( users => {
    users.forEach(function(user){
      if (user.officeId === office.id){
        count++;
      }
    })
  })
  .then( () => {
  var html = `
      <li class='list-group-item'>
        ${office.name}
        <br>
        <em>${office.lat}</em>
        <br>
        <em>${office.lng}</em>
        <br>
        <p></p>
        <label class='label label-default'>${count} User</label>
        <form class='form-group' action="">
            <button class='btn btn-warning pull-right'>delete</button>
        </form>
        <br clear='all'>
      </li>

    `;
  container.append(html);
  })

}
