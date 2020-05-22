import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../../src/prisma'

const userOne = {
    input: {
        name: "Nandu",
        email: "nan@gmail.com",
        password: bcrypt.hashSync("nandini123")
    },
    user: undefined,
    jwt: undefined
}

const seedDatabse = async () => {
    //Delete test data
    jest.setTimeout(10000)
    await prisma.mutation.deleteManyUsers()

    //Create user one
    userOne.user = await prisma.mutation.createUser({
        data: userOne.input
    })
    userOne.jwt = jwt.sign({userId: userOne.user.id}, process.env.JWT_SECRET)
    
}

export { seedDatabse as default, userOne }