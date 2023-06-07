module.exports = {
      insertPost(req, res){
          client(function(db){
            db.collection(COLLECTION).insertOne(req.body)
            .then(()=> db.collection(COLLECTION).find().toArray())
            .then(records=> res.status(200).send(records))
            .catch(()=>{
                  res.status(200).send(`Error fetching document ${COLLECTION}`)
            })
      })
}}