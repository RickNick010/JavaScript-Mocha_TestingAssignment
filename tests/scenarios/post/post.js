import { createUser, deleteUser, createUserPost, getUserPost, deleteUserPost} from '../../steps/posts/posts.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

describe('CRUD Posts', () => {
    createUser(),
    createUserPost(),
    getUserPost(),
    deleteUserPost(),
    deleteUser()
})

