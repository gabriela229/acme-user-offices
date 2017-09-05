function user(user){
  var container = $('#user-list').find('ul');
  var options = user.options;
  // console.log(user, 'options')
  var html = `
      <li class='list-group-item'>
      ${user.name}
      <div class='form-group' action="">
      <select class ='form-control' name="" id="" data-user-id=${user.id}>
        <option value="">-- none--</option>
        ${options}
      </select>
      </div>
      <div class='form-group' action="">
      <button class='btn btn-warning'>remove</button>
      </div>
      </li>
      `;
      container.append(html);

}
