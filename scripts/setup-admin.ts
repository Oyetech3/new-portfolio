import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import readline from 'readline'

const prisma = new PrismaClient()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function question(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, resolve)
  })
}

async function main() {
  console.log('\n📝 Admin User Setup\n')

  const email = await question('Enter admin email: ')
  const password = await question('Enter admin password (min 8 chars): ')
  const confirmPassword = await question('Confirm password: ')

  if (password !== confirmPassword) {
    console.log('Passwords do not match')
    rl.close()
    return
  }

  if (password.length < 8) {
    console.log('Password must be at least 8 characters')
    rl.close()
    return
  }

  try {
    const existingAdmin = await prisma.admin.findUnique({
      where: { email },
    })

    if (existingAdmin) {
      console.log('Admin user already exists with this email')
      rl.close()
      return
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = await prisma.admin.create({
      data: {
        email,
        password_hash: hashedPassword,
      },
    })

    console.log(`\nAdmin user created successfully!`)
    console.log(` Email: ${admin.email}`)
    console.log(` You can now log in with this email and password\n`)
  } catch (error) {
    console.error(' Error creating admin user:', error)
  } finally {
    rl.close()
    await prisma.$disconnect()
  }
}

main()