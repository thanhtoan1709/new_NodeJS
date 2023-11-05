const Course = require('../models/Course')
const {moongoseToObject} = require('../../unti/moongose')
class CoursesController {
    // Get new slug
    show(req,res,next) {
        
        Course.findOne({ slug : req.params.slug})
        .then(course => {
            res.render('courses/show',{course : moongoseToObject(course) })
        })
        .catch(next)
    }
    // GET courses/create
    create(req,res,next) {
        res.render('courses/create')    
    }
    // POST courses/store
    
    store(req,res,next) {
    const formData = req.body;
    const course = new Course(formData);
    course.save()
        .then(() => res.redirect('/'))
        .catch(error => next(error));
        
    }
}
module.exports =  new CoursesController;

