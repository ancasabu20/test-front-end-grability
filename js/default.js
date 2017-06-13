// JavaScript Document   
var URLsearch = window.location.search;
var urls= "http://gateway.marvel.com/v1/public/characters?orderBy=name&apikey=39e4791e9527c9f646758dc6e5e5a9b4&ts=1&hash=b03a121752073434b2cd0be9ac6df552&limit=10"+URLsearch;

 $.ajax({
    url: urls,
    method: "GET"
   }).done(function(response) {

      $("div.characters-container").empty();
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
                       .append($('<a class="more" onclick="modal('+element.id+')">')

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


function modal(id){
var urls ="https://gateway.marvel.com:443/v1/public/characters/"+id+"?&apikey=39e4791e9527c9f646758dc6e5e5a9b4&ts=1&hash=b03a121752073434b2cd0be9ac6df552";
 
$.ajax({
    url: urls,
    method: "GET"
   }).done(function(response) {
     $.each(response.data.results, function(index, element) {
console.log(element);
     }); 
        });  

   
          
        
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
