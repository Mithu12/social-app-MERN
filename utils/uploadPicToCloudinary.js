import axios from "axios";

const uploadPic = async media => {
  try {
    console.log(media)
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "sicial_MERN");
    form.append("cloud_name", "dzpmav7vp");

    const res = await axios.post(process.env.CLOUDINARY_URL, form);
    return res.data.url;
  } catch (error) {
    console.log(error)
    return;
  }
};

export default uploadPic;
