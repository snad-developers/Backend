import { PrismaClient, reg } from "@prisma/client"
import { login } from "../login/login";
import { Createreg, Updatereg } from "./reg";

export class regService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createreg): Promise<any> {

        try {

            return await this.prisma.reg.create({
                data: {
                    ...theDto
                }
            });

        } catch (error) {
            console.log(error);
            if (error.meta.target == "email" && error.code == 'P2002') {
                return "user already exists with this email"
              }

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
            return await this.prisma.$queryRaw`SELECT t.clientid,c.clientname,sum(t.receivables)
            FROM clientdata c
            JOIN timesheet t ON t.clientid=c.clientcode WHERE t.receivablespaid='No'
            group by t.clientid,c.clientname order by 1 asc`
        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }
    public async validUser(theDto: login,value:string): Promise<any> {

        try {
            if(value == 'ALL'){
            return await this.prisma.$queryRaw`select * from reg where email = ${theDto.email} AND password = ${theDto.password} AND entity = ${theDto.entity} AND status = 'Approved'`
            }
            if(value == 'Email')
            {
                return await this.prisma.$queryRaw`select * from reg where email = ${theDto.email}`  
            }
            if(value == 'Password')
            {
                return await this.prisma.$queryRaw`select * from reg where email = ${theDto.email} AND password = ${theDto.password}`  
            }
            if(value == 'Entity')
            {
                return await this.prisma.$queryRaw`select * from reg where email = ${theDto.email} AND password = ${theDto.password} AND entity = ${theDto.entity}`  
            }
            if(value == 'status')
            {
                return await this.prisma.$queryRaw`select * from reg where email = ${theDto.email} AND password = ${theDto.password} AND entity = ${theDto.entity} AND status = 'Approved'`
            }
        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }
    

}