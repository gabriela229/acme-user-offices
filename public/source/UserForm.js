function UserForm(){
  $('#user-form').on('click', 'button', function(){
    var user = $('#user-form').find('input').val();
    var data = {name: user};
    $.post('/users', data)
      .then((user) => {
        $('#user-form').find('input').val('');
        var container = $('#user-list').find('ul');
        var options = [];
        var html;
        $.get('/offices')
          .then( offices => {
            offices.forEach(function(office){
              options.push(
              `<option value="">${office.name}</option>`
              );
            });
          })
          .then( () => {
            html = `
            <li class='list-group-item'>
            ${user.name}
            <form class='form-group' action="">
            <select class ='form-control' name="" id="">
              ${options.join('')}
            </select>
            </form>
            <form class='form-group' action="">
            <button class='btn btn-warning'>remove</button>
            </form>
            </li>
            `;
            container.append(html);
          })
    })

  })
}
