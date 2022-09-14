const { services, psycho, patients } = require("../models/index");


const servicesController = {

    listServices: async (req, res) => {
        try {
            const listallServices = await services.findAll( { include: patients } );

            res.json(listallServices);

        } catch (error) {

            res.json({error: "deu ruim!"})

        }
    },

    listbyId: async (req, res) => {
        try {

            const { id } = req.params;

            const listService = await services.findByPk(id);

            if(listService) {
                return res.json(listService);
            }

            res.json("erro")

        } catch (error) {

            console.log("error")
            
        }
    },

    createService: async (req, res) => {

        const { patient_id, psycho_id, service_date, note } = req.body;
        
        try {
            
            const newService = await services.create( { patient_id, psycho_id, service_date, note } );

            return res.status(201).json(newService);

        } catch (error) {
            
            console.error(error.message)
            res.status(500).json({error: "deu ruim!"})
            
        }
    }

}

module.exports = servicesController;

