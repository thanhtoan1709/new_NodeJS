const Course = require('../models/Course')
class SiteController {
    async index(req,res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (error) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }
    search(req,res) {
        res.send('search')
    }
    // Get new slug
}
module.exports =  new SiteController;

