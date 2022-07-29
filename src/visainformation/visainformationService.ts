import { PrismaClient, visainformation } from "@prisma/client"
import {  createvisainformation, updatevisainformation} from "./visainformation";

export class visainformationService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto): Promise<any> {

        try {

            return await this.prisma.visainformation.create({
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

    public async getById(id: number): Promise<visainformation> {

        try {

            return await this.prisma.visainformation.findUnique({
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

    public async getAll(): Promise<visainformation[]> {

        try {

            return await this.prisma.visainformation.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }
    public async getbyID(theDto: createvisainformation): Promise<any> {

        try {
            return await this.prisma.$queryRaw`select * from visainformation where employeeid = ${theDto.employeeid}`
           

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }
    public async update(theDto: updatevisainformation, id: number): Promise<visainformation> {

        try {

            return await this.prisma.visainformation.update({
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

    public async delete(id: number): Promise<visainformation> {

        try {

            return await this.prisma.visainformation.delete({
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
            return await this.prisma.visainformation.createMany({
                data:theDto
                })

        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }


}