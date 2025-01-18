/* GET rooms view */
const rooms = (req, res) => {                    
    res.render('rooms', { title: 'Travlr Getaways' ,
      active_nav: {
        rooms: true
      } 
    });          
  };
  module.exports = {                               
   rooms                                           
  };                                               