/* GET contact view */
const contact = (req, res) => {                    
    res.render('contact', { title: 'Travlr Getaways' ,
      active_nav: {
        cotnact: true
      } 
    });          
  };
  module.exports = {                               
   contact                                           
  };                                               