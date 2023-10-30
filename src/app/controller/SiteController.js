const Course = require('../models/Course')
class SiteController {
    async index(req,res,next) {
       
            const courses = await Course.find({})
                .then(courses => res.render('home',{
                    courses
                }))
                .catch(next)
        
    }
    search(req,res) {
        res.send('search')
    }
    // Get new slug
}
module.exports =  new SiteController;

