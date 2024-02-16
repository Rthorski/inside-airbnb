const getCities = "SELECT * FROM ny LIMIT 5000";
const getCitiesByNeighbourhoodGroup = "SELECT * FROM ny WHERE neighbourhood_group = $1 LIMIT 5000";
const getCitiesByNeighbourhood = "SELECT * FROM ny WHERE neighbourhood = $1";
const getCountCities = "SELECT count (*) FROM ny WHERE neighbourhood_group = $1";
const getCountAllCities = "SELECT count (*) FROM ny";



module.exports = {
    getCities,
    getCitiesByNeighbourhoodGroup,
    getCitiesByNeighbourhood,
    getCountCities,
    getCountAllCities,
};