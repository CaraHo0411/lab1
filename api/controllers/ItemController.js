/**
 * ItemController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    items: async function(req, res){

        var items= await Item.find();

        return res.view("item/items",{items: items});

     

    },
    item: async function(req,res){
        if(!req.session.item1){
            req.session.item1 = req.params.id
            return res.ok();
        } else if(!req.session.item2) {
            req.session.item2=req.params.id
            return res.ok();
        } else if (!req.session.item3) {
            req.session.item3=req.params.id
            return res.ok();
        } else{
            return res.status(409).json("Shopping cart full");
        }
            
    },

    cart: async function (req, res){
        var item1= await Item.findOne(req.session.item1 ||-1);
        var item2= await Item.findOne(req.session.item2 ||-1);
        var item3= await Item.findOne(req.session.item3 ||-1);

        return res.view("item/cart", {item1: item1, item2:item2, item3: item3});
    }

  

};

