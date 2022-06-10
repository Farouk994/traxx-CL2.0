import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./songsData";

// this handles db connections
const prisma = new PrismaClient();

// 
const run = async () => {
  //write seeds script
  await Promise.all(artistsData.map(async (artist) => {
      return prisma.artist.upsert({
          where: {name:artist.name},
          update : {},
          create: {
              name : artist.name,
              songs : {
                  create: artist.songs.map(song=>({
                    name: song.name,
                    duration: song.duration,
                    url: song.url
                  }))
              }
          }
      })
    })
  )
  
  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
      where : { email : "user@test.com" },
      update : {},
      create : { 
          email : "user@test.com",
          password : bcrypt.hashSync("password",salt)
      }
  })

  // Give user songs
  const songs = await prisma.song.findMany({});
  await Promise.all(new Array(10).fill(1).map(async(_,i) =>{
       return prisma.playlist.create({
           data : {
               name : `Playlist #${i + 1}`,
               user : {
                   connect : {id : user.id}
               },
               songs : {
                   connect : songs.map((song)=>({
                       id : song.id
                   }))
               }
           }
       })
  }))
}

run().catch((e)=>{
    console.log(e.message)
    process.exit(1)
}).then()
.finally(async () => {
    await prisma.$disconnect()
});


// upsert - create or update, allow seeds to run, use it for querying something unique
// connect : 