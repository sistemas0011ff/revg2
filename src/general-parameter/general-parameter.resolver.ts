import { Resolver, Query, Mutation, Args, ResolveField, Root } from "@nestjs/graphql";
import { DailyCashierValueImput } from "./dto/create-general-parameter-value.input";
import { GeneralParameterService } from "./general-parameter.service";
import { CustomUuidScalar } from "./scalars/buffer-scalar";
import { AccoutingDailyCashier } from "./schemas/general-parameter-value.entity";

@Resolver(() => AccoutingDailyCashier)
export class GeneralParameterResolver {
   constructor(private readonly generalParameter: GeneralParameterService) {}

   
   @Mutation(() => AccoutingDailyCashier)
   createGeneralParameter(
      @Args("createGeneralParameterInput")
      createGeneralParameterInput: DailyCashierValueImput
   ) {
      return this.generalParameter.createGeneralParameter(createGeneralParameterInput);
   }

   
}
