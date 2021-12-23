import React, { useRef } from "react";
import S3 from "react-aws-s3";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ImageUpload() {
  const fileInput = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    let file = fileInput.current.files[0];
    console.log(file);
    if(file.type === "image/png" || file.type === "image/jpeg" )
    {
        let newFileName = fileInput.current.files[0].name;

        //create config for s3 object
        const config = {
        bucketName: process.env.REACT_APP_BUCKET_NAME,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS_ID,
        secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
        s3Url: process.env.REACT_APP_URLS,
        };

        //creat s3 object
        const ReactS3Client = new S3(config);

        //upload file
        ReactS3Client.uploadFile(file, newFileName).then((data) => {
        if (data.status === 204) {
            alert("File uploaded successfully");
           fileInput.current.value = "";
        } else {
            alert("Fail to upload");
        }
        });
    }
    else {
        alert("this file type is not supported");
    }
  };

  return (
    <div className="container">
      <form className="upload-steps" onSubmit={handleClick}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Upload Image to s3</Form.Label>
          <Form.Control
            type="file"
            placeholder="Choose Image"
            ref={fileInput}
          />
        </Form.Group>

        <br />
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
}

export default ImageUpload;
