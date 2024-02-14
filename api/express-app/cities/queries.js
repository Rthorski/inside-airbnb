const getCities = "SELECT * FROM ny";
const getCitiesByNeighbourhoodGroup = "SELECT * FROM ny WHERE neighbourhood_group = $1";
const getCitiesByNeighbourhood = "SELECT * FROM ny WHERE neighbourhood = $1";



module.exports = {
    getCities,
    getCitiesByNeighbourhoodGroup,
    getCitiesByNeighbourhood,
};