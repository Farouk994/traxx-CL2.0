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
                    url: song.url,
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


// upsert - create or update, allow seeds to run 