var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
    Chocolate = require('../model/chocolates')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))
//build the REST operations at the base for blobs
//this will be accessible from http://127.0.0.1:3000/blobs if the default route for / is left unchanged
router.route('/chocolates')
  //GET all blobs
  .get(function(req, res, next) {
      //retrieve all blobs from Monogo
    mongoose.model('Chocolate').find(function (err, chocolates) {
      if (err) {
        return console.error(err);
      } else {
      	console.log('GET getting all the chocolates whoohoo ');
        res.json(chocolates);
      }     
    });
  })
  //POST a new blob
  .post(function(req, res) {
    // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    var chocolate = new Chocolate();
    chocolate.company = req.body.company;
    chocolate.name = req.body.name;
    chocolate.beanOrigin = req.body.beanOrigin;
    chocolate.ingredients = req.body.ingredients;
    chocolate.percentage = req.body.percentage;
    chocolate.variety = req.body.variety;
    chocolate.rating = req.body.rating;
    chocolate.notes = req.body.notes;
    chocolate.img = req.body.img;
    //call the create function for our database
    chocolate.save(function (err, chocolate) {
      if (err) {
          res.send("There was a problem adding the information to the database.");
      } else {
          //Blob has been created
        console.log('POST creating new chocolate nomnom: ' + chocolate);
        res.json(chocolate);
      }
    });
  })


router.route('/chocolates/:chocolate_id')
	.get(function(req, res) {
		Chocolate.findById(req.params.chocolate_id, function(err, chocolate) {
			if (err) {
				res.send(err)
			} else {
				res.json(chocolate)
			}
		})
	})
	.put(function(req, res) {
		Chocolate.findById(req.params.chocolate_id, function(err, chocolate) {
			if (err) {
				res.send(err)
			} else {
				chocolate.company = req.body.company;
        chocolate.name = req.body.name;
        chocolate.beanOrigin = req.body.beanOrigin;
        chocolate.ingredients = req.body.ingredients;
        chocolate.percentage = req.body.percentage;
        chocolate.variety = req.body.variety;
        chocolate.rating = req.body.rating;
        chocolate.notes = req.body.notes;
        chocolate.img = req.body.img;

        chocolate.save(function(err) {
        	if (err) {
        		res.send(err)
        	} else {
        		res.json(chocolate)
        	}
        })
			}
		})
	})
	.delete(function(req, res) {
		Chocolate.remove({
			_id: req.params.chocolate_id
		}, function(err, chocolate) {
			if (err) {
				res.send(err)
			} else {
				res.json({message: 'deleted', item: chocolate})
			}
		})
	})

module.exports = router;