import { PrismaClient, education } from "@prisma/client"
import {  Createeducation, Updateeducation} from "./education";

export class educationService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createeducation): Promise<education> {

        try {

            return await this.prisma.education.create({
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

    public async getById(id: number): Promise<education> {

        try {

            return await this.prisma.education.findUnique({
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

    public async getAll(): Promise<education[]> {

        try {

            return await this.prisma.education.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updateeducation, id: number): Promise<education> {

        try {

            return await this.prisma.education.update({
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

    public async delete(id: number): Promise<education> {

        try {

            return await this.prisma.education.delete({
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
            return await this.prisma.education.createMany({
                data:theDto
                })

        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }


}