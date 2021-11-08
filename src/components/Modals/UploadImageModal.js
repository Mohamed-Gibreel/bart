//React
import React, { useCallback, useState, useEffect } from "react";

//Boostrap
import { Modal } from "react-bootstrap";

//Dropzone
import { useDropzone } from "react-dropzone";

const UploadImageModal = (props) => {
  const [storedFiles, setStoredFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-");
    console.log("Accepted Files");
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-");
    var indexr = storedFiles.length;
    acceptedFiles.forEach((file) => {
      file.id = ++indexr;
    });
    if (storedFiles.length == 0) {
      setStoredFiles(acceptedFiles);
    } else {
      setStoredFiles([...storedFiles, acceptedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop,
  });

  const previewFile = () => {
    var imagesContainer = document.getElementById("uploadedImages");
    var counter = -1,
      file;

    while ((file = storedFiles[++counter])) {
      var reader = new FileReader();
      reader.onloadend = (function (file) {
        return function () {
          var image = new Image();
          image.height = 75;
          image.width = 75;
          image.title = file.name;
          image.src = /^image/.test(file.type)
            ? this.result
            : "http://i.stack.imgur.com/t9QlH.png";
          image.style = "border-radius:5px;object-fit:cover";
          image.classList.add("uploadedImg");

          //Divs
          var div = document.createElement("div");
          var deleteDiv = document.createElement("div");
          var deleteText = document.createElement("div");

          //Edit
          deleteText.innerHTML = "Odstrániť";
          deleteText.classList.add("deleteText");
          div.classList.add("imageContainer");
          deleteDiv.classList.add("deleteDiv");

          //Appending
          deleteDiv.appendChild(deleteText);
          div.appendChild(image);
          div.appendChild(deleteDiv);
          imagesContainer.appendChild(div);

          //Listeners
          image.addEventListener("click", () => {
            var tempArr = storedFiles.filter((elm) => elm.id != file.id);
            imagesContainer.innerHTML = "";
            setStoredFiles(tempArr);
          });
        };
      })(file);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (storedFiles.length > 0) {
      previewFile();
    }
  }, [storedFiles, previewFile]);

  useEffect(() => {
    return () => {
      setStoredFiles([]);
    };
  }, [props.show]);

  return (
    <Modal show={props.show} onHide={props.onHide} centered>
      <Modal.Body className="add-image-content">
        <div className="pridat-content">
          <div className="pridat-header">
            <h5
              className="modal-title pridat-header"
              id="addCategoryModalLabel"
            >
              Pridať fotky
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={props.onHide}
            ></button>
          </div>
          <div className="add-image-dialog" {...getRootProps()}>
            <div
              id="uploadedImages"
              className="uploadedImagesStyle"
              style={
                storedFiles.length > 0 && !isDragActive
                  ? {}
                  : { display: "none" }
              }
            />
            {!isDragActive && (
              <>
                {storedFiles.length == 0 && (
                  <>
                    <i className="far fa-image fa-2x"></i>
                    <span className="add-image-title">Sem presunte fotky</span>
                    <span className="add-image-description">alebo</span>
                    <label htmlFor="file-upload" className="add-image-btn">
                      Vyberte súbory
                    </label>
                  </>
                )}
              </>
            )}
            {isDragActive && (
              <div className="dragNdrop">
                Ak chcete pokračovať, vložte fotografie sem
              </div>
            )}
            <input
              {...getInputProps()}
              id="file-upload"
              type="file"
              style={{ display: "none" }}
            />
          </div>
          <div className="pridat-btn" onClick={() => console.log(storedFiles)}>
            Pridať
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UploadImageModal;
