
class SiteController {
    index(req,res) {
        res.render('home')
    }
    search(req,res) {
        res.send('search')
    }
    // Get new slug
}
module.exports =  new SiteController;

