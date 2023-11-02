

module.exports = { 
    mutipleToObject: function (moongose) {
        return moongose.map(moongose => moongose.toObject())

 },
    moongoseToObject : function (moongose) {
        return moongose ? moongose.toObject() : moongose;
        
    }
};