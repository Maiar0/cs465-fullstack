const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
    headers: {
      'Accept': 'application/json'
  }
}

const travel = async function(req, res, next) {
  // console.log('TRAVEL CONTROLLER BEGIN');
  await fetch(tripsEndpoint,options)
    .then(res => res.json())
    .then(json => {
      let message = null;
      if(!(json instanceof Array)){
        message = "API lookup error";
        json = [];
      }else{
        if(!json.length){
          messaage = "No trips exist in our database!";
        }
      }
      res.render('travel', { title: 'Travlr Getaways' , trips: json , active_nav: { travel: true } });
    }).catch((err) => res.status(500).send(err.message));
}

  module.exports = {                               
   travel                                           
  };                                               