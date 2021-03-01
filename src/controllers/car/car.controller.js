const carSchema = require('../../model/schema/car.schema');
const helper = require('../../helpers/messageStatus');

module.exports = {

    async index(req, res) {
        try {
            const findCars = await carSchema.find();

            const carMapping = findCars.map(value => {
                const body = {
                    'manufacturer': value.manufacturer,
                    'model': value.model,
                    'color': value.color,
                    'year': value.year,
                    'license_plate': value.license_plate,
                    'createdAt': value.createdAt
                }
                return body;
            });
            return _body(carMapping, 200, null, res);
        } catch (error) {
            return _body([], 400, null, res);
        }
    },

    async store(req, res) {
        const { manufacturer, model, color, year, license_plate } = req.body;
        if (!manufacturer || !model || !color || !year || !license_plate) return _body([], 403, 'Parâmetros inválidos!', res);
        try {
            const body = {
                manufacturer,
                model,
                color,
                year,
                license_plate
            }

            await carSchema.create(body);
            return _body([], 200, null, res);
        } catch (error) {
            return _body(findCars, 400, null, res);
        }
    }
};

const _body = (data, status, message, res) => {
    const body = {
        data: data,
        message: message ? message : helper[status]
    }
    return res.status(status).json(body);
}