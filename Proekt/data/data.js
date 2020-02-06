function DataLayer() {
  this.TravelApiData = {};
  this.persistanceObject = new TravelApi();

  this.populateTravelApiData = async () => {
    this.TravelApiData = await this.persistanceObject.getTravelApiData();

  };

  this.getTravelApiData = () => {
    return this.TravelApiData;
  };

  
}
  
  


