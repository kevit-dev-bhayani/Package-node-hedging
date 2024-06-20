import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

export function Paginated<T>(classRef: Type<T>): any {
  @ObjectType(`${classRef.name}metadata`, { isAbstract: true })
  class PageMetadata {
    @Field()
    totalCount: number;
  }

  @ObjectType(`${classRef.name}Edge`, { isAbstract: true })
  class PaginatedType {
    @Field(() => [classRef])
    data: T[];

    @Field()
    meta?: PageMetadata;
  }

  return PaginatedType;
}
