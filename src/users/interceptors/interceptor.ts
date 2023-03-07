import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { PostUsersDto } from "../dto/postUsers.dto";


export class Interceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
        .handle()
        .pipe(map((user: PostUsersDto) => {
          if(!user.hasOwnProperty('apellido')){
              user.apellido = 'null';
          }
          return user; 
          }
      )
     
    );
    }
    }

  