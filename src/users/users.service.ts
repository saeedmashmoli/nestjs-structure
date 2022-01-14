import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {};
    create(createUserInput: CreateUserInput) {
        const newUser = this.userRepository.create(createUserInput);
        return this.userRepository.save(newUser);
    }

    async findAll() {
        return this.userRepository.find();
    }
    findOneByUser(username: string) {
        return this.userRepository.findOne({username});
    }

    findOne(id: number) {
        return this.userRepository.findOneOrFail(id);
    }

    update(id: number, updateUserInput: UpdateUserInput) {
        return this.userRepository.update(id,updateUserInput);
    }

    remove(id: number) {
        return this.userRepository.delete(id);
    }
}
