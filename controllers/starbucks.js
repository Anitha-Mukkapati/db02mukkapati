var Starbucks = require('../models/starbucks');
// List of all starbuckss
exports.starbucks_list = function (req, res) {
    res.send('NOT IMPLEMENTED: starbucks list');
};
// for a specific starbucks.
// for a specific starbucks.
exports.starbucks_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Starbucks.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle starbucks create on POST.
exports.starbucks_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Starbucks();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"starbucks_type":"regular", "quantity":13, "cost":43.56}
    document.coffee_type = req.body.coffee_type;
    document.quantity = req.body.quantity;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle starbucks delete on DELETE.
exports.starbucks_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Starbucks.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle starbucks update form on PUT.
exports.starbucks_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Starbucks.findById( req.params.id)
 // Do updates of properties
 if(req.body.coffee_type)
 toUpdate.coffee_type = req.body.coffee_type;
 if(req.body.quantity) toUpdate.quantity = req.body.quantity;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// List of all starbuckss
exports.starbucks_list = async function (req, res) {
    try {
        theStarbucks = await Starbucks.find();
        res.send(theStarbucks);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.starbucks_view_all_Page = async function (req, res) {
    try {
        theStarbucks = await Starbucks.find();
        res.render('starbucks', {
            title: 'starbucks Search Results',
            results: theStarbucks
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.starbucks_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Starbucks.findById( req.query.id)
    res.render('starbucksdetail',
   { title: 'Starbucks Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a starbucks.
// No body, no in path parameter, no query.
// Does not need to be async
exports.starbucks_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('starbuckscreate', { title: 'starbucks Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a starbucks.
// query provides the id
exports.starbucks_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Starbucks.findById(req.query.id)
    res.render('starbucksupdate', { title: 'starbucks Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.starbucks_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Starbucks.findById(req.query.id)
    res.render('starbucksdelete', { title: 'starbucks Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };