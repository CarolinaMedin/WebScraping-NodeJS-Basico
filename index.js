//installing dependencies 
const cheerio = require('cheerio');
const fs      = require('fs');
const request = require('request');

const albunes = [];
//creating callback
request('https://www.sodastereo.com/albums/', (err, resp, body)=> {
    
    if(!err && resp.statusCode == 200) // if there is no error and it works correctly
        var $ = cheerio.load(body);
        $('h2.album_name', '#main').each(function (){
            let nameAlbum = $(this).attr('h2');
            if(nameAlbum.indexOf(class.album_name)!= -1){
                albunes.push(nameAlbum)
            }
 
        })

        console.log(albunes);

});

// cheerio uses the $ as a signo
// "#" used to analyze in contex