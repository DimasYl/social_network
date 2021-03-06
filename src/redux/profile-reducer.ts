import {PostType, ProfilePageType} from "./store";

export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string

}

type UpdateNewMessageBodyActionType = {
    type: "UPDATE_NEW_MESSAGE_BODY"
    body: string
}

type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}



const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT =  "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 25},
        {id: 3, message: 'Blabla', likesCount: 25},
        {id: 4, message: 'Dada', likesCount: 25}
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type){
        case ADD_POST : {
            let newPost: PostType = {
                id: 5, message: state.newPostText, likesCount: 0
            }
             return  {...state,
                newPostText: '',
            posts: [...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {... state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (): ActionTypes => ({type: ADD_POST})//ТАКОЙ СИНТАКСИС
export const updateNewPostTextCreator = (body: string): ActionTypes => ({
    type: UPDATE_NEW_POST_TEXT, newText: body
})


export default profileReducer