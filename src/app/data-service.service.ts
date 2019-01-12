import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
@Injectable()
export class DataServiceService {

  constructor( private http : HttpClient) { }



  // ==================================== Types API

  
  fetchType() {
    return this.http.get('http://localhost:8080/api/typeplat')
  }

  deleteType(id) {
    return this.http.delete(`http://localhost:8080/api/typeplat/${id}`)
  }

  addType(type) {
    
    return this.http.post('http://localhost:8080/api/typeplat' , type)
  }

  updateType(id , type) {
    
    return this.http.put(`http://localhost:8080/api/typeplat/${id}` ,type)
  }

  findTypeById(id) {
    return this.http.get(`http://localhost:8080/api/typeplat/${id}`)
  }

  // ==================================== End Types API



   // ==================================== USers API

    fetchUser() {
      return this.http.get('http://localhost:8080/api/users')
    }

    deleteUser(id) {
      return this.http.delete(`http://localhost:8080/api/users/${id}`)
    }
    findUserById(id) {
      return this.http.get(`http://localhost:8080/api/users/${id}`)
    }
    updateUser(id , username) {
      const data = {
        "username" : username
      }
      return this.http.put(`http://localhost:8080/api/users/${id}` ,data)
    }

    addUser(user) {
    
      return this.http.post('http://localhost:8080/api/users' , user)
    }
  

    // ==================================== End Users API




    // ==================================== Menus API

    addMenu(menu) {
    
        return this.http.post('http://localhost:8080/api/menus' , menu)
      }

    fetchMenus() {
        return this.http.get('http://localhost:8080/api/menus')
      }
      deleteMenu(id) {
        return this.http.delete(`http://localhost:8080/api/menus/${id}`)
      }
      updateMenu(id , menu) {
       
        return this.http.put(`http://localhost:8080/api/menus/${id}` ,menu)
      }
      findMenuById(id) {
        return this.http.get(`http://localhost:8080/api/menus/${id}`)
      }

      

    // ==================================== End Menus API



     // ==================================== Stats API
     statsPlatType() {
      return this.http.get('http://localhost:8080/api/menus/stats/types')
    }

    statsPlatPrix() {
      return this.http.get('http://localhost:8080/api/menus/stats/prix')
    }



     // ==================================== End Menus API
}
