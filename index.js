const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
// const autoeat = require('mineflayer-auto-eat')
const pvp = require('mineflayer-pvp').plugin

const bot = mineflayer.createBot({
  host: 'rafael1209.aternos.me', // minecraft server ip
  username: '5opka', // minecraft username
  port: 58425                // only set if you need a port that isn't 25565
})

bot.loadPlugin(pvp);
bot.loadPlugin(pathfinder)
// bot.loadPlugin(autoeat)


bot.on('chat', (username, message) => {
  if (message === 'fight me') {

    // if (entity.type === 'player') {
    //   console.log(`Игрок ${entity.username} появился!`)
    // }


    // const player = bot.players[username]

    // if (!player) {
    //   bot.chat("I can't see you.")
    //   return
    // }

    setInterval(AttackMob, 1000);


  }

  if (message === 'stop') {
    bot.pvp.stop()
  }
})
// Load the plugin

// bot.once('spawn', () => {
//   bot.autoEat.options = {
//     priority: 'foodPoints',
//     startAt: 14,
//     bannedFood: []
//   }
// })
// The bot eats food automatically and emits these events when it starts eating and stops eating.

// bot.on('autoeat_started', () => {
//   console.log('Auto Eat started!')
// })

// bot.on('autoeat_stopped', () => {
//   console.log('Auto Eat stopped!')
// })

// bot.on('health', () => {
//   if (bot.food === 20) bot.autoEat.disable()
//   // Disable the plugin if the bot is at 20 food points
//   else bot.autoEat.enable() // Else enable the plugin again
// })
// bot.on('spawn', () => {
//     bot.chat('Ready!')
//     setInterval(bot.pvp.attack(bot.nearestEntity()), 1000);

// })


function AttackMob() {
  entity = bot.nearestEntity()
    try {
      if (entity.name != 'item') {
        if (entity.type === 'player') {
          bot.pvp.attack(entity)
          console.log(`Игрок ${entity} появился!`)
        }
      }
    } 
      catch (error) {
        console.error(error);
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
      }
      // target = entity

  }
