
import {
    FileItem,
    FileItemContainer,
    FullScreenPreview,
    InputButton
  } from "@dropzone-ui/react";
import * as React from "react";

function Tests() {
    const [validatedFiles, setvalidatedFiles] = useState([]);
    const [imgSource, setImgSource] = useState(false);
    const updateFiles = (incommingFiles) => {
      setvalidatedFiles(incommingFiles);
    };
    const onDelete = (id) => {
      setvalidatedFiles(validatedFiles.filter((x) => x.id !== id));
    };
  return (
    <div>
      <InputButton
        onChange={updateFiles}
        label="browse images..."
        accept="image/*,video/*"
        multiple
      />
      <FileItemContainer view="list">
        {validatedFiles.map((validatedFile) => (
          <FileItem
            {...validatedFile}
            onDelete={onDelete}
            onSee={(src) => {
              setImgSource(src);
            }}
            preview
            info
            hd
          localization={"ES-es"}
          />
        ))}
        <FullScreenPreview
          imgSource={imgSource}
          openImage={imgSource}
          onClose={(e) => setImgSource(undefined)}
        />
      </FileItemContainer>
    </div>
  )
}

export default Tests