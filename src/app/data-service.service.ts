import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
@Injectable()
export class DataServiceService {
   public token = localStorage.getItem('token')
   public headers = new HttpHeaders({
    authorization : this.token
} );
public prefix = 'https://basics-food.herokuapp.com/api'
  constructor( private http : HttpClient) { 
 
  }



  // ==================================== Types API

  
  fetchType() {
    return this.http.get(`${this.prefix}/typeplat` , {headers: this.headers })
  }

  deleteType(id) {
    return this.http.delete(`${this.prefix}/typeplat/${id}` , {headers: this.headers })
  }

  addType(type) {
    
    return this.http.post(`${this.prefix}/typeplat` , type , {headers: this.headers })
  }

  updateType(id , type) {
    
    return this.http.put(`${this.prefix}/typeplat/${id}` ,type , {headers: this.headers }) 
  }

  findTypeById(id) {
    return this.http.get(`${this.prefix}/typeplat/${id}` , {headers: this.headers })
  }

  // ==================================== End Types API



   // ==================================== USers API

    fetchUser() {
      return this.http.get(`${this.prefix}/users` ,{headers: this.headers })
    }

    deleteUser(id) {
      return this.http.delete(`${this.prefix}/users/${id}` , {headers: this.headers })
    }
    findUserById(id) {
      return this.http.get(`${this.prefix}/users/${id}` , {headers: this.headers })
    }
    updateUser(id , username) {
      const data = {
        "username" : username
      }
      return this.http.put(`${this.prefix}/users/${id}` ,data , {headers: this.headers })
    }

    addUser(user) {
    
      return this.http.post(`${this.prefix}/users' ,${user}` , {headers: this.headers })
    }
  

    // ==================================== End Users API




    // ==================================== Menus API

    addMenu(menu) {
    
        return this.http.post(`${this.prefix}/menus' ,${menu}` , {headers: this.headers })
      }

    fetchMenus() {
        return this.http.get(`${this.prefix}/menus` , {headers: this.headers })
      }
      deleteMenu(id) {
        return this.http.delete(`${this.prefix}/menus/${id}` , {headers: this.headers })
      }
      updateMenu(id , menu) {
       
        return this.http.put(`${this.prefix}/menus/${id}` ,menu , {headers: this.headers })
      }
      findMenuById(id) {
        return this.http.get(`${this.prefix}/menus/${id}` , {headers: this.headers })
      }

      showmenu() {
        return this.http.get(`${this.prefix}/showmenu`)
      }

      

    // ==================================== End Menus API



     // ==================================== Stats API
     statsPlatType() {
      return this.http.get(`${this.prefix}/menus/stats/types` , {headers: this.headers })
    }

    statsPlatPrix() {
      return this.http.get(`${this.prefix}/menus/stats/prix` , {headers: this.headers })
    }



     // ==================================== End Menus API
}
