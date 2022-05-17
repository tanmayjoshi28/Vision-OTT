const oracledb = require("oracledb");
const dbConfig = {
	user: "ADMIN",
	password: "password",
	connectString: "localhost:1521/xe",
};
oracledb.autoCommit = true;

async function query(sql, params) {
    try{
        const connection = await oracledb.getConnection(dbConfig);
        const results = await connection.execute(sql, params);
        return results;
    }
    catch(err){
        console.log(err);
        throw err;
    }
    
}
  
module.exports = {
    query
}