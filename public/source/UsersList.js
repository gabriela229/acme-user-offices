function UsersList(userArr){
  var container = $('#user-list');
  container.empty();
  var html = [];
  userArr.forEach(function(user){
    html.push(`
    <li class='list-group-item'>
    ${user.name}
    <div class='form-group'>
    <select class ='form-control' data-user-id=${user.id} name="" id="">
    <option value="">-- none--</option>
      ${user.options}
    </select>
    </div>
    <div class='form-group'>
    <button class='btn btn-warning'>remove</button>
    </div>
    </li>

    `);

  })

    var $html = `
      <ul class='list-group'>
      ${html.join('')}
      </ul>
      `;
      container.append($html);



}
