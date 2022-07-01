import { PrismaClient, clientdata } from "@prisma/client"
import {  Createexpenses, expenses, Updateexpenses} from "./expenses";

export class expensesService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createexpenses): Promise<expenses> {

        try {

            return await this.prisma.expenses.create({
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

    public async getById(id: number): Promise<expenses> {

        try {

            return await this.prisma.expenses.findUnique({
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

    public async getAll(): Promise<expenses[]> {

        try {

            return await this.prisma.expenses.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updateexpenses, id: number): Promise<expenses> {

        try {

            return await this.prisma.expenses.update({
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

    public async delete(id: number): Promise<expenses> {

        try {

            return await this.prisma.expenses.delete({
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