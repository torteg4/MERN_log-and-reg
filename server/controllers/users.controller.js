const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    findAll: (req, res) => {
        User.find()
            .then(allUsers => res.json(allUsers))
            .catch(err => res.status(400).json(err))
    },

    register: (req, res) => {
        console.log(req.body)
        console.log(process.env.SECRET_KEY)

        User.create(req.body)
            .then(newUser => {
                const userToken = jwt.sign({
                    id: newUser._id
                }, process.env.SECRET_KEY)

                res
                    .cookie("usertoken", userToken, {httpOnly:true})
                    .json({message: "Successful registration", user: {
                        id: newUser._id,
                        // username: user.username
                    }})
            })
            .catch(err => 
                // {console.log(err)
                res.status(400).json({ message: "Problem with registration", error: err }))
    },

    login: async (req,res) => { 
        const user = await User.findOne({ email: req.body.email })
        // exclamation point before user basically means if not user. Means user will be true if not null. 
        if (!user) {
            return res.status(400).json({ message:"Invalid login" })
        }
        console.log(user)

            //* CONGRATS FOUND USER
            //! if you flip req.body.password and user.password, the code will break
        const correctPassword = await bcrypt.compare(req.body.password, user.password)
            // this wording means it will either return true or false. So either the passwords match or they don't
        if (!correctPassword) {
            return res.status(400).json({ message: "Invalid login" })
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        res
            .cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    },

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },

}