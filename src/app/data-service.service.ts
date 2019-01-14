import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
@Injectable()
export class DataServiceService {
   public token = localStorage.getItem('token')
   public headers = new HttpHeaders({
    authorization : this.token
} );
  constructor( private http : HttpClient) { 
 
  }



  // ==================================== Types API

  
  fetchType() {
    return this.http.get('http://localhost:8080/api/typeplat' , {headers: this.headers })
  }

  deleteType(id) {
    return this.http.delete(`http://localhost:8080/api/typeplat/${id}` , {headers: this.headers })
  }

  addType(type) {
    
    return this.http.post('http://localhost:8080/api/typeplat' , type , {headers: this.headers })
  }

  updateType(id , type) {
    
    return this.http.put(`http://localhost:8080/api/typeplat/${id}` ,type , {headers: this.headers }) 
  }

  findTypeById(id) {
    return this.http.get(`http://localhost:8080/api/typeplat/${id}` , {headers: this.headers })
  }

  // ==================================== End Types API



   // ==================================== USers API

    fetchUser() {
      return this.http.get('http://localhost:8080/api/users' , {headers: this.headers })
    }

    deleteUser(id) {
      return this.http.delete(`http://localhost:8080/api/users/${id}` , {headers: this.headers })
    }
    findUserById(id) {
      return this.http.get(`http://localhost:8080/api/users/${id}` , {headers: this.headers })
    }
    updateUser(id , username) {
      const data = {
        "username" : username
      }
      return this.http.put(`http://localhost:8080/api/users/${id}` ,data , {headers: this.headers })
    }

    addUser(user) {
    
      return this.http.post('http://localhost:8080/api/users' , user , {headers: this.headers })
    }
  

    // ==================================== End Users API




    // ==================================== Menus API

    addMenu(menu) {
    
        return this.http.post('http://localhost:8080/api/menus' , menu , {headers: this.headers })
      }

    fetchMenus() {
        return this.http.get('http://localhost:8080/api/menus' , {headers: this.headers })
      }
      deleteMenu(id) {
        return this.http.delete(`http://localhost:8080/api/menus/${id}` , {headers: this.headers })
      }
      updateMenu(id , menu) {
       
        return this.http.put(`http://localhost:8080/api/menus/${id}` ,menu , {headers: this.headers })
      }
      findMenuById(id) {
        return this.http.get(`http://localhost:8080/api/menus/${id}` , {headers: this.headers })
      }

      showmenu() {
        return this.http.get('http://localhost:8080/api/showmenu')
      }

      

    // ==================================== End Menus API



     // ==================================== Stats API
     statsPlatType() {
      return this.http.get('http://localhost:8080/api/menus/stats/types' , {headers: this.headers })
    }

    statsPlatPrix() {
      return this.http.get('http://localhost:8080/api/menus/stats/prix' , {headers: this.headers })
    }



     // ==================================== End Menus API
}
