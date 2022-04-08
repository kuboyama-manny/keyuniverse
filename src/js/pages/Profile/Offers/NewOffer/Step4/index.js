import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import BtnPrimaryOutline from '../../../../../components/Buttons/BtnPrimaryOutline';
import ProgressBar from '../../../../../components/ProgressBar';
import FaIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';


class Step4 extends Component {
  constructor(props) {
    super(props);

    this.dropZoneRef = null;

    this.state = {
      fileName: ''
    }
  }

  componentDidMount () {
    this.props.getUploadedDocuments(this.props.groupId);
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      for(let file of acceptedFiles) {
        this.props.saveAcceptedFileName(file.name);
        let data = new FormData();
        data.append('file1', file, file.name);
        data.append('group_id', this.props.groupId);
        this.props.uploadDocument(data, file.name)
      }

    } else if (rejectedFiles.length > 0) {
      console.log('-- Rejected Files --', rejectedFiles)
    }
  };

  onOpenDropZoneDialog = () => {
    this.dropZoneRef.open();
  };

  render () {
    const { uploadProgressVal, acceptedFileName, deleteUploadedDocument, uploadedFileName, groupId } = this.props;
    return (
      <div data-aos="fade">
        <h5 className="font-spacing font-weight-light">STEP 4: UPLOAD DOCUMENTS</h5>
        <p>We want to be sure that the keys are valid and have been taken legal way. That's why we ask you to upload the
          Invoices & Proof of Purchase of each of your keys. You can upload png, jpg and pdf files.</p>

        <div className="py-3">
          <DropZone
            accept="image/jpeg, image/png, application/pdf"
            ref={node => this.dropZoneRef = node}
            className={'upload-zone'}
            activeClassName={'active'}
            disableClick={true}
            onDrop={this.onDrop}
          >
            {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <BtnPrimaryOutline
                  content="UPLOAD DOCUMENT"
                  onClick={this.onOpenDropZoneDialog}
                />
              </div>
            )}
          </DropZone>
          {
            !_.isEmpty(acceptedFileName) && acceptedFileName.map((filename, index) => {
              const newFileName = !_.isEmpty(uploadedFileName) &&
                uploadedFileName.filter(file => Object.keys(file)[0] === filename)[0] &&
                uploadedFileName.filter(file => Object.keys(file)[0] === filename)[0][filename];
              return (
                <div className="d-flex align-items-center mt-3" key={index}>
                  <div className="w-100">
                    <ProgressBar label={filename} progress={uploadProgressVal[filename] || 100}/>
                  </div>
                  <div className="p-4 clickable" onClick={() => deleteUploadedDocument(newFileName, filename, groupId)}>
                    <span className="h4 m-0"><FaIcon icon={faTrashAlt}/></span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Step4;
