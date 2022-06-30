import { PrismaClient, empexp } from "@prisma/client"
import { Createempexp, Updateempexp} from "./empexp";

export class empexpService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createempexp): Promise<empexp> {

        try {

            return await this.prisma.empexp.create({
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

    public async getById(id: number): Promise<empexp> {

        try {

            return await this.prisma.empexp.findUnique({
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

    public async getAll(): Promise<empexp[]> {

        try {

            return await this.prisma.empexp.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updateempexp, id: number): Promise<empexp> {

        try {

            return await this.prisma.empexp.update({
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

    public async delete(id: number): Promise<empexp> {

        try {

            return await this.prisma.empexp.delete({
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
    public async employeeaccessdata(): Promise<any> {

        try {
            return await this.prisma.$queryRaw`SELECT e.employeeid,ed.firstname,ed.lastname,sum(e.amount)
            FROM empdata ed
            JOIN empexp e ON e.employeeid=ed.employeeid
            group by e.employeeid,ed.firstname,ed.lastname order by 1 asc`
        } catch (error) {
            
            console.log(error);

        } finally {

            await this.prisma.$disconnect();

        }

    }



}