import { PrismaClient, empdata } from "@prisma/client"
import { Createempdata, Updateempdata } from "./empdata";

export class empdataService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createempdata): Promise<empdata> {

        try {

            return await this.prisma.empdata.create({
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

    public async getById(id: number): Promise<empdata> {

        try {

            return await this.prisma.empdata.findUnique({
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

    public async getAll(): Promise<empdata[]> {

        try {

            return await this.prisma.empdata.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updateempdata, id: number): Promise<empdata> {

        try {

            return await this.prisma.empdata.update({
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

    public async delete(id: number): Promise<empdata> {

        try {

            return await this.prisma.empdata.delete({
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
            return await this.prisma.empdata.createMany({
                data:theDto
                })

        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }

    public async getCount(): Promise<number> {

        try {

            const response =  await this.prisma.empdata.aggregate({_count:{ empstatus:true},where:{empstatus:'Active'}});
            return response._count.empstatus;

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }


}