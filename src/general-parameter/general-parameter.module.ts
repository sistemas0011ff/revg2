import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { GeneralParameterService } from "./general-parameter.service";
import { GeneralParameterResolver } from "./general-parameter.resolver";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "@prisma/client/runtime";

@Module({   
   providers: [GeneralParameterResolver, GeneralParameterService, PrismaService],
})
export class GeneralParameterModule {}


