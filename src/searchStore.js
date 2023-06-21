import axios from "axios";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      api: "http://127.0.0.1:8000/api/apartment/{params}",
      address: null,
      lat: null,
      lon: null,
      dist: 20,
    };
  },
  actions: {
    getAddress() {
      axios.post(this.api,{
            headers:{
                "Content-type": "application/json"
            },
            body:{
                
            },
            params:{
                lat:this.lat,
                lon:this.lon,
                dist:this.dist
            }
        })
        .then((response) => {
          this.address = response.data.results;
          console.log(this.address);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    chePalle() {
      var options = {
        searchOptions: {
          key: "8SNIXFOGffeajHOtNAuZdfTSBRjqGKau",
          language: "it-IT",
          limit: 5,
        },
        autocompleteOptions: {
          key: "8SNIXFOGffeajHOtNAuZdfTSBRjqGKau",
          language: "it-IT",
        },
      };
      let input = document.getElementById("address");

      // var ttSearchBox = new tt.plugins.SearchBox(tt.services, options)
      var ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
      var searchBoxHTML = ttSearchBox.getSearchBoxHTML();
      let searchbar = document.getElementsByClassName("tt-search-box-input");
      input.append(searchBoxHTML);
      ttSearchBox.on("tomtom.searchbox.resultselected", (data) => {
        this.lat = data.data.result.position.lat;
        this.lon = data.data.result.position.lng;
      });
    },
  },
});
