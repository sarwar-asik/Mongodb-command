* Mongo------db-command

** 1. Operator //////

** Comparison Operator

*** $gt (get greater than 22 )

------db.user.find({age:{$gt:22}})

*** $gte (get greater than 22 or equal)

------db.user.find({age:{$gte:22}})

*** $lt (get less than 22 )

------db.user.find({age:{$lt:22}})

*** $lte (get less than 22 or equal)

------db.user.find({age:{$lte:22}})

*** $nte (get not equal 22 )

------db.user.find({age:{$gte:22}})

*** $in (get Tinku or Pintu)

------db.user.find({name:$in:[""Tinku","Pinku"]})

** Logical Operator

*** $and:(true for every condition)

------db.user.find({$and:[{name:"Tinku"},{age:22}]})

*** $or:(true for any condition)

------db.user.find({$or:[{name:"Tinku"},{age:22}]})

*** $not:(not getter than 22 age)

------db.user.find({age:{$not:{$gt:22}}})

** Expression Operator

*** $expr (true if income is getter than budget)

------db.account.find($expr:{$gt:["income","budget"]})

** Others Operator

*** $exists:true (Check value in data)

------db.user.find({age:{$exists:true}})

*** $type : object/string

------db.user.find(address:{$type:"object"})

*** $regex ( find letter in string like search )

------db.user.find({name:{$regex:/Tin/i}})
