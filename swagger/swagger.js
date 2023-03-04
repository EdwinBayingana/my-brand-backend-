 import express from "express"
 import swaggerJsdoc from "swagger-jsdoc"
 import swaggerUi from "swagger-ui-express"
 
    // const options: swaggerJsdoc.Options = {
    const options = {
    definition:{
        openapi: "3.0.0",
        info:{
            title: "Zed's API",
            version: "1.0.0"
        },
        components: {
            securitySchemas:{
                jwt:{
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [
            {
                jwt: [],
            }
        ]
    },
    apis: ['../src/routes/*.js', './schemas/*.js'],

 };

 const swaggerSpec = swaggerJsdoc(options)

 export default function swaggerDocs(app, port){
    //Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    //Docs in JSON format 
    app.get('docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    });

    console.log(`Docs are available at http://127.0.0.1:${port}/docs`); 
 } 