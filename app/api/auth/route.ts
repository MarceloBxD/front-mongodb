import {User} from '../../../models/User'

import bcrypt from 'bcrypt'

export async function create_user(req:any, res:any) {
  try {
    const { name, email, password, confirmPassword, role } = req.body
    const saltRounds = 10

    if (password !== confirmPassword) {
      res.status(400).json({
        message: "Passwords don't match",
      })
    }

    let userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({
        error: "User already exists",
      })
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds)

    let newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    })

    res.status(201).json({
      message: "Usuário criado com sucesso",
      user: {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    })
  } catch (err) {
    console.log("Erro ao criar usuário", err)
    res.status(400).json({
      error: err,
    })
  }
}

export async function get_user(req:any, res:any) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(400).json({
                error: "User not found",
            });
        }

        return res.status(200).json({
            message: "User found",
            user,
        });
    } catch (err) {
        return res.status(400).json({
            message: err,
        });
    }
}