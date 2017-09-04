function UsersList(userArr){
  var container = $('#user-list');
  var html = [];
  var options = [];
  $.get('/offices')
    .then( offices => {
      offices.forEach(function(office){
        options.push(
          `<option value="">${office.name}</option>`
        );
      })
    })
   .then( () => {
      userArr.forEach(function(user){
        html.push(`
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

        `);
      })
  })
  .then( () => {
    var $html = `
      <ul class='list-group'>
      ${html.join('')}
      </ul>
      `;
      container.append($html);

  })

}
