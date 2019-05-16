module.exports = (app)=>{

    app.get('/users', (req, res) => {
        
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
            users:[{
                name: 'Bruno Romeo',
                email: 'contato@hbrunoromeo.com.br',
                id: 1
            }]
        });
    });    

    app.post('/users', (req, res) => {
        
        res.json(req.body);

    });  

};