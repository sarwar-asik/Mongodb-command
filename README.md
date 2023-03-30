# Mongodb-command

## 1. Operator //////

## Comparison Operator

### $gt (get greater than 22 )

db.user.find({age:{$gt:22}})

### $gte (get greater than 22 or equal)

db.user.find({age:{$gte:22}})

### $lt (get less than 22 )

db.user.find({age:{$lt:22}})

### $lte (get less than 22 or equal)

db.user.find({age:{$lte:22}})

### $nte (get not equal 22 )

db.user.find({age:{$gte:22}})

### $in (get Tinku or Pintu)

db.user.find({name:$in:[""Tinku","Pinku"]})

## Logical Operator

### $and:()

db.user.find({$and:[{name:"Tinku"},{age:22}]})