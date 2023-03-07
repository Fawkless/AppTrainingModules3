import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { userMiddlewarePut } from './users/middlewares/user.middleware.put';
import { UsersModule } from './users/users.module';
import { userMiddleware } from './users/middlewares/user.middleware';


@Module({
  imports: [UsersModule],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
       .apply(userMiddlewarePut)
       .forRoutes({ path: 'users/:uuid', method: RequestMethod.PUT});
    consumer
       .apply(userMiddleware)
       .exclude({ path: 'users/:uuid', method: RequestMethod.PUT})
       .forRoutes('*')
       
      }

}
