import { request } from '../../utils/requests.js'
import { getCreateUserRequestBody } from '../../utils/requestBodyGenerator/user.js'
import { getCreatePostRequestBody } from '../../utils/requestBodyGenerator/posts.js'
export async function createUser() {
    it('Create user account', async function () {
        const requestBody = await getCreateUserRequestBody()
        await request(this, 'POST', '/users', requestBody, true, 
            {
                statusCode : 201,
                expectedFields: ['email'],
                expectedTypes:  [
                                    {path: 'id', type: 'number'},
                                    {path: 'name', type: 'string'},
                                    {path: 'gender', type: 'string'},
                                    {path: 'status', type: 'string'}
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

export async function createUserPost() {
    it('Create user post', async function () { 
        const requestBody = await getCreatePostRequestBody()
        await request(this, 'POST', `/users/${global.executionVariables['userId']}/posts`, requestBody, true,  
            {
                statusCode : 201,
                expectedFields: ['title', 'body', 'user_id', 'id'],
                expectedTypes:  [
                                    {path: 'id', type: 'number'},
                                    {path: 'user_id', type: 'number'},
                                    {path: 'title', type: 'string'},
                                    {path: 'body', type: 'string'}
                                ],
                executionVariables: 
                                [
                                    {path: 'id', name: 'postId'}, 
                                    {path: 'user_id', name: 'userId'}, 
                                    {path: 'title', name: 'postTitle'}, 
                                    {path: 'body', name: 'postBody'}
                                ],
                expectedValues: [   
                                    {path: 'title', value: requestBody.title},
                                    {path: 'body', value: requestBody.body}
                                ]
            }
        )
    })
}


export async function getUserPost() {
    it('Get user post', async function () {
        const response = await request(this, 'GET', `/posts/${global.executionVariables['postId']}`, undefined, true,
            {
                statusCode: 200,
                expectedFields: ['title', 'body', 'user_id', 'id'],
                expectedTypes: [
                                { path: 'id', type: 'number' },
                                { path: 'user_id', type: 'number' },
                                { path: 'title', type: 'string' },
                                { path: 'body', type: 'string' }
                               ],
                expectedValues: [   
                                {path: 'title', value: global.executionVariables['postTitle']},
                                {path: 'body', value: global.executionVariables['postBody']}
                            ]
            }
        );
    })
}

export async function deleteUserPost() {
    it('Delete user post', async function () {
        await request(this, 'DELETE', `/posts/${global.executionVariables['postId']}`, undefined, true,
            {
                statusCode : 204
            }
        )
    })
}

export async function deleteUser() {
    it('Delete user account', async function () { 
        await request(this, 'DELETE', `/users/${global.executionVariables['userId']}`, undefined, true,  
            {
                statusCode : 204
            }
        )
    })
}
