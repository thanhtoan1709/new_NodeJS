
class NewsController {
    index(req,res) {
        res.render('news')
    }
    show(req,res) {
        res.send('hello')
    }
    // Get new slug
}
module.exports =  new NewsController;

