function OfficesList(officeArr){
  var container = $('#office-list');
  // var html = [];
  container.empty();
  var count = {};
  $.get('/users')
  .then( users => {
    users.forEach(function(user){
      if (count[user.officeId]){
        count[user.officeId]++;
      } else {
      count[user.officeId] = 1
      }
    })
  })
  .then(() => {
      var html = officeArr.reduce(function(memo, office){
          memo += `
            <li class='list-group-item'>
              ${office.name}
              <br>
              <em>${office.lat}</em>
              <br>
              <em>${office.lng}</em>
              <br>
              <p></p>
              <label class='label label-default'>${count[office.id] || 0} User</label>
              <div class='form-group' action="">
                  <button class='btn btn-warning pull-right'>delete</button>
              </div>
              <br clear='all'>
            </li>

          `;
          return memo;
        // });
      }, '');

      var $html = `
      <ul class='list-group'>
      ${html}
      </ul>
      `;

      container.append($html);

  })
}
