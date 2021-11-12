var starbucks = require('../models/starbucks');

// List of all starbucks
exports.starbucks_list = async function (req, res) {
    try {
        thestarbucks = await starbucks.find();
        res.send(thestarbucks);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific starbucks. 
exports.starbucks_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await starbucks.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle starbucks create on POST. 
exports.starbucks_create_post =  async function(req, res) {
    console.log(req.body)
    let document = new starbucks();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"starbucks_type":"goat", "cost":12, "quantity":"large"}
    document.coffee_type = req.body.coffee_type;
    document.cost = req.body.cost;
    document.quantity = req.body.quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// Handle starbucks delete form on DELETE. 
exports.starbucks_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: starbucks delete DELETE ' + req.params.id);
};

// Handle starbucks update form on PUT. 
exports.starbucks_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: starbucks update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.starbucks_view_all_Page = async function (req, res) {
    try {
        thestarbucks = await starbucks.find();
        res.render('starbucks', { title: 'starbucks Search Results', results: thestarbucks });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.starbucks_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await starbucks.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.starbucks_type)  
               toUpdate.starbucks_type = req.body.starbucks_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 