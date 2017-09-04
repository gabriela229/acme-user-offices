function OfficesList(officeArr){
  var container = $('#office-list');
  var html = [];
  officeArr.forEach(function(office){
    html.push(`
      <li class='list-group-item'>
        ${office.name}
        <br>
        <em>${office.lat}</em>
        <br>
        <em>${office.lng}</em>
        <br>
        <p></p>
        <label class='label label-default'>0 User</label>
        <form class='form-group' action="">
            <button class='btn btn-warning pull-right'>delete</button>
        </form>
        <br clear='all'>
      </li>

    `);
  });

var $html = `
  <ul class='list-group'>
  ${html.join('')}
  </ul>
  `;

  container.append($html);
}
