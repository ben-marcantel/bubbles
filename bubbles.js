#!/usr/bin/env node

const chalk = require('chalk');
let num;
let counter = 0;

const random = ()=>{
    num = Math.floor(Math.random()*4)+1;
    return num;
}

const image = (num,counter)=>{

    if (num === 1){
        process.stdout.write(chalk.rgb(0,0+counter,255)(chalk.bgRgb(0,255-counter,255)("       o      o              \n")));
    } else if(num === 2){
        process.stdout.write(chalk.rgb(0,0+counter,255)(chalk.bgRgb(0,255-counter,255)("        o    o               \n")));
    } else if(num === 3){
        process.stdout.write(chalk.rgb(0,0+counter,255)(chalk.bgRgb(0,255-counter,255)("      o        o             \n")));
    } else if(num === 4){
        process.stdout.write(chalk.rgb(0,0+counter,255)(chalk.bgRgb(0,255-counter,255)("       o      o              \n")));
    }
 }

const scene = (counter)=>{

   if (counter !== 255){
        animate();
    } else if (counter === 255){
        process.stdout.write(chalk.rgb(0,0+counter,255)(chalk.bgRgb(80,150,255)("                             \n")));
        process.stdout.write(chalk.rgb(0,0+counter,255)(chalk.bgRgb(80,150,255)("                             \n")));
    } 
}

const animate = ()=>{ 
    setTimeout(()=>{
        counter += 1;
        random();
        image(num,counter);
        scene(counter);
    },80)
}
animate();
