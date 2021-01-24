/**
 * RegController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    reg: async function(req, res){
        if(req.method=="GET"){
            return res.view("reg/form")
        }
        if(req.body.age>=18){
            var result= await Reg.create(req.body).fetch();
            return res.status(201).json(result);
        }else{
            return res.forbidden();
        }
    },

    showAll: async function(req, res){
        var allRecords=await Reg.find();
        return res.json(allRecords);
    }
    
  

};

