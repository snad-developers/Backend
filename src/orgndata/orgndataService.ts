import { PrismaClient, orgndata} from "@prisma/client"
import { Createorgndata, Updateorgndata } from "./orgndata";

export class orgndataService {

    private prisma: PrismaClient;

    constructor() {

        this.prisma = new PrismaClient();


    }

    public async create(theDto: Createorgndata): Promise<orgndata> {

        try {

            return await this.prisma.orgndata.create({
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

    public async getById(id: number): Promise<orgndata> {

        try {

            return await this.prisma.orgndata.findUnique({
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

    public async getAll(): Promise<orgndata[]> {

        try {

            return await this.prisma.orgndata.findMany();

        } catch (error) {
            console.log(error);

        } finally {
            await this.prisma.$disconnect();


        }

    }

    public async update(theDto: Updateorgndata, id: number): Promise<orgndata> {

        try {

            return await this.prisma.orgndata.update({
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

    public async delete(id: number): Promise<orgndata> {

        try {

            return await this.prisma.orgndata.delete({
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