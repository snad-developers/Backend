import { PrismaClient, mgmtexp } from "@prisma/client"
import { Createmgmtexp, Updatemgmtexp } from "./mgmtexp";

export class mgmtexpService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createmgmtexp): Promise<mgmtexp> {

        try {

            return await this.prisma.mgmtexp.create({
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

    public async getById(id: number): Promise<mgmtexp> {

        try {

            return await this.prisma.mgmtexp.findUnique({
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

    public async getAll(): Promise<mgmtexp[]> {

        try {

            return await this.prisma.mgmtexp.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updatemgmtexp, id: number): Promise<mgmtexp> {

        try {

            return await this.prisma.mgmtexp.update({
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

    public async delete(id: number): Promise<mgmtexp> {

        try {

            return await this.prisma.mgmtexp.delete({
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


}