import { createUser, deleteUser } from '../../steps/user/user.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

describe('CRUD User', () => {
    describe(`Create User`, () => {
        createUser(),
        deleteUser()
    })
})

