import { request } from '../../utils/requests.js'
import { getCreateUserRequestBody } from '../../utils/requestBodyGenerator/user.js'

export async function createUser() {
    it('Create user account', async function () {
        const requestBody = await getCreateUserRequestBody()
        await request(this, 'POST', '/users', requestBody, true, 
            {
                statusCode : 201,
                expectedFields: ['email'],
                expectedTypes:  [
                                    {path: 'name', type: 'string'},
                                    {path: 'id', type: 'number'}
                                ],
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'gender', value: requestBody.gender},
                                    {path: 'status', value: requestBody.status}
                                ],
                executionVariables: 
                                [
                                    {path: 'id', name: 'userId'}, 
                                    {path: 'name', name: 'userName'}, 
                                    {path: 'email', name: 'userEmail'},
                                    {path: 'gender', name: 'userGender'},
                                    {path: 'status', name: 'userStatus'} 
                                ]
            }
        )
    })
}


export async function createUserWithNoToken() {
    it('Create user account with no token', async function () {
        const requestBody = await getCreateUserRequestBody()
        await request(this, 'POST', '/users', requestBody, false, 
            {
                statusCode : 401,
                expectedValues: [
                    {path: 'message', value: 'Authentication failed'}
                ]
            }
        )
    })
}

export async function createUserTodo() {
    it('Create user todo', async function () {
        const requestBody = await getCreateUserRequestBody()
        await request(this, 'POST', `/users/${global.executionVariables['userId']}/todos`, requestBody, true, 
            {
                statusCode : 201,
                expectedTypes:  [
                                    {path: 'name', type: 'string'},
                                    {path: 'id', type: 'number'}
                                ],
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'gender', value: requestBody.gender},
                                    {path: 'status', value: requestBody.status}
                                ],
                executionVariables: 
                                [
                                    {path: 'id', name: 'userId'}, 
                                    {path: 'name', name: 'userName'}, 
                                    {path: 'email', name: 'userEmail'},
                                    {path: 'gender', name: 'userGender'},
                                    {path: 'status', name: 'userStatus'} 
                                ]
            }
        )
    })
}


export async function updateUser() {
    it('Update user account', async function () {
        const requestBody = await getCreateUserRequestBody()
        await request(this, 'PATCH', `/users/${global.executionVariables['userId']}`, requestBody, true, 
            {
                statusCode : 200,
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'gender', value: requestBody.gender},
                                    {path: 'status', value: requestBody.status},
                                    {path: 'email', value: requestBody.email}
                                ],
                executionVariables: [ 
                                        {path: 'email', name: 'userEmail'}   //updates user details and returns updated userEmail variable
                                    ]
            }
        )
    })
}
export async function updateUserWithNoToken() {
    it('Update user account with no token', async function () {
        const requestBody = await getCreateUserRequestBody()
        await request(this, 'PATCH', `/users/${global.executionVariables['userId']}`, requestBody, false, 
            {
                statusCode : 404,
                expectedValues: [
                    {path: 'message', value: 'Resource not found'}
                ]
            }
        )
    })
}


export async function deleteUser() {
    it('Delete user account', async function () { // test name
        await request(this, 'DELETE', `/users/${global.executionVariables['userId']}`, undefined, true,  //replaced requestBody with undefined beacause requestBody is not needed for delete request
            {
                statusCode : 204
            }
        )
    })
}

export async function getUser() {
    it('Get user account', async function () { // test name
        await request(this, 'GET', `/users/${global.executionVariables['userId']}`, undefined, true,  //replaced requestBody with undefined beacause requestBody is not needed for delete request
            {
                statusCode : 200,
                expectedValues: [
                    {path: 'name', value: global.executionVariables['userName']},
                    {path: 'gender', value: global.executionVariables['userGender']},
                    {path: 'status', value: global.executionVariables['userStatus']},
                    {path: 'email', value: global.executionVariables['userEmail']},
                    {path: 'id', value: global.executionVariables['userId']}
                ]
            }
        )
    })
}

export async function deleteAlreadyDeletedUser() {
    it('Delete already deleted user account', async function () { // test name
        await request(this, 'DELETE', `/users/${global.executionVariables['userId']}`, undefined, true,  //replaced requestBody with undefined beacause requestBody is not needed for delete request
            {
                statusCode : 404,
                expectedValues: [
                    {path: 'message', value: 'Resource not found'}
                ]
            }
        )
    })
}