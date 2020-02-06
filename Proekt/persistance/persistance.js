function TravelApi(){


    this.getTravelApiData = () => {
        return new Promise((resolve, reject) => {
     $.ajax({
         url: "https://restcountries.eu/rest/v2/all",
         type:"GET",
         success:function(data){
          resolve(data)
         },
         error: function(error) {
         reject(error);
        }
              });
            });
          };
          
        }
