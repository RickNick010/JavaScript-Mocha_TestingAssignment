import { request } from '../../utils/requests.js'
import { getCreateUserRequestBody } from '../../utils/requestBodyGenerator/user.js'

export async function createUser() {
    it('Create user account', async function () {
        const requestBody = await getCreateUserRequestBody()
        await request(this, 'POST', '/users', requestBody, true, 
            {
                statusCode : 201,
                expectedFields: ['email'],
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'gender', value: requestBody.gender},
                                    {path: 'status', value: requestBody.status}
                                ],
                executionVariables: [
                                        {path: 'id', name: 'userId'}, 
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