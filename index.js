const express = require('express'),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Colors = require('./model/color'),
    Product = require('./model/products');
// ----------------------------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/dist')));

// ------------------------------------
mongoose.connect(
    'mongodb+srv://test_ang_user:volonter13@cluster0.ief1o.mongodb.net/ang_db?retryWrites=true&w=majority',

    // 'mongodb+srv://' + process.env.DB_USER +':' + process.env.DB_PASS + '@cluster0.ief1o.mongodb.net/' + process.env.DB_NAME + '?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            return console.log('Mongo connect error is  ' + err);
        }
        console.log('Mongo connected successfully');
    })

// ------------------- POST colors
app.post('/api/colors', (req, res, next) => {
    const newUser = new Colors({
        code: req.body.code,
        color: req.body.color,
        hex: req.body.hex
    });
    newUser.save(function (err) {
        if (err) {
            console.log('newUser save error ' + err);
            return next(err);
        }
    });
})

// ------------------- GET colors
app.get('/api/colors', (req, res, next) => {
    Colors.find({}, function (err, result) {
        if (err) {
            console.log(err.stack)
            return next(err);
        };
        res.status(200).json(result)
    });
});
// ---------------- PUT Colors
app.put('/api/put/:id', (req, res, next) => {
    Colors.updateOne({ _id: req.params.id }, req.body, function (err, result) {
        if (err || result == null) {
            console.log('Error /put ' + err);
            return next(err);
        };
        res.status(200).json(result)
    });
});

// ---------------- DELETE Colors
app.delete('/api/delete/:id', 
(req, res, next) => {
    console.log('api delete is run')
    Colors.findOneAndDelete({ _id: req.params.id }, function (err, result) {
        if (err || result == null) {
            console.log('Error /delete ' + err);
            return next(err);
        };
        res.status(200).json(result)
    }); }
);

// --------------------- get data product 
app.get('/api/products', (req, res, next) => {
    Product.find({}, function (err, result) {
        if (err) {
            console.log(err.stack)
            return next(err);
        };
        res.status(200).json(result)
    });
});

// -------------------------------------------------------
app.use(function (err, req, res, next) {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});

app.get('/*', (req, res, next) => {
    res.header('Content-type', 'text/html');
    res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.get('*', function (req, res) {
    res.status(404).type('text/html');
    res.send("<h1> Not found 404</h1>");
})

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));



