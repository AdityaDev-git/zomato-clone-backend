const Resturants = require('../Models/Restaurants.model.js');


exports.filterRestaurants = (req,res)=>{

    let {mealtype, cuision, location, lcost, hcost, page, sort}= req.body;

    // page = page ? page : 1;
    sort = sort ? sort : 1; 
    let Payload = {};
    const itemsPerPage = 2;
    // let startIndex = itemsPerPage * page - itemsPerPage;
    // let endIndex = itemsPerPage * page; 

    if(mealtype){
        Payload['type.mealtype'] = mealtype;
    }
    if(mealtype && cuision){
        Payload['type.mealtype'] = mealtype;
        Payload['Cuision.cuision'] = {$in : cuision };
    }
    if (mealtype && lcost && hcost) { 
        Payload['type.mealtype'] = mealtype;
        Payload['cost'] = {$lte : hcost, $gte : lcost};
    }
    if (mealtype && cuision && lcost && hcost) {
        Payload['type.mealtype'] = mealtype;
        Payload['Cuision.cuision'] = {$in : cuision };
        Payload['cost'] = {$lte : hcost, $gte : lcost};
    }
    if (location) {
        Payload['city'] = location;
    }
    if (location && mealtype) {
        Payload['type.mealtype'] = mealtype;
        Payload['city'] = location;
    }
    if (location && mealtype && cuision) {
        Payload['type.mealtype'] = mealtype;
        Payload['city'] = location;
        Payload['Cuision.cuision'] = {$in : cuision };
    }
    if (location && mealtype && lcost && hcost) {
        Payload['type.mealtype'] = mealtype;
        Payload['city'] = location;
        Payload['cost'] = {$lte : hcost, $gte : lcost};
    }
    if (location && mealtype && cuision && lcost && hcost) {
        Payload['type.mealtype'] = mealtype;
        Payload['city'] = location;
        Payload['Cuision.cuision'] = {$in : cuision };
        Payload['cost'] = {$lte : hcost, $gte : lcost};
    }

    //find
    Resturants.find(Payload).sort({cost:sort})
    .then(response =>{
        const filterResponse = response;
        //respnse.slice(startindex,endindex)
        res.json( filterResponse);
    }) .catch(err =>{
        res.status(400).json({
            error:err
        })
    })
}