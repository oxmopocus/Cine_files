import { requestGet } from '../utils/requestApi';
import { deepCopy } from '../utils/functions';

export const app = {
    state: {
        name:'',
        cities: [],
        informations: {

        },
    },
    
    reducers:{
        setName(state, {name}){
            return {...state, name};
        },
        setCities(state, {cities}) {
            return {...state, cities};
        },
        setInformations(state, {informations}) {
            return {...state, informations};
        },
        setCitiesInformations(state, {informations, cities}) {
            return {...state, informations, cities};
        }
    },

    effects:(dispatch) => ({

        async addCity(payload, rootState) {
            if(!rootState.app.cities.includes(payload.city)){
                const response = await requestGet('weather', `q=${payload.city}`);
                if (response.cod == 200) {
                    const infosTemp = deepCopy(rootState.app.informations);
                    const cityTemp = rootState.app.cities.slice();
                    cityTemp.push(payload.city);
                    infosTemp[payload.city] = response;
                    this.setCitiesInformations({ informations : infosTemp,  cities : cityTemp });
                }
            }
        },

        deleteCity(payload, rootState) {
            const infosTemp = deepCopy(rootState.app.informations);
            const cityTemp = rootState.app.cities.slice();
            const cityName = cityTemp[payload.index];
            cityTemp.splice(payload.index, 1);
            delete infosTemp[cityName]
            this.setCitiesInformations({ informations : infosTemp,  cities : cityTemp });
        }, 

        async getLocalMeteoInformations(location, rootState) {
            if (location) {
                const {coords: {latitude, longitude}} = location;
                const lat = latitude;
                const lon = longitude;


                var promise1 = new Promise(function(resolve, reject) {
                    setTimeout(function() {
                        resolve('foo');
                    }, 3000);
                });
                await promise1.then(response => {console.log(response); });
                // console.log("hello");
            }
        },


        async getMeteoInformations(location, rootState) {
            // console.log(location);
            if(location) {
                const { coords: { latitude, longitude } } = location;
                const lat = latitude;
                const lon = longitude;
                const response = await requestGet('weather', `lat=${lat}&lon=${lon}`);
                if (response.cod == 200) {
                    const infosTemp = deepCopy(rootState.app.informations);
                    const cityTemp = rootState.app.cities.slice();
                    cityTemp.push(response.name);
                    infosTemp[response.name] = response;
                    this.setCitiesInformations({ informations : infosTemp,  cities : cityTemp });
                }
            }
        }
     }),
};