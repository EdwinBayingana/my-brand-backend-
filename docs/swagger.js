import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Personal Project',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        jwt: {
          type: 'http',
          scheme: 'bearer',
          in: 'header',
          bearerFormat: 'JWT',
        },
      },
    },
    // security: [
    //   {
    //     jwt: [],
    //   },
    // ],
    swagger: '3.0',
  },
  apis: ['./docs/*.docs.yaml'],
};

const swaggerSpec = swaggerJsdoc(options);

export default function swaggerDocs(app, port) {
  //Swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  //Docs in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}

// import express from 'express';
// import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';

// const options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'Personal Blog',
//       description:
//         'This is a simple CRUD API made with Express and documentated with Swagger',
//       version: '1.0.0',
//     },
//     servers: [
//       {
//         url: 'http://localhost:7000',
//         description: 'Development Server',
//       },
//     ],
//     components: {
//       // !Below are the schemas
//       schemas: {
//         Blogs: {
//           type: 'object',
//           required: ['author', 'title', 'body', 'imageUrl'],
//           properties: {
//             author: {
//               type: 'string',
//               description: 'The author of the blog',
//             },
//             title: {
//               type: 'string',
//               description: 'The title of the blog',
//             },
//             body: {
//               type: 'string',
//               description: 'The body of the blog',
//             },
//             imageUrl: {
//               type: 'string',
//               description: 'The image of the blog',
//             },
//           },
//         },
//         Users: {
//           type: 'object',
//           required: ['email', 'username', 'password', 'isAdmin'],
//           properties: {
//             email: {
//               type: 'string',
//               description: 'The email of the user',
//             },
//             username: {
//               type: 'string',
//               description: 'The username of the user',
//             },
//             password: {
//               type: 'string',
//               description: 'The hashed password of the user',
//             },
//             isAdmin: {
//               type: 'boolean',
//               description: 'The admin status of the user',
//             },
//           },
//         },
//         Messages: {
//           type: 'object',
//           required: ['names', 'email', 'message'],
//           properties: {
//             names: {
//               type: 'string',
//               description: 'The names of the person providing feedback',
//             },
//             email: {
//               type: 'string',
//               description: 'The email of the person providing feedback',
//             },
//             subject: {
//               type: 'string',
//               description: 'The subject of the feedback received',
//             },
//             message: {
//               type: 'string',
//               description: 'The feedback message of the user',
//             },
//           },
//         },
//         Comment: {
//           type: 'object',
//           required: ['names', 'comment'],
//           properties: {
//             names: {
//               type: 'string',
//               description: 'The names of the person providing a comment',
//             },
//             comment: {
//               type: 'string',
//               description: 'The comment provided',
//             },
//           },
//         },
//       },
//       responses: {
//         400: {
//           description: 'Missing Authorization Header',
//           contents: 'application/json',
//         },
//         401: {
//           description: 'Unauthorized',
//           contents: 'application/json',
//         },
//         400: {
//           description: 'The blog was not found',
//           contents: 'application/json',
//         },
//       },
//       securitySchemas: {
//         jwt: {
//           type: 'http',
//           scheme: 'bearer',
//           in: 'header',
//           bearerFormat: 'JWT',
//         },
//       },
//     },
//     security: [
//       {
//         jwt: [],
//       },
//     ],
//     swagger: '3.0',
//   },
//   // apis: ['../src/routes/*.js'],
//   apis: ['../src/routes/*.js', './schemas/*.js'],
// };

// const swaggerSpec = swaggerJsdoc(options);

// function swaggerDocs(app, port) {
//   //Swagger page
//   app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//   //Docs in JSON format
//   app.get('/docs.json', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(swaggerSpec);
//   });
//   const host = process.env.HOST;
//   console.log(`📚 Docs are available at http://${host}:${port}/docs 📚`);
// }

// export default swaggerDocs;
