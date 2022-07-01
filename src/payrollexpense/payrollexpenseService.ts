import { PrismaClient, payrollexpense } from "@prisma/client"
import { Createpayrollexpense, Updatepayrollexpense } from "./payrollexpense";

export class payrollexpenseService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createpayrollexpense): Promise<payrollexpense> {

        try {

            return await this.prisma.payrollexpense.create({
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

    public async getById(id: number): Promise<payrollexpense> {

        try {

            return await this.prisma.payrollexpense.findUnique({
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

    public async getAll(): Promise<payrollexpense[]> {

        try {

            return await this.prisma.payrollexpense.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updatepayrollexpense, id: number): Promise<payrollexpense> {

        try {

            return await this.prisma.payrollexpense.update({
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

    public async delete(id: number): Promise<payrollexpense> {

        try {

            return await this.prisma.payrollexpense.delete({
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
    public async payrollaccessdata(): Promise<any> {

        try {
            return await this.prisma.$queryRaw`SELECT p.employeeid,ed.firstname,ed.lastname,sum(p.totalpayroll)
            FROM empdata ed
            JOIN payrollexpense p ON p.employeeid=ed.employeeid
            group by p.employeeid,ed.firstname,ed.lastname order by 1 asc`
        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }




    public async getCount(): Promise<number> {

        try {

            const response =  await this.prisma.payrollexpense.aggregate({_sum:{ payrollexpense:true}});
            return response._sum.payrollexpense;

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }
}


