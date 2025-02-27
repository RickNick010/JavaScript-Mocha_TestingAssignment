import { createUser, deleteUser, getUser, updateUser } from '../../steps/user/user.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

describe('User', () => {
    describe(`CRUD Users`, () => {
        createUser(),
        getUser(),
        updateUser(),
        getUser(),
        deleteUser()
    })
})

