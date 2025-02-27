import postRequestBody from '../../data/post/create_post.json' assert { type: 'json' }
import { config } from '../../../config.js'

export async function getCreatePostRequestBody() {
    postRequestBody.title = "job";
    postRequestBody.body = "pending";
    return postRequestBody;
}