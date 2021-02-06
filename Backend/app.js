bcrypt = require('bcrypt')

bcrypt.hash('temp123',10,(err,hash)=>{
  console.log(hash)
})

console.log(bcrypt.compareSync('temp123','$2b$10$y1RAw4H1hQG5vnh8jjK.5uvLfwTgmCl3aFh9wfs/8ifbweZAwTHfy'))