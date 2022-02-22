const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); 

//soal nomer 1
//menghitung volume dan luas kubus
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi);
    let volume = sisi * sisi * sisi;
    let luasPermukaan= 6 * (sisi*sisi);

    let outputData = {
        sisi          : sisi,
        volume        : volume,
        luasPermukaan : luasPermukaan
    };
    res.json(outputData);
});

//menghitung volume dan luas permukaan balok
app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang);
    let lebar = Number(req.body.lebar);
    let tinggi= Number(req.body.tinggi);
    let volume= panjang * lebar * tinggi;
    let luasPermukaan= 2 * ((panjang*lebar)+(panjang*tinggi)+(lebar*tinggi));
    let outputData = {
        panjang       : panjang,
        lebar         : lebar,
        tinggi        : tinggi,
        volume        : volume,
        luasPermukaan : luasPermukaan
    };
    res.json(outputData);
});

//menghitung volume dan luas permukaan tabung 
app.post("/tabung", (req,res) => {
    let phi = 3.14;
    let jariJari = Number(req.body.jariJari);
    let tinggi= Number(req.body.tinggi);
    let volume= phi * jariJari * jariJari * tinggi;
    let luasPermukaan= 2 * phi * jariJari * (jariJari + tinggi);
    let outputData = {
        phi           : phi,
        jariJari      : jariJari,
        tinggi        : tinggi,
        volume        : volume,
        luasPermukaan : luasPermukaan
    };
    res.json(outputData);
});

//menghitung volume dan luas permukaan limas segi empat
app.post("/limas", (req,res) => {
    let rusuk = Number(req.body.rusuk);
    let tinggiLimas = Number(req.body.tinggiLimas);
    let alas = Number(req.body.alas);
    let tinggi= Number(req.body.tinggi);
    let volume= 1/3 * rusuk * rusuk * tinggiLimas;
    let luasPermukaan= (rusuk * rusuk) + (4*(1/2 * alas * tinggi));
    let outputData = {
        rusuk         : rusuk,
        tinggiLimas   : tinggiLimas,
        alas          : alas,
        tinggi        : tinggi,
        volume        : volume,
        luasPermukaan : luasPermukaan
    };
    res.json(outputData);
});

// soal nomer 2 
//convert (celcius)
app.get("/convert/celcius/:temp", (req, res) => {

    let temp = req.params.temp;  
  
    let reamur = (4 / 5) * temp;
    let fahrenheit = (9 / 5) * temp + 32;
    let kelvin = 1/1 * temp + 273;
  
    let outputData = {
      celcius : temp,
      result: {
        reamur     : reamur,
        fahrenheit : fahrenheit,
        kelvin     : kelvin
      }
    };
    res.json(outputData);
  });

  //convert reamur
  app.get("/convert/reamur/:temp", (req, res) => {
    let temp = req.params.temp;
  
    let celcius = (5 / 4) * temp;
    let fahrenheit = (9 / 4) * temp + 32;
    let kelvin = (5 / 4) * temp + 273;
  
    let outputData = {
      reamur : temp,
      result: {
        celcius    : celcius,
        fahrenheit : fahrenheit,
        kelvin     : kelvin
      }
    };
    res.json(outputData);
  });

  //convert fahrenheit
  app.get("/convert/fahrenheit/:temp", (req, res) => {
    let temp = req.params.temp;
  
    let celcius = (5 / 9) * (temp - 32);
    let reamur = (4 / 9) * (temp - 32);
    let kelvin = (5 / 9) * (temp - 32) + 273;
  
    let outputData = {
      fahrenheit : temp,
      result: {
        celcius : celcius,
        reamur  : reamur,
        kelvin  : kelvin,
      }
    };
    res.json(outputData);
  });

  //convert kelvin
  app.get("/convert/kelvin/:temp", (req, res) => {
    let temp = req.params.temp;
  
    let celcius = temp - 273;
    let fahrenheit = (9 / 5) * (temp - 273) + 32;
    let reamur = (4 / 5) * (temp - 273);
  
    let outputData = {
      kelvin : temp,
      result: {
        celcius    : celcius,
        fahrenheit : fahrenheit,
        reamur     : reamur,
      }
    };
    res.json(outputData);
  });

//Soal nomer 3
//konersi decimal
app.post("/decimal", (req,res) => {

    let decimal = Number(req.body.decimal);

    let biner = decimal.toString(2);
    let octal = decimal.toString(8);
    let hex = decimal.toString(16);

    let outputData = {
        Decimal : decimal,
        result : {
            Biner       : biner,
            Octal       : octal,
            Hexadecimal : hex
        }
    };
    res.json(outputData);
});

//konversi biner
app.post("/biner", (req,res) =>{

    let biner = Number(req.body.biner);

    let decimal = parseInt(biner,2);
    let octal = parseInt(biner, 2).toString(8);
    let hex = parseInt(biner, 2).toString(16);

    let outputData = {
        Biner : biner,
        result : {
            Decimal     : decimal,
            Octal       : octal,
            Hexadecimal : hex
        }
    };
    res.json(outputData);
});

//konversi octal
app.post("/octal", (req,res) =>{

    let octal = Number(req.body.octal);

    let decimal = parseInt(octal,8);
    let binary = parseInt(octal, 8).toString(2);
    let hex = parseInt(octal, 8).toString(16);

    let outputData = {
        Octal : octal,
        result : {
            Decimal     : decimal,
            Binary      : binary,
            Hexadecimal : hex
        }
    };
    res.json(outputData);
});

//konversi hex
app.post("/hex", (req,res) => {

    let hex = Number(req.body.hex);

    let decimal = parseInt(hex,16);
    let binary = parseInt(hex, 16).toString(2);
    let octal = parseInt(hex, 16).toString(8);

    let outputData = {
        Hexadecimal : hex,
        result : {
            Decimal : decimal,
            Octal   : octal,
            Binary  : binary
        }
    };
    res.json(outputData);
});

// Soal no 4
app.post("/bmi", (req,res) => { 
    let tinggi = Number(req.body.tinggi);
    let berat = Number(req.body.berat);
    let keterangan; 

    let rumus = berat / (tinggi * tinggi);
   
    if(rumus < 18.5) {
       keterangan = 'Kekurangan Berat Badan';
    } else if(rumus >= 18.5 && rumus <= 24.9) {
        keterangan = 'Normal';
    } else if (rumus >= 25.0 && rumus <= 29.9) {
        keterangan = 'Kelebihan Berat Badan';
    } else if (rumus >= 30.0) {
        keterangan = 'Obesitas';
    } 
 
    let outputData = {
        Tinggi       : tinggi,
        Berat        : berat,
        Hasil        : rumus,
        Keterangan   : keterangan
    };
    
    res.json(outputData);
})

app.listen(9000, () => {
    console.log("server run on port 9000");
})