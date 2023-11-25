import { connectToDatabase } from '../../lib/connectToDb';

export default async function handler(req, res) {
    try {
        const db = await connectToDatabase();
        console.log(db)
        const routes = await db
            .collection('routes')
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();

        console.log(routes);
        res.status(200).json({ routes });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }
}
