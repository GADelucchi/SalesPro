// Imports
const { logger } = require('../config/logger');
const { RouterClass } = require('./routerClass');

// Code
class ViewRouter extends RouterClass {
    init() {
        this.get('/', ['PUBLIC'], async (req, res) => {
            res.render('home')
        })

        this.get('/login', ['PUBLIC'], async (req, res) => {
            res.render('login')
        })

        this.get('/register', ['PUBLIC'], async (req, res) => {
            res.render('registerForm', {
                style: 'index.css'
            })
        })

        // this.get('/chat', ['USER', 'PREMIUM', 'ADMIN'], async (req, res) => {
        //     try {
        //         const messages = await messageService.getMessages()

        //         res.render('message', {})
        //     } catch (error) {
        //         logger.error(error)
        //     }
        // })
    }
}

// Export
module.exports = ViewRouter