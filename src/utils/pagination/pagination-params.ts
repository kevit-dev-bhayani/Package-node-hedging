import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationParams {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;
}
