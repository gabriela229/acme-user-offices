function initialize() {

      var input = document.getElementById('address-form');
      var autocomplete = new google.maps.places.Autocomplete(input);

      autocomplete.addListener('place_changed', function() {

        var place = autocomplete.getPlace();
        var name = place.formatted_address;
        var lat = place.geometry.location.lat();
        var lng = place.geometry.location.lng();

        OfficeForm({name: name, lat: lat, lng: lng})

      })
    }

function OfficeForm(obj){

    $.post('/offices', obj)
      .then( office => {
        $('#address-form').val('');
          var container = $('#office-list').find('ul');
          var html = `
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

            `;
          container.append(html);
        });
}
