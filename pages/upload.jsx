import React from "react";
import { Card } from "../components/card";
import { Input } from "../components/input";

const Upload = () => {
  return (
    <div>
      <Card>
        Upload
        <Input type={"file"} />
      </Card>
    </div>
  );
};

export default Upload;
