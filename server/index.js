const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
require('dotenv').config()
const morgan = require('morgan') // Middleware que permite ver las peticiones
const app = express();
require('./db/conexion')
const API_rutas = require('./routes/rutas'); // rutas api
const rutas = require('../app/controllers/rutas') // rutas de controlador/vista
//require('../app/public/js/animation')
//const helpers = require('./helpers/helpers')

// Set port
app.set('port', process.env.PORT || 19000)

//Configuracion del motor de vistas handlebars
app.set('views', path.join(__dirname, '../app/view'))
app.engine('.hbs',
    exphbs.create({
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "components"),
        //helpers,
        extname: '.hbs'
    }).engine
)
app.set('view engine', '.hbs')

//Middleware
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }))// Interpreta los datos del form como json
app.use(express.json()) // Recibe json
app.use('/public', express.static(path.join(__dirname, '../app/public')));// archivos staticos
//Rutas
app.use(rutas)
app.use('/api-rest', API_rutas)
/**
 * Puerto en escucha
 */
app.listen(app.get('port'), () => {
    console.log(`Escuchando en el puerto ${app.get('port')}`);
    //console.log(path.join(__dirname,'../app/view'))
})


