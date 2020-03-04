import http from 'http';
import express from 'express';
import getimages from './getimages';
import path from 'path'
import countArray from './countArray'; //función para el arreglo que guarda las veces que se descarga cada imagen
import dotenv from 'dotenv';


dotenv.config();

const APP = express();

const ImageCount=[];

APP.set('views', './views');
APP.set('view engine', 'pug');

const SERVER = http.createServer(APP);

APP.use(express.static('public')); //la carpeta public sera la ruta estatica


APP.get('/images', (req,res)=>{
    const images= getimages();
    res.render('images',{images, title: "Image Gallery"});
})


APP.get('/download/:image', (req,res)=>{
    const name =req.params.image;
    const file = path.join(__dirname + '/public/images/' + name);
    countArray(name, ImageCount);
    res.download(file);
})

APP.get('/mostrar', (req,res) =>{
    let css = path.join(__dirname + '/public/css/style.css');
    res.render('mostrar',{ImageCount, title: "Number of downloads",css});
})

SERVER.listen(process.env.PORT);