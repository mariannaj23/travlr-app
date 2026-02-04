const index = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways',
    tagline: 'Welcome to Travlr Getaways'
  });
};

const travel = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    tagline: 'Explore our travel packages'
  });
};

const about = (req, res) => {
  res.render('about', {
    title: 'Travlr Getaways',
    tagline: 'About Travlr',
    features: [
      'Curated travel experiences',
      'Personalized itineraries',
      'Trusted travel partners'
    ]
  });
};

module.exports = {
  index,
  travel,
  about
};