const { services, psycho, patients } = require("../models/index");


const servicesController = {

    listServices: async (req, res) => {
        try {
            const listallServices = await services.findAll( { include: patients } );

            res.json(listallServices);

        } catch (error) {

            res.json({error: "deu ruim!"})

        }
    }


}


module.exports = servicesController;