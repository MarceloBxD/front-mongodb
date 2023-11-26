import {User} from '../../../../models/User'

export async function POST(requet: Request) {
    const { searchParams } = new URL(requet.url)
    const id = searchParams.get('id')
    try {
        const user = await User.findById(id)

        if (!user) {
            return new Response('User not found', { status: 400 })
        }

        return new Response(JSON.stringify(user), { status: 200 })
    } catch (err: any) {
        return new Response(err.message, { status: 500 })
    }
}