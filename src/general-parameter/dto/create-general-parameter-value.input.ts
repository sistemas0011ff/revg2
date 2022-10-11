import { Field, InputType } from "@nestjs/graphql";
import { CustomUuidScalar } from "../scalars/buffer-scalar";

@InputType()
export class DailyCashierValueImput {
   @Field(() => CustomUuidScalar, { nullable: true })
   idDailyCashier:  Buffer | null;

   @Field(() => CustomUuidScalar, { nullable: true })
   idOu : Buffer | null;

   @Field()
   date : string;

   @Field(() => CustomUuidScalar, { nullable: true })
   idUser : Buffer | null;

   @Field()
   note : string;

   @Field()
   idStatus: string;

   @Field(() => CustomUuidScalar, { nullable: true })
   idDailyCashierType:  Buffer | null;
   
}

