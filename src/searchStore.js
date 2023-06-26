import axios from "axios";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      api: "http://127.0.0.1:8000/api/search",
      apartments: null,
      lat: null,
      lon: null,
      dist: 20,
      services: null,
      clicked: [],
    };
  },
  actions: {
      searchApartment() {
        console.log(this.clicked);
      axios
        .post(this.api, {
            lat:this.lat,
            lon:this.lon,
            dist:this.dist,
            service:this.clicked
        })
        .then((response) => {
          this.apartments = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // Chiamata per i servizi
    getServices(){
      axios.get('http://127.0.0.1:8000/api/services')
      .then((respsonse) => {
        this.services = respsonse.data.results;
      })
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
      console.log(input);
      // var ttSearchBox = new tt.plugins.SearchBox(tt.services, options)
      var ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
      var searchBoxHTML = ttSearchBox.getSearchBoxHTML();
      let searchbar = document.getElementsByClassName("tt-search-box-input");
      let search = document.getElementsByClassName('tt-search-box');
      let boxInput = document.getElementsByClassName('tt-search-box-input-container');
      
      input.append(searchBoxHTML);
      ttSearchBox.on("tomtom.searchbox.resultselected", (data) => {
        this.lat = data.data.result.position.lat;
        this.lon = data.data.result.position.lng;
      });
      boxInput.forEach(element => {
        element.classList.add('rounded');
      })
      search.forEach(element => {
        element.classList.add('mt-0');
      });
    },
  
  },
});
