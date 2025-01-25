var fs = require('fs');
var places = JSON.parse(fs.readFileSync('./data/places.json','utf8'));

/* GET rooms view */
const rooms = (req, res) => {                    
    res.render(
      'rooms', 
      { title: 'Travlr Getaways' , places, active_nav: { rooms: true } }
    );          
  };
  module.exports = {                               
   rooms                                           
  };                                               