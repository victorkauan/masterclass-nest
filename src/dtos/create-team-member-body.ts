import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty({
    message: 'The member name should not be empty',
  })
  @Length(5, 100, {
    message: 'The member name must be longer than or equal to 5 characters',
  })
  name: string;
  @IsNotEmpty({
    message: 'The member function should not be empty',
  })
  function: string;
}
