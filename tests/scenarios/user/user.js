import { createUser, deleteUser, getUser, updateUser, deleteAlreadyDeletedUser, createUserWithNoToken, updateUserWithNoToken } from '../../steps/user/user.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
    console.log("Before all tests")
    createUser()
})


after(async () => 
    {
        console.log('After all tests')
        deleteUser()
    })

     
describe.skip('User', () => {
    describe(`CRUD Users`, () => {
        createUser(),
        getUser(),
        updateUser(),
        getUser(),
        deleteUser()
    })
})


describe.skip('Delete already deleted user', () => {
    createUser(),
    deleteUser(),
    deleteAlreadyDeletedUser()
})

describe.skip('User with no token', () => {
    createUserWithNoToken(),
    updateUserWithNoToken()
})


