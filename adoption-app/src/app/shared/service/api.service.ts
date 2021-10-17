import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Animal } from '../model/animal';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: String = "http://localhost:3000/api";
  users$ = new Subject<User[]>();
  animals$ = new Subject<Animal[]>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8',
    }),
  };

  constructor(public http: HttpClient) { }

  // get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`).pipe(
      tap((users: any) => this.users$.next(users))
    )
  }

  // get one user
  getUser(userId: String): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`);
  }

  // register user
  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user, this.httpOptions)
  }

  // replace user
  replaceUser(userId: String, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${userId}`, user);
  }

  // update user info
  updateUser(userId: String, params: Object): Observable<Object> {
    return this.http.patch<Object>(`${this.baseUrl}/users/${userId}`, params);
  }

  // delete a user
  deleteUser(userId: String): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/users/${userId}`);
  }

    // get all animals
    getAnimals(): Observable<Animal[]> {
      return this.http.get<Animal[]>(`${this.baseUrl}/animals`).pipe(
        tap((animals: any) => {
          this.animals$.next(animals);
        })
      );
    }
  
    // get one animal
    getAnimal(animalId: String): Observable<Animal> {
      return this.http.get<Animal>(`${this.baseUrl}/animals/${animalId}`);
    }
  
    // add animal
    addAnimal(animal: Animal): Observable<Animal> {
      return this.http.post<Animal>(
        `${this.baseUrl}/animals`,
        animal,
        this.httpOptions
      );
    }
  
    // update animal info
    updateAnimal(animalId: String, params: Object): Observable<Object> {
      return this.http.patch<Object>(`${this.baseUrl}/animals/${animalId}`, params);
    }
  
    deleteAnimal(animalId: String): Observable<Animal> {
      return this.http.delete<Animal>(`${this.baseUrl}/animals/${animalId}`);
    }

}
