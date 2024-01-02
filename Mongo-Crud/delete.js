const dbConnect = require("./mongodb");
const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteOne({ name: 'Akbar' });
    console.log(result);
    console.log("Database Deleted");
};
deleteData();
