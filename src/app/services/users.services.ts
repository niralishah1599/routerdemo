import { Injectable } from '@angular/core';
import {Iusers} from 'src/app/models/users.model';

@Injectable({
    providedIn: 'root'
})
export class  UsersService
{
 
    public usersList:Iusers[]=
    [
        {'email':'s@g.c','password':'shah'}
    ]
}