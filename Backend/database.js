const { createPool } = require('mysql');

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loginReact',
    connectionLimit: 10
})
export const pool;
// export default pool;

// pool.query(`select * from accounts where id=?`, [2], (err, result, fields) => {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// });