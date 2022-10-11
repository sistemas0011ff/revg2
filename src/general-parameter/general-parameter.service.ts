import { Injectable } from "@nestjs/common";

// import { CreateGeneralParameterInput } from "./dto/create-general-parameter.input";
// import { UpdateGeneralParameterInput } from "./dto/update-general-parameter.input";

import { PrismaService } from "../prisma.service";
import { DailyCashierValueImput } from "./dto/create-general-parameter-value.input";

@Injectable()
export class GeneralParameterService {
   constructor(private readonly prisma: PrismaService) {}

   // async resolveGeneralParameterValue(idgeneralparameter: Buffer) {
   //    return await this.prisma.generalparametervalue.findMany({
   //       where: {
   //          idgeneralparameter,
   //       },
   //    });
   // }

   // async getGeneralParameters() {
   //    return await this.prisma.generalparameter.findMany();
   // }

   // async getGeneralParameterById(idgeneralparameter: Buffer) {
   //    return await this.prisma.generalparameter.findUnique({
   //       where: {
   //          idgeneralparameter,
   //       },
   //    });
   // }

   async createGeneralParameter(data: DailyCashierValueImput) {

      
      const generalParameter = await this.prisma.dailyCashier.create({
         data: {            
            idDailyCashier :  data.idDailyCashier,
            idOu : data.idOu,
            date : data.date,
            idUser : data.idUser,
            note : data.note,
            idStatus: data.idStatus,
            idDailyCashierType: data.idDailyCashierType
         },
      });
      
      return generalParameter;
      
   }

   // async updateGeneralParameter(data: UpdateGeneralParameterInput) {
   //    const generalParameter = await this.prisma.generalparameter.update({
   //       where: { idgeneralparameter: data.idgeneralparameter },
   //       data: {
   //          name: data.name,
   //          shortname: data.shortname,
   //          generalparametervalue: {
   //             updateMany: data.generalparametervalue
   //                .filter((item) => !!item.idgeneralparametervalue)
   //                .map((item) => ({
   //                   where: {
   //                      idgeneralparametervalue: item.idgeneralparametervalue,
   //                   },
   //                   data: item,
   //                })),
   //             deleteMany: {
   //                idgeneralparametervalue: {
   //                   notIn: data.generalparametervalue
   //                      .filter((item) => !!item.idgeneralparametervalue)
   //                      .map((item) => item.idgeneralparametervalue),
   //                },
   //             },
   //             createMany: {
   //                data: data.generalparametervalue
   //                   .filter((item) => !item.idgeneralparametervalue)
   //                   .map((item) => ({
   //                      ...item,
   //                      idgeneralparametervalue: undefined,
   //                   })),
   //             },
   //          },
   //       },
   //    });

   //    return generalParameter;
   // }

   // async deleteGeneralParameter(idgeneralparameter: Buffer) {
   //    await this.prisma.generalparametervalue.deleteMany({
   //       where: { idgeneralparameter },
   //    });

   //    const generalParameter = await this.prisma.generalparameter.delete({
   //       where: { idgeneralparameter },
   //    });

   //    return generalParameter;
   // }
}
