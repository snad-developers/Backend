import { PrismaClient, reg } from "@prisma/client"
import { Createreg, Updatereg } from "./reg";

export class regService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createreg): Promise<reg> {

        try {

            return await this.prisma.reg.create({
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

    public async getById(id: number): Promise<reg> {

        try {

            return await this.prisma.reg.findUnique({
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

    public async getAll(): Promise<reg[]> {

        try {

            return await this.prisma.reg.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updatereg, id: number): Promise<reg> {

        try {

            return await this.prisma.reg.update({
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

    public async delete(id: number): Promise<reg> {

        try {

            return await this.prisma.reg.delete({
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
            return await this.prisma.timesheet.createMany({
                data:theDto
                })

            //return await this.prisma.$queryRaw`SELECT t.employeeid,ed.jobtitle,ed.gender,sum(t.operationalcost) FROM empdata ed JOIN timesheet t ON t.employeeid=ed.employeenumber group by t.employeeid,ed.jobtitle,ed.gender order by 1 asc`
            //return await this.prisma.$queryRaw`SELECT * FROM fileupload`
            // return await this.prisma.$queryRaw
            // `INSERT INTO fileupload (column1,column2,column3)
            // VALUES ( ${column1},${column2},${column3})`
            // return await this.prisma.$queryRaw
            // `INSERT INTO fileupload (column1,column2,column3)
            // VALUES  ${theDto}`
            // return await this.prisma.fileupload.create({
            //     data: {
            //         ...theDto
            //     }
            // });

        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }
    public async accessData(): Promise<any> {

        try {
            return await this.prisma.$queryRaw`SELECT t.employeeid,ed.jobtitle,ed.gender,sum(t.operationalcost) FROM empdata ed JOIN timesheet t ON t.employeeid=ed.employeenumber group by t.employeeid,ed.jobtitle,ed.gender order by 1 asc`
        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }

}