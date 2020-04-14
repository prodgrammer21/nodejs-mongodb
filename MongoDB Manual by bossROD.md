## INSERT: Insert one record
    db.<collection>.insert({ <key>: <value> })
## INSERT MANY: Insert many records
    db.<collection>.insertMany([
      { <key>: <value> },
      { <key>: <value> },
      { <key>: <value> }
    ])

## FIND: Display all records 
    db.<collection>.find()
## FIND ONE: Display one record
    db.<collection>.findOne({ <keyId>: <valueId> })
## COUNT: Count number of records
    db.<collection>.find().count()
## PRETTY: Display records more readable
    db.<collection>.find().pretty()
## SORT: <value> = 1 -> ASC || -1 -> DESC
    db.<collection>.find().sort({ <key>: <value> })

## UPDATE: Replace the record itself
    db.<collection>.update({ <keyId>: <valueId> })
## UPDATE w/ $set: Update the record
    db.<collection>.update({ <keyId>: <valueId> }, {
      $set: {
        <key>: <value>,
        <key>: <value>,
        <key>: <value>,
      }
    })
## UPDATE w/ $rename: Update key of property
    db.<collection>.update({ <keyId>: <valueId> }, {
      $rename: { <key>: <value> }
    })

## DELETE ONE: Delete only one record
    db.<collection>.deleteOne({ <keyId>: <valueId> })
