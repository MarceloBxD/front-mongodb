import { Route } from "../../../models/Route";

export const get_rotas = async (req:any, res:any) => {
    const { origin, destination, departureDate } = req.body;

    const tickets = await Route.find({
        origin,
        destination,
        departureDate,
    });

    if (!tickets) {
        console.log("Erro ao encontrar rota");
        return res.status(400).json({
            message: "Não foi possível encontrar a rota",
        });
    }

    if (tickets.length === 0) {
        return res.status(404).json({
            message: "Não há passagens disponíveis para essa rota",
        });
    }

    res.status(200).json({
        message: "Rotas encontradas com sucesso",
        tickets,
    });
}

export const get_rota = async (req:any, res:any) => {
    const { id } = req.params;

    const ticket = await Route.findById(id);

    if (!ticket) {
        return res.status(400).json({
            message: "Não foi possível encontrar a rota",
        });
    }

    res.status(200).json({
        message: "Rota encontrada com sucesso",
        ticket,
    });
}

export const create_rota = async (req:any, res:any) => {
    const { origem, destino, horaPartida, dataPartida, passagens } = req.body;

    try {
        const route = await Route.create({
            origem,
            destino,
            horaPartida,
            dataPartida,
            passagens,
        });

        res.status(201).json({
            message: "Rota criada com sucesso",
            route,
        });
    } catch (err) {
        res.status(400).json({
            error: err,
        });
    }
}

export const update_rota = async (req:any, res:any) => {
    const { id } = req.params;
    const { origem, destino, horaPartida, dataPartida, passagens } = req.body;

    try {
        const route = await Route.findByIdAndUpdate(id, {
            origem,
            destino,
            horaPartida,
            dataPartida,
            passagens,
        });

        res.status(200).json({
            message: "Rota atualizada com sucesso",
            route,
        });
    } catch (err) {
        res.status(400).json({
            error: err,
        });
    }
}

export const delete_rota = async (req:any, res:any) => {
    const { id } = req.params;

    try {
        const route = await Route.findByIdAndDelete(id);

        res.status(200).json({
            message: "Rota deletada com sucesso",
            route,
        });
    } catch (err) {
        res.status(400).json({
            error: err,
        });
    }
}

