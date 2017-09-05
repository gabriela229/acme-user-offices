function seed(User, Office){
  return Promise.all([
    User.create({name: 'Cookie Monster'}),
    User.create({name: 'Elmo'}),
    Office.create({name: 'Fulton St, New York, NY, USA', lat: 40.7100491, lng: -74.007383}),
    Office.create({name: 'Hoboken, NJ, USA', lat: 40.7439905, lng: -74.0323626})
  ])
  // .then( function([CM, Elmo, FultonOffice, HobokenOffice]){
  //   CM.officeId = FultonOffice.id;
  //   Elmo.officeId = HobokenOffice.id;
  // })
}

module.exports = seed;
