import { EmojiEmotions, AttachFile, Mic } from "@mui/icons-material";
import { Box, styled, InputBase } from "@mui/material";

import { useEffect } from "react";

import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #ffffff;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
`;

const ChatFooter = ({ sendText, setValue, value, file, setFile , setImage }) => {

    
    useEffect(() => {
        const getFile = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response = await uploadFile(data);
                setImage(response.data)
            }
        };
        getFile();
    }, [file]);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    };

    return (
        <Container>
            <EmojiEmotions />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>

            <input
                type="file"
                style={{ display: "none" }}
                id="fileInput"
                onChange={(e) => onFileChange(e)}
            />

            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)}
                    value={value}
                />
            </Search>

            <Mic />
        </Container>
    );
};

export default ChatFooter;
