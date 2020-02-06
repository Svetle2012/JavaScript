function BusinessLayer() {
    this.dataObject = new DataLayer();


    this.resolveTravelData = async () => {
        await this.dataObject.populateTravelApiData();
        var data = this.dataObject.getTravelApiData();
        console.log(data);
        var names = [];
        for (var i = 0; i < data.length; i++) {
            names.push(data[i]);
        }

    //     var allInfo = [];
    //     var countryName = [];
    //     var capital = [];
    //     var flags = [];
    //     var borders = [];
    //     for (var i = 0; i < names.length; i++) {
    //         capital.push(names[i].capital);
    //         flags.push(names[i].flag);
    //         borders.push(names[i].borders);
    //         countryName.push(names[i].name);
    //         var tempObject = {
    //             capital: capital,
    //             flags: flags,
    //             border: borders,
    //             names: countryName
    //         }
    //         allInfo.push(tempObject);
    //     }
    //     return allInfo;
    // }
    }

    
}

