const dbConnect = require("./mongodb");
const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: 'Birbal' },
        { $set: { occupation : 'Sipahi' } }
        );
    console.log(result);
    console.log("Database Updated");
};
updateData();