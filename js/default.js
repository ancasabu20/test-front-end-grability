// JavaScript Document   
$( document ).ready(function() {
   search(1);

   //Favoritos
   console.log(localStorage.length);

  
   if(localStorage.length==0){
       favourites(1);
   }else{


console.log(localStorage);

for (i = 0; i <=localStorage.clickcount; i++) { 

    var comic = localStorage.getItem('data_'+i);
 
     favourites(comic);
 }
  
   
   }

});


function searchChar(){
  search(2);
}


function search(val){

var name = document.getElementById("buscartxt").value;

if(val==1 && name.length==0){
  var URLsearch = window.location.search;
  var urls= "http://gateway.marvel.com/v1/public/characters?orderBy=name&apikey=39e4791e9527c9f646758dc6e5e5a9b4&ts=1&hash=b03a121752073434b2cd0be9ac6df552&limit=10"+URLsearch;
}else{
 var urls= "http://gateway.marvel.com/v1/public/characters?orderBy=name&apikey=39e4791e9527c9f646758dc6e5e5a9b4&ts=1&hash=b03a121752073434b2cd0be9ac6df552&name="+name;

}
//console.log(urls);

$("div.characters-section").empty();
 $.ajax({
    url: urls,
    method: "GET"
   }).done(function(response) {

      $.each(response.data.results, function(index, element) {
         // console.log(element);
         $("div.characters-section")
         .append($('<div class="col-md-6 character-box">')
            .append($('<div class="box">')
               .append($('<div class="row">')
                  .append($('<div class="col-md-12">')
                      .append($('<img>')
                        .attr('src', element.thumbnail.path + '/standard_xlarge.' + element.thumbnail.extension)
                      )
                  )
                  .append($('<div class="col-md-12">')
                      .append($('<h1>')
                        .append(element.name)
                      )
                      .append($('<p>')
                     
                        .append(element.description)
                      
                      )
                       .append($('<a data-remodal-target="modal" class="more" onclick="modal('+element.id+')">')

                        .append('View More')

                      )
                  )
               )
               .append($('<h2>')
                  .append('Related Comics')
               )

               .append($('<ul>')
               )
             )
         )
         
         $.each(element.comics.items, function(j, comic){
            if (j<4){
               $("div.characters-section ul:last")
               .append($('<li>')
                  .append(comic.name)
               )
            }
         })    

 })
      });         

}


function modal(id){

var urls ="https://gateway.marvel.com:443/v1/public/comics?characters="+id+"&limit=1&apikey=39e4791e9527c9f646758dc6e5e5a9b4&ts=1&hash=b03a121752073434b2cd0be9ac6df552";

  
$.ajax({
    url: urls,
    method: "GET"
   }).done(function(response) {
     $.each(response.data.results, function(index, element) {
     var precio = element.prices[0].price;
$('div.remodal').empty();
 $("div.remodal")
         .append($('<div class="row info">')
                  .append($('<div class="col-md-4 left" id="imgico">')
                      .append($('<img>')
                        .attr('src', element.thumbnail.path + '/portrait_fantastic.' + element.thumbnail.extension)
                      )
                  )
                  .append($('<div class="col-md-8 right"><a href="" data-remodal-action="cancel" class="close"></a>')
                      .append($('<h1>')
                        .append(element.title)
                      )
                      .append($('<p>')
                     
                        .append(element.description)
                      
                      )) )
                       .append($('<div class="row options"><div class="col-md-6"><a href="" class="add" onclick="favourites('+element.id+')"><span></span> ADD TO FAVORITES</a></div><div class="col-md-6"><a href="https://comicstore.marvel.com/" class="buy"><span></span> BUY FOR $'+precio+'</a>')
                      )
     }); 
        });  
}

function  favourites(id){

if(id==1){
var urls ="https://gateway.marvel.com:443/v1/public/comics?limit=3&apikey=39e4791e9527c9f646758dc6e5e5a9b4&ts=1&hash=b03a121752073434b2cd0be9ac6df552";


}else{
  var urls ="https://gateway.marvel.com:443/v1/public/comics/"+id+"?apikey=39e4791e9527c9f646758dc6e5e5a9b4&ts=1&hash=b03a121752073434b2cd0be9ac6df552";
  
  

if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
    localStorage.clickcount = 0;
}

localStorage.setItem("data_"+localStorage.clickcount,id);
}


//console.log(urls);
   
$.ajax({
    url: urls,
    method: "GET"
   }).done(function(response) {
     $.each(response.data.results, function(index, element) {

 $("div.favourites-container")
         .append($('<div class="col-md-12">')
                  .append($('<div class="box">')
                    .append($('<a href="">') )
                      .append($('<img>')
                        .attr('src', element.thumbnail.path + '/portrait_fantastic.' + element.thumbnail.extension)
                      )
                 
                  
                      .append($('<h1>')
                        .append(element.title)
                      )) )
                       
     }); 
        });  


}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
