import { PrismaClient, compensation } from "@prisma/client"
import {  Createcompensation, Updatecompensation} from "./compensation";
export class compensationService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createcompensation): Promise<compensation> {

        try {

            return await this.prisma.compensation.create({
                data: {
                    ...theDto
                }
            });

        } catch (error) {
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }

    public async getById(id: number): Promise<compensation> {

        try {

            return await this.prisma.compensation.findUnique({
                where: {
                    id
                }
            });

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async getAll(): Promise<compensation[]> {

        try {

            return await this.prisma.compensation.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updatecompensation, id: number): Promise<compensation> {

        try {

            return await this.prisma.compensation.update({
                where: {
                    id: id
                },
                data: {
                    ...theDto
                }
            })

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async delete(id: number): Promise<compensation> {

        try {

            return await this.prisma.compensation.delete({
                where: {
                    id
                }
            });

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async fileupload(theDto): Promise<any> {

        try {
            return await this.prisma.compensation.createMany({
                data:theDto
                })

        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }


}