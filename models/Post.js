const db = require('./db')

const Post = db.sequelize.define('postagens s', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
       type: db.Sequelize.TEXT
    }

})

module.exports = Post