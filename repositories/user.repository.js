const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const create = async(userData) => {
    const user = User(userData)
    const hashedPassword = await bcrypt.hash(user.password, 10)
    user.password = hashedPassword
    return user.save()
}

const findById = async(id) => {
    return User.findById(id)
}

const findByEmail = async(email) => {
    return User.findOne({email})
}

const updateData = async(id, updateData) => {
    return User.findByIdAndUpdate(id, updateData, {new: true})
}

const deleteData = async(id) => {
    return User.findByIdAndDelete(id)
}

module.exports = {
    create,
    findById,
    findByEmail,
    updateData,
    deleteData
}
