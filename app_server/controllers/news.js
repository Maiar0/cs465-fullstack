/* GET news view */
const news = (req, res) => {                    
    res.render('news', { title: 'Travlr Getaways' ,
      active_nav: {
        news: true
      } 
    });          
  };
  module.exports = {                               
   news                                           
  };                                               