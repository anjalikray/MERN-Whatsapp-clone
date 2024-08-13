import Conversation from "../model/conversation-model.js";

export const getConversation = async (req, res) => {
     try {
          const senderId = req.body.senderId;
          const receiverId = req.body.receiverId;

          const exist = await Conversation.findOne({members : {$all: [receiverId ,senderId ]}});

          if(exist) {
               return res.status(200).json('Conversation already exist')
          }

          const newConversation = new Conversation({
               members: [senderId , receiverId]
          }) 

          await newConversation.save()

          return res.status(200).json('Conversation saved successfully')

     } catch (error) {
          return res.status(500).json(error.message);
     }
} 