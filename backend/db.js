const mongoose = require('mongoose');
const mongoURI = 'mongodb://ajazmahida9:Azad2003@ac-lzxvslm-shard-00-00.kr9qaug.mongodb.net:27017,ac-lzxvslm-shard-00-01.kr9qaug.mongodb.net:27017,ac-lzxvslm-shard-00-02.kr9qaug.mongodb.net:27017/tiffinhub?ssl=true&replicaSet=atlas-depbct-shard-0&authSource=admin&retryWrites=true&w=majority&appName=tiffinhub';

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('MongoDB connected');

        // Fetch data from the "fooditem" collection
        const collection = mongoose.connection.db.collection("fooditem");
        const data = await collection.find({}).toArray();

        // Fetch data from the "foodCategory" collection
        const foodCategory = mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategory.find({}).toArray();

        // Store fetched data globally
        global.fooditem = data;
        global.foodCategory = catData;
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err; // Rethrow the error to indicate failure
    }
};

module.exports = mongoDB(); // Export the function











// const mongoose = require('mongoose');
// const mongoURI = 'mongodb://ajazmahida9:Azad2003@ac-lzxvslm-shard-00-00.kr9qaug.mongodb.net:27017,ac-lzxvslm-shard-00-01.kr9qaug.mongodb.net:27017,ac-lzxvslm-shard-00-02.kr9qaug.mongodb.net:27017/tiffinhub?ssl=true&replicaSet=atlas-depbct-shard-0&authSource=admin&retryWrites=true&w=majority&appName=tiffinhub';

// const mongoDB = async () => {
//     try {
//         // Connect to MongoDB
//         await mongoose.connect(mongoURI, {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true
//         });
//         console.log('MongoDB connected');

//         // Fetch data from the "fooditem" collection
//         const collection = mongoose.connection.db.collection("fooditem");
//         const data = await collection.find({}).toArray();
//         console.log();//data
//     } catch (err) {
//         console.error('MongoDB connection error:', err);
//     } 
//     // finally {
//     //     // Close database connection
//     //     mongoose.connection.close();
//     // }
// };

// // mongoDB(); // Call the function directly

// module.exports = mongoDB(); // Export the function



















// const { Result } = require('express-validator');
// const mongoose = require('mongoose');
// const mongoURI = 'mongodb://ajazmahida9:Azad2003@ac-lzxvslm-shard-00-00.kr9qaug.mongodb.net:27017,ac-lzxvslm-shard-00-01.kr9qaug.mongodb.net:27017,ac-lzxvslm-shard-00-02.kr9qaug.mongodb.net:27017/tiffinhub?ssl=true&replicaSet=atlas-depbct-shard-0&authSource=admin&retryWrites=true&w=majority&appName=tiffinhub';

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true },(err,result)=>{
//             if(err)console.log("---",err)

//         });
//         console.log('MongoDB connected');
//     } catch (err) {
//         console.error('MongoDB connection error:', err);
//     }
// };

// module.exports = mongoDB;









// const mongoose = require('mongoose');
// const mongoURI = 'mongodb://ajazmahida9:Azad2003@ac-lzxvslm-shard-00-00.kr9qaug.mongodb.net:27017,ac-lzxvslm-shard-00-01.kr9qaug.mongodb.net:27017,ac-lzxvslm-shard-00-02.kr9qaug.mongodb.net:27017/tiffinhub?ssl=true&replicaSet=atlas-depbct-shard-0&authSource=admin&retryWrites=true&w=majority&appName=tiffinhub';

// const mongoDB = () => {
//     mongoose.connect(mongoURI, {
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true
//     })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));
// };

// module.exports = mongoDB;



// const mongoose = require('mongoose');
// const mongoURI = 'mongodb://ajazmahida9:Azad2003@ac-lzxvslm-shard-00-00.kr9qaug.mongodb.net:27017,ac-lzxvslm-shard-00-01.kr9qaug.mongodb.net:27017,ac-lzxvslm-shard-00-02.kr9qaug.mongodb.net:27017/tiffinhub?ssl=true&replicaSet=atlas-depbct-shard-0&authSource=admin&retryWrites=true&w=majority&appName=tiffinhub'
// // mongoose.connect('mongoURI');
// const mongoDB =() =>{
    
//     mongoose.connect('mongoURI',()=>{
//         console.log('connected');
//     });

// }

// module.exports = mongoDB;
