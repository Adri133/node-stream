
// import fs from 'fs';
// let file = 'demo.wav';
// fs.readFile(file, (err, data) => {
//     if (condition) throw err
//     fs.writeFile('copy.mp4', data, (err) => {
//         if (err) throw err
//         console.log('Le fichier à bien été copié');
//       })
//     })

//exemple 2
// import fs from 'fs';
// let file = 'demo.wav';

// let read = fs.createReadStream(file)

// read.on('data', (chunck) => {
//   console.log('J\'ai lu ' + chunck.length);
// })

// read.on('end', ()=>{
//   console.log('J\'ai fini de lire le fichier');
// })

//exemple 3 progression
// import fs from 'fs';
// let file = 'demo.wav';
// fs.stat(file, (err, stat) => {
//   let total = stat.size;
//   let progress = 0;

//   let read = fs.createReadStream(file)

//   read.on('data', (chunck) => {
//     progress += chunck.length;
//     console.log('J\'ai lu ' + (100 * progress/total) +'%' );
//   })
  
//   read.on('end', ()=>{
//     console.log('J\'ai fini de lire le fichier');
//   })
// })

//exemple 4 write
import fs from 'fs';
let file = 'demo.wav';
fs.stat(file, (err, stat) => {
  let total = stat.size;
  let progress = 0;

  let read = fs.createReadStream(file);
  let write = fs.createWriteStream('copy.wav');

  read.on('data', (chunck) => {
    progress += chunck.length;
    console.log('J\'ai lu ' + (100 * progress/total) +'%' );
  });
  
  read.on('end', ()=>{
    console.log('J\'ai fini de lire le fichier');
  });

  read.pipe(write);

  write.on('finish', () => {
    console.log('Le fichier a bien été copié');
  })
})

