import React, { useState } from "react";
import axios from "axios";
import { Typography, Form, Input, Button, message } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

function UploadPage() {
  const [PostTitle, setPostTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [PostCategory, setPostCategory] = useState("Personal");

  const onTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onPostChange = (e) => {
    setPostCategory(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const Post = {
      title: PostTitle,
      content: Description,
      category: PostCategory,
    };

    axios.post("/api/post/upload", Post).then((res) => {
      if (res.data.try) {
        message.success("성공적으로 업로드했습니다");
      } else {
        message.error("실패했어");
      }
    });
  };
  const constCategory = [
    { value: 0, label: "Personal" },
    { value: 1, label: "Something" },
    { value: 2, label: "Javascript" },
    { value: 3, label: "React" },
    { value: 4, label: "Git" },
  ];
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <Title level={2}>Upload Post</Title>
      </div>

      <Form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <label>Title</label>
          <Input onChange={onTitleChange} value={PostTitle} />
          <br />
          <br />

          <label>Description</label>
          <TextArea
            onChange={onDescriptionChange}
            value={Description}
            rows="15"
          />
          <br />
          <br />

          <select onChange={onPostChange} style={{ width: "150px" }}>
            {constCategory.map((item, index) => (
              <option key={index} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
          <br />
          <br />

          <Button
            type="primary"
            size="large"
            onClick={onSubmit}
            style={{ width: "250px", margin: "0 auto" }}
          >
            포스팅
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UploadPage;
