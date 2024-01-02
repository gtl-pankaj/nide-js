const dbConnect = require("./mongodb");
const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany([
        {"name":"Akbar","age":30,"gender":"male","occupation":"babarchi"},
        {"name":"Birbal","age":35,"gender":"male","occupation":"safaiwala"},
            {"name":"tipu","age":25,"gender":"male","occupation":"barbar"},
            {"name":"Sultan","age":22,"gender":"male","occupation":"Pochewala"},
            {"name":"Jahangir","age":40,"gender":"male","occupation":"jhaaduwala"},
            {"name":"kalawati","age":20,"gender":"female","occupation":"Nachnawali"},
    ]);
if (result.acknowledged) {
    console.log("Data Instered");
  }
};
insert();