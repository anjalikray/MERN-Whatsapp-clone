const url = "http://localhost:8000"

export const uploadFile = async (req, res) => {

    // console.log('File after upload:', req.file); 

    if (!req.file) {
        return res.status(404).json("File not found");
    }

    const fileUrl = `${url}/file/${req.file.filename}`

    return res.status(200).json(fileUrl)
};
