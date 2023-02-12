import { Controller, Post, Body } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { TeamMembersRepository } from './repositories/team-members-repository';

@Controller('app')
export class AppController {
  constructor(private teamMembersRepository: TeamMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    this.teamMembersRepository.create(name, memberFunction);
  }
}
