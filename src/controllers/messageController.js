import messageModel from "../models/messagesModel.js";

class messages {

    static async sendMessage(req, res) {
        try {
            const { username, email, subject, message } = req.body;
            const newMessage = await messageModel.create({ username, email, subject, message });
            res.status(200).json({
                message: "Message has been successfully sent",
                data: newMessage 
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
    static async displayMessage(req, res) {
        try {
            const allQueries = await messageModel.find();
            res.status(200).json({
                message: `Total Messages:${allQueries.length}`,
                data: allQueries
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
}

export default messages
