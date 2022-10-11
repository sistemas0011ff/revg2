import { ObjectType, Field } from "@nestjs/graphql";
import { CustomUuidScalar } from "../scalars/buffer-scalar";
// import { GeneralParameter } from "./general-parameter.entity";
@ObjectType()
export class AccoutingDailyCashier {
   
   @Field(() => CustomUuidScalar)
   idDailyCashier: Buffer;

   @Field()
   idOu: string;

   @Field()
   date: Date;

   @Field()
   idUser: string;

   @Field()
   note: string;
   
   @Field({ nullable: true })
   idDailyCashierType?: string

   @Field()
   idStatus: string

   @Field({ nullable: true })   
   idUserCreate?: string
   
   @Field({ nullable: true })
   createdAt:Date;

   @Field({ nullable: true })
   idUserUpdate: string

   @Field({ nullable: true })
   updatedAt :  Date
}
/*


   @Field(() => GeneralParameter, { nullable: true })
   idgeneralparameter?: GeneralParameter | null;

   @Field()
   name: string;

   @Field()
   shortname: string;

   @Field({ nullable: true })
   value?: string;

   @Field({ nullable: true })
   type?: string;

   @Field({ nullable: true })
   idusercreate?: string;

   @Field({ nullable: true })
   createdate?: Date;

   @Field({ nullable: true })
   iduserupdate?: string;

   @Field({ nullable: true })
   updatedate?: Date;
}

*/