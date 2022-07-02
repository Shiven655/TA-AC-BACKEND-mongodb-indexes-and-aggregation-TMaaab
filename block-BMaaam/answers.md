db.data.aggrigate([{$match :{isActive:true}}]).pretty();
db.data.aggrigate([{$match :{gender:"male"}},{$match :{$inc :{name :"Blake"}}}]).pretty();
db.data.aggregate([{$match: {gender: "male"}}]).pretty();
db.data.aggregate([{$match: {gender: "male"}}, {$match: {isActive: true}}]).pretty()
db.data.aggregate([{$match: {gender: "male"}}, {$match: {isActive: true}},{$match :{age:{$gte :25}}}]).pretty()
db.data.aggregate([{$match: {gender: "male"}}, {$match :{age:{$gt :40}}},{$match :{eyecolor:"blue"}}]).pretty()
db.data.aggregate([{$match: {"company.location.country": "USA"}}, {$match: {eyeColor: "blue"}}])
db.data.aggregate([{$match: {gender: "female"}},{$match: {"company.location.country": "Germany"}}, {$match: {eyeColor: "green"}}, {$match: {favoriteFruit: "apple"}}])
db.data.aggrigate({ $group:{ _id: "$gender", count: { $sum: 1 }, } })
db.data.aggregate([{$match: {eyeColor: "green"}}, {$group: { _id: null, count: {$sum: 1} }}])
db.data.aggregate([{$match: {gender: "female"}},{$match: {eyeColor: "brown"}}, {$group: { _id: null, count: {$sum: 1} }}])
db.data.aggregate([{$group: { _id: "$eyeColor", count: {$sum: 1}, }}])
db.data.aggregate([{$match: {gender: "female"}},{$match: {$inc: {tags :"amet"}}}, {$group: { _id: null, count: {$sum: 1} }}])
db.data.aggregate([{ $group:{ _id: null, avg_age: {$avg: $age} } }])
db.users.aggregate([ { $group: { _id: "$gender", avg_age: { $avg: "$age" }, }, }, ]);
db.collection.aggregate({ $group : { _id: null, max: { $max : "$age" } }});
db.collection.aggregate({ $group : { _id: null, max: { $min : "$age" } }});
db.data.aggregate([{$group: { _id: null, sum_age: {$sum: "$age"} }}])
db.data.aggregate([{$match: {gender: "male"}},{$group: { _id: "$eyeColor", count: {$sum: 1} }}])
db.data.aggregate([{$match: {gender: "female"}},{$match :{age :{$gt :30}}},{$group: { _id: "$age", count: {$sum: 1} }}])
db.data.aggregate([{$match: {gender: "male"}}, {$match: {eyeColor: "blue"}}, {$match: {"company.location.country": "Germany"}}, {$group: { _id: null, men_in_germany: {$sum: 1} }}])
db.data.aggregate([{$unwind: "$tags"}, {$group: { _id: "$tags", count: {$sum: 1} }}])
db.data.aggregate([{$match: {favoriteFruit: "banana"}}])
