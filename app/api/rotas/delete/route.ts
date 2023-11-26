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