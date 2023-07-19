import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {
    async getHouses() {
        const res = await api.get('api/houses')
        logger.log(res.data)
        const houses = res.data.map(data => new House(data))
        AppState.houses = houses
    }

    async createHouse(houseData) {
        const res = await api.post('api/houses', houseData)
        const house = new House(res.data)
        AppState.houses.push(house)
    }
}

export const housesService = new HousesService()
