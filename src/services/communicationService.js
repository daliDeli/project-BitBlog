import axios from "axios";
import {BASE_URL} from "../constants";

 class CommunicationService {

    getBlogPosts(successfulResponse,failedResponse){
        axios.get(`${BASE_URL}/posts`)
        .then(response => {
         
          successfulResponse(response);
        })
        .catch(error => {
          console.log(error);
          failedResponse(error);
        });
}

    getAuthorsData(successfulResponse,failedResponse){
        axios.get(`${BASE_URL}/users`)
        .then(response => {
          
          successfulResponse(response);
        })
        .catch(error => {
          console.log(error);
          failedResponse(error);
        });
}

    getSingleBlogPost(postId,successfulResponse,failedResponse){
        axios.get(`${BASE_URL}/posts/${postId}`)
        .then(response => {
          successfulResponse(response);
        })
        .catch(error => {
          console.log(error);
          failedResponse(error);
        });
}

    getSingleAuthor(authorId,successfulResponse,failedResponse){
        axios.get(`${BASE_URL}/users/${authorId}`)
        .then(response => {
          successfulResponse(response);
        })
        .catch(error => {
          console.log(error);
          failedResponse(error);
        });
}
}

export const communicationService = new CommunicationService();