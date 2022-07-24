import { PrismaClient,jobinformation } from "@prisma/client"
import {  Createjobinformation, Updatejobinformation} from "./jobinformation";

export class jobinformationService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto): Promise<any> {

        try {

            return await this.prisma.jobinformation.create({
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

    public async getById(id: number): Promise<jobinformation> {

        try {

            return await this.prisma.jobinformation.findUnique({
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

    public async getAll(): Promise<jobinformation[]> {

        try {

            return await this.prisma.jobinformation.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updatejobinformation, id: number): Promise<jobinformation> {

        try {

            return await this.prisma.jobinformation.update({
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

    public async delete(id: number): Promise<jobinformation> {

        try {

            return await this.prisma.jobinformation.delete({
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
            return await this.prisma.jobinformation.createMany({
                data:theDto
                })

        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }


}