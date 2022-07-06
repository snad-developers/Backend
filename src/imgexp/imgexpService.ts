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
            return await this.prisma.$queryRaw`
            WITH emp_full
            AS (SELECT u.employeeid,
                       u.firstname,
                       u.lastname
                FROM   empdata u),
            exp_full
            AS (SELECT e.employeeid,
                       e.expensecode,
                       e.amount
                FROM   empexp e
                UNION
                SELECT v.employeeid,
                       v.expensescode,
                       v.amount
                FROM   imgexp v
                UNION
                SELECT m.employeeid,
                       m.expensecode,
                       m.amount
                FROM   mgmtexp m)
       SELECT e.employeeid,
              e.firstname,
              e.lastname,
              SUM(ex.amount) AS totalexpenses
       FROM   emp_full e
              join exp_full ex
                ON ex.employeeid = e.employeeid
       WHERE  ex.expensecode IN ( 'FLIG-002', 'VISA-005', 'TRAV-001', 'INT-006',
                                  'Labour-015', 'H1B-011' )
       GROUP  BY e.employeeid,
                 e.firstname,
                 e.lastname; `
        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }


}