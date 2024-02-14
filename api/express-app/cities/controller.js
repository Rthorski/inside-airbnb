const pool = require('../database');
const queries = require('./queries');

const getCities = (req, res) => {
    pool.query(queries.getCities, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCitiesByNeighbourhoodGroup = (req, res) => {
    const neighbourhood_group = req.params['neighbourhood_group'];
    pool.query(queries.getCitiesByNeighbourhoodGroup, [neighbourhood_group],(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getCitiesByNeighbourhood = (req, res) => {
    const neighbourhood = req.params['neighbourhood'];
    pool.query(queries.getCitiesByNeighbourhood, [neighbourhood],(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}



module.exports = {
    getCities,
    getCitiesByNeighbourhoodGroup,
    getCitiesByNeighbourhood,
};