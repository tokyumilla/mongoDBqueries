db.getCollection('Restaurantes').find({});
db.getCollection('Restaurantes').find({},{restaurant_id:1,name:1,borough:1,cuisine:1});
db.getCollection('Restaurantes').find({},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0});
db.getCollection('Restaurantes').find({},{restaurant_id:1,name:1,borough:1,_id:0, "address.zipcode":1});
db.getCollection('Restaurantes').find({"borough":"Bronx"});
db.getCollection('Restaurantes').find({"borough":"Bronx"}).limit(5);
db.getCollection('Restaurantes').find({"borough":"Bronx"}).skip(5).limit(5);
db.getCollection('Restaurantes').find({"grades.score":{"$gt":90}});
db.getCollection('Restaurantes').find({"grades.score":{"$gt":80 , "$lt":100}});
db.getCollection('Restaurantes').find({"address.coord.0":{"$lt":-95.754168}});
db.getCollection('Restaurantes').find({$and: [{"cuisine":{"$ne":"American"}} , {"address.coord.0":{"$lt":-65.754168}}, {"grades.score":{"$gt":70}}]});
db.getCollection('Restaurantes').find({"cuisine":{"$ne":"American"} , "address.coord.1":{"$lt":-65.754168}, "grades.score":{"$gt":70}});
db.getCollection('Restaurantes').find({$and: [{"cuisine":{"$ne":"American"}} , {"borough":{"$ne":"Brooklyn"}}, {"grades.grade":"A"}]}).sort({cuisine:-1});
db.getCollection('Restaurantes').find({name:{$regex: "^Win"}},{restaurant_id:1,name:1,borough:1,cuisine:1})
db.getCollection('Restaurantes').find({name:{$regex: "ces$"}},{restaurant_id:1,name:1,borough:1,cuisine:1})
db.getCollection('Restaurantes').find({name:{$regex: /Reg/}},{restaurant_id:1,name:1,borough:1,cuisine:1})
db.getCollection('Restaurantes').find({$and: [{"borough":"Bronx"} , {"cuisine": {$in:["American ","Chinese"]}}]});
db.getCollection('Restaurantes').find({"borough":{$in:["Staten Island","Queens","Bronx","Brooklyn"]}},{restaurant_id:1,name:1,borough:1,cuisine:1});
db.getCollection('Restaurantes').find({"borough":{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}},{restaurant_id:1,name:1,borough:1,cuisine:1});
db.getCollection('Restaurantes').find({"grades.score": {$lte:10}},{restaurant_id:1,name:1,borough:1,cuisine:1});
db.getCollection('Restaurantes').find({$or: [{name:{$regex: "^Win"}} , {"cuisine": {$nin:["American ","Chinese"]}}]});
db.getCollection('Restaurantes').find({"grades": {$elemMatch:{"score":11,"grade":"A","date":ISODate("2014-08-11T00:00:00Z")}}},{restaurant_id:1,name:1,grades:1});
db.getCollection('Restaurantes').find({"grades.1":{"date":ISODate("2014-08-11T00:00:00Z"),"grade":"A", "score":11}},{restaurant_id:1,name:1,grades:1});
db.getCollection('Restaurantes').find({"address.coord.1":{"$gt":42,"$lt":52}},{restaurant_id:1,name:1,grades:1,"address.coord":1});
db.getCollection('Restaurantes').find({}).sort({name:1});
db.getCollection('Restaurantes').find({}).sort({name:-1});
db.getCollection('Restaurantes').find({}).sort({cuisine:-1,borough:-1});
db.getCollection('Restaurantes').find({"address.street":{"$exists":false}});
db.getCollection('Restaurantes').find({"address.coord":{"$type":"double"}});
db.getCollection('Restaurantes').find({$where: "grades.score% 7==0"},{restaurant_id:1,name:1,"grades.grade":1});
db.getCollection('Restaurantes').find({name:{$regex: /mon/i}},{name:1,borough:1,cuisine:1,"address.coord":1})
db.getCollection('Restaurantes').find({name:{$regex: "^Mad"}},{name:1,borough:1,cuisine:1,"address.coord":1})
