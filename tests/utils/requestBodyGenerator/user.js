import accountRequestBody from '../../data/user/create_account.json' with { type: 'json' }
import { config } from '../../../config.js'
import { generateRandomEmail } from '../helpers.js'

export async function getCreateUserRequestBody() {
    accountRequestBody.name = config[global.env].username // getting value from config.js
    accountRequestBody.status = config[global.env].status
    accountRequestBody.gender = config[global.env].gender
    accountRequestBody.email = await generateRandomEmail()
    
    return accountRequestBody
}