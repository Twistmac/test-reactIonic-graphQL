import { Resolver, Query, Mutation, Args, Int, Float, Directive } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Mutation(() => Client)
  createClient(@Args('createClientInput') createClientInput: CreateClientInput) {
    return this.clientService.create(createClientInput);
  }

  @Query(() => [Client], { name: 'listClient' })
  findAll() {
    return this.clientService.findAll();
  }

  @Query(() => Float, { name: 'clientMean' })
  getMean() {
    return this.clientService.getMean();
  }

}
