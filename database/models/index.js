// 'use strict';
// import mysql2 from 'mysql2';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// if(config.dialect === "mysql"){
//   config.dialectModule = mysql2
// }

// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// //Importar modelos
// import user from './user';
// import team from './team';
// import testimony from './testimony';
// import procedure from './procedure';
// import service from './service';
// import news from './news';
// import content from './content';

// db.User = user(sequelize, Sequelize.DataTypes);
// db.Team = team(sequelize, Sequelize.DataTypes);
// db.Testimony = testimony(sequelize, Sequelize.DataTypes);
// db.Service = service(sequelize, Sequelize.DataTypes);
// db.Procedure = procedure(sequelize, Sequelize.DataTypes);
// db.News = news(sequelize, Sequelize.DataTypes);
// db.Content = content(sequelize, Sequelize.DataTypes);


// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;









// 'use strict';
// import mysql2 from 'mysql2';
// import path from 'path';
// import { Sequelize, DataTypes } from 'sequelize';

// const env = process.env.NODE_ENV || 'development';

// const db = {};

// // Crear instancia de Sequelize con DATABASE_URL y SSL
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'mysql',
//   dialectModule: mysql2,
//   dialectOptions: {
//     ssl: {
//       ca: process.env.MYSQL_CA
//     }
//   },
//   logging: false,
// });

// // Importar modelos (ajusta las rutas y nombres según tus modelos)
// import user from './user';
// import team from './team';
// import testimony from './testimony';
// import procedure from './procedure';
// import service from './service';
// import news from './news';
// import content from './content';

// db.User = user(sequelize, DataTypes);
// db.Team = team(sequelize, DataTypes);
// db.Testimony = testimony(sequelize, DataTypes);
// db.Service = service(sequelize, DataTypes);
// db.Procedure = procedure(sequelize, DataTypes);
// db.News = news(sequelize, DataTypes);
// db.Content = content(sequelize, DataTypes);

// // Asociaciones (si las tienes)
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;




// Modo desarrollo


'use strict';
import mysql2 from 'mysql2';
import { Sequelize, DataTypes } from 'sequelize';

const env = process.env.NODE_ENV || 'development';

const db = {};

let sequelize;

if (env === 'production') {
  // Producción: conecta con Vercel, usa SSL con cert
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    dialectModule: mysql2,
    dialectOptions: {
      ssl: {
        ca: process.env.MYSQL_CA?.replace(/\\n/g, '\n'),
      },
    },
    logging: false,
  });
} else {
  // Desarrollo: conecta sin SSL o con config local
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    dialectModule: mysql2,
    logging: console.log, // ver queries en consola para debug
    // sin ssl en dev, o agrega si quieres
  });
}

// Importar modelos igual que antes
import user from './user';
import team from './team';
import testimony from './testimony';
import procedure from './procedure';
import service from './service';
import news from './news';
import content from './content';

db.User = user(sequelize, DataTypes);
db.Team = team(sequelize, DataTypes);
db.Testimony = testimony(sequelize, DataTypes);
db.Service = service(sequelize, DataTypes);
db.Procedure = procedure(sequelize, DataTypes);
db.News = news(sequelize, DataTypes);
db.Content = content(sequelize, DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
