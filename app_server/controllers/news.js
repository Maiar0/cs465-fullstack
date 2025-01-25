var fs = require('fs');
var sidebar = JSON.parse(fs.readFileSync('./data/sidebar.json', 'utf8'));

/* GET news view */
const news = (req, res) => {                    
    res.render(
      'news', 
      { title: 'Travlr Getaways', sidebar, active_nav: { news: true } }
    );          
};

module.exports = {                               
   news                                           
};
