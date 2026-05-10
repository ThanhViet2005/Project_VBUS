import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const adminPassword = await bcrypt.hash('admin123', 10);
    const userPassword = await bcrypt.hash('user123', 10);

    // Create Admin
    const admin = await prisma.user.upsert({
        where: { email: 'admin@vbus.com' },
        update: {},
        create: {
            email: 'admin@vbus.com',
            fullName: 'VBUS Administrator',
            password: adminPassword,
            role: 'ADMIN',
            status: 'ACTIVE',
            phone: '0901112222'
        },
    });

    // Create another Admin
    const admin2 = await prisma.user.upsert({
        where: { email: 'thanhviet@vbus.com' },
        update: {},
        create: {
            email: 'thanhviet@vbus.com',
            fullName: 'Thanh Việt',
            password: adminPassword,
            role: 'ADMIN',
            status: 'ACTIVE',
            phone: '0903334444'
        },
    });

    // Create a regular user
    const user = await prisma.user.upsert({
        where: { email: 'user@vbus.com' },
        update: {},
        create: {
            email: 'user@vbus.com',
            fullName: 'Nguyễn Văn A',
            password: userPassword,
            role: 'USER',
            status: 'ACTIVE',
            phone: '0905556666'
        },
    });

    console.log({ admin, admin2, user });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
