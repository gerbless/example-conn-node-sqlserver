const sql = require('mssql');

const test_conn_mssql = async () => {
    try {
        const sqlConfigLocal = {
            user: "sa",
            password: "<insertar pass>",
            server: "localhost",
            database: "test",
            options: {
                encrypt: false, // true cuando es azure
                trustServerCertificate: true, // true en caso de que sea una BD local
                trustedConnection: true
              }
        };
        const sqlConfigCloud = {
            user: "",
            password: "",
            server: "",
            database: "",
            options: {
                encrypt: false, // true cuando es azure
                trustServerCertificate: false // true en caso de que sea una BD local
              }
        };
        //await sql.connect(sqlConfigLocal);
        //await sql.connect(sqlConfigCloud);
        const result = await sql.query`SELECT @@VERSION`;
        console.dir(result)
        
    } catch (error) {
        console.error(error);
    }
}


test_conn_mssql();
