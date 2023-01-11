import type { NextApiRequest, NextApiResponse } from 'next';
import API from "@/src/utils/axiosInstance"

const BiteVisible = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const {
        query: { id },
        body,
        method,
    } = req

    switch (method) {
        case 'PUT': {
            const response = await API.put(`bites/${id}/set_visible`, body)
            return res.status(response.status).json(response.data)
        }
        default: {
            res.setHeader('Allow', ['PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    }
}

export default BiteVisible