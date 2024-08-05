import User from "../model/user-model.js";

export const addUser = async (req, res) => {
    // console.log(req.body)
    try {
        const exist = await User.findOne({ sub: req.body.sub });
        if (exist) {
            res.status(200).json({ message: "User already exist" });
            return;
        }
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};
