import { useContext, useState, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";

import ChatFooter from "./ChatFooter";
import MessageSingle from "./MessageSingle";

const Wrapper = styled(Box)`
    background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
    background-size: 50%;
`;

const StyledFooter = styled(Box)`
    height: 55px;
    background: #ededed;
    // position: absolute;
    width: 100%;
    // bottom: 0
`;

const Component = styled(Box)`
    height: 76vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 2px 20px;
`;

const ChatMessages = ({ person, conversation }) => {
    const { account, socket , setNewMessageFlag , newMessageFlag} = useContext(AccountContext);

    const [value, setValue] = useState("");
    const [messages, setMessages] = useState([]);
    const [file, setFile] = useState();
    const [image, setImage] = useState("");
    const [incomingMsg, setImcomingMsg] = useState(null);

    const scrollRef = useRef();

    useEffect(() => {
        socket.current.on("getMessage", (data) => {
            setImcomingMsg({
                ...data,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({
            transition: "smooth",
            behavior: "smooth",
        });
    }, [messages]);

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
        };
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag]);

    useEffect(() => {
        incomingMsg &&
            conversation?.members?.includes(incomingMsg.senderId) &&
            setMessages((prev) => [...prev, incomingMsg]);
    }, [incomingMsg, conversation]);

    const sendText = async (e) => {
        const code = e.keyCode || e.which;

        if (code === 13) {
            let message = {};

            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "text",
                    text: value,
                };
            } else {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "file",
                    text: image,
                };
            }

            socket.current.emit("sendMessage", message);

            await newMessage(message);

            setValue("");
            setFile("");
            setImage("");
            setNewMessageFlag((prev) => !prev);
        }
    };

    return (
        <>
            <Wrapper>
                <Component>
                    {messages &&
                        messages.map((message) => (
                            <Container ref={scrollRef}>
                                <MessageSingle message={message} />
                            </Container>
                        ))}
                </Component>

                <ChatFooter
                    sendText={sendText}
                    setValue={setValue}
                    value={value}
                    file={file}
                    setFile={setFile}
                    setImage={setImage}
                />
            </Wrapper>
        </>
    );
};

export default ChatMessages;
