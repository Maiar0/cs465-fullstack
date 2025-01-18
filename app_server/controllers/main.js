/* GET homepage */
const index = (req, res) => {                    
    res.render('index', { 
      title: 'Express',
      active_nav: {
        index: true
      } 
    });     
  };
  module.exports = {                               
   index                                           
  };                                               