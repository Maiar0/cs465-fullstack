/* GET travel view */
const travel = (req, res) => {                    
    res.render('travel', { title: 'Travlr Getaways' ,
      active_nav: {
        travel: true
      } 
    });          
  };
  module.exports = {                               
   travel                                           
  };                                               