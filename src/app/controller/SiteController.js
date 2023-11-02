const Course = require('../models/Course')
const {mutipleToObject} = require('../../unti/moongose')
class SiteController {
    async index(req,res,next) {
       
             await Course.find({})
                .then(courses => {
                   
                    res.render('home',{
                    courses: mutipleToObject(courses)});
                    })
                .catch(next)
        
    }
    search(req,res) {
        res.send('search')
    }
    // Get new slug
}
module.exports =  new SiteController;

