import { PrismaClient, timesheet } from "@prisma/client"
import { Createtimesheet, Updatetimesheet } from "./timesheet";

export class timesheetService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createtimesheet): Promise<timesheet> {

        try {

            return await this.prisma.timesheet.create({
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

    public async getById(id: number): Promise<timesheet> {

        try {

            return await this.prisma.timesheet.findUnique({
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

    public async getAll(): Promise<timesheet[]> {

        try {

            return await this.prisma.timesheet.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updatetimesheet, id: number): Promise<timesheet> {

        try {

            return await this.prisma.timesheet.update({
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

    public async delete(id: number): Promise<timesheet> {

        try {

            return await this.prisma.timesheet.delete({
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