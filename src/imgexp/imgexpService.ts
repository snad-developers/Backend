import { PrismaClient, imgexp} from "@prisma/client"
import { Createimgexp,   Updateimgexp } from "./imgexp";

export class imgexpService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createimgexp): Promise<imgexp> {

        try {

            return await this.prisma.imgexp.create({
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

    public async getById(id: number): Promise<imgexp> {

        try {

            return await this.prisma.imgexp.findUnique({
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

    public async getAll(): Promise<imgexp[]> {

        try {

            return await this.prisma.imgexp.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updateimgexp, id: number): Promise<imgexp> {

        try {

            return await this.prisma.imgexp.update({
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

    public async delete(id: number): Promise<imgexp> {

        try {

            return await this.prisma.imgexp.delete({
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
            return await this.prisma.imgexp.createMany({
                data:theDto
                })

        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }

    public async operational(): Promise<any> {

        try {
            return await this.prisma.$queryRaw`SELECT ed.employeeid,ed.firstname,ed.lastname,sum(e.amount) as totalexpenses FROM empdata ed
            INNER JOIN empexp e ON e.employeeid=ed.employeeid
            WHERE expensecode in ('TRAV-001','INT-009','FLIG-002','VISA-005')
            GROUP BY ed.employeeid,ed.firstname,ed.lastname
            union
            SELECT ed.employeeid,ed.firstname,ed.lastname,sum(e.amount) as totalexpenses FROM empdata ed
            INNER JOIN mgmtexp e ON e.employeeid=ed.employeeid
            WHERE expensecode in ('TRAV-001','INT-009','FLIG-002','VISA-005')
            GROUP BY ed.employeeid,ed.firstname,ed.lastname
            union
            SELECT ed.employeeid,ed.firstname,ed.lastname,sum(e.amount) as totalexpenses FROM empdata ed
            INNER JOIN imgexp e ON e.employeeid=ed.employeeid
            WHERE expensescode in ('H1 transfer')
            GROUP BY ed.employeeid,ed.firstname,ed.lastname order by 1 asc;`
        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }


}