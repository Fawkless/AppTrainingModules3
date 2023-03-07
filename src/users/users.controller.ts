import { Controller, Delete, Get, HttpException, HttpStatus } from '@nestjs/common';
import { Body, Param, Patch, Post, Put, UseGuards, UsePipes } from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { PostUsersDto } from './dto/postUsers.dto';
import { PatchUsersDto } from './dto/patchUsers.dto';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AuthGuard } from './guards/guard';
import { UseInterceptors } from '@nestjs/common/decorators/core/use-interceptors.decorator';
import { Interceptor } from './interceptors/interceptor';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  
  @Get()
  @UseInterceptors(Interceptor)
  listUsers() {
    return this.userService.listOfUsers();
  }
  
  @Get(':uuid')
  @UseInterceptors(Interceptor)
  listId(@Param('uuid') id: number) {
    const list = this.userService.listById(id);
    if (!list) throw new HttpException ("El usuario no existe", 401)
    return list;
  }
  
  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(Interceptor)
  @UsePipes(new ValidationPipe())
  postUser(@Body() newUser: PostUsersDto) {
    return this.userService.postUser(newUser);
  }
  
  @Put(':uuid')
  @UseGuards(AuthGuard)
  @UseInterceptors(Interceptor)
  @UsePipes(new ValidationPipe())
  updateUser(@Param('uuid') id: number, @Body() newUser: PostUsersDto) {
    return this.userService.updateUser(id, newUser);
  }
  
  @Patch(':uuid')
  @UseGuards(AuthGuard)
  @UseInterceptors(Interceptor)
  @UsePipes(new ValidationPipe())
  modifyUser(@Param('uuid') id: number, @Body() newUser: PatchUsersDto) {
    return this.userService.modifyUser(id, newUser);
  }
  
  @Delete(':uuid')
  @UseGuards(AuthGuard)
  deleteUser(@Param('uuid') id: number) {
    return this.userService.deleteUser(id);
  }
}
