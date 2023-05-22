import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FontDropdown from './dropdown';
import './App.css';

// Import the  logo image
import logo from './logo.png';
import slide from './download.png'
import sheet from './sheet.png'
import form from './forms.png'
import profile from './profile.jpg'
import photo from './photo.png'


const App = () => {
  const [content, setContent] = useState('');
  const [documentName, setDocumentName] = useState('Untitled Document');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleDocumentNameChange = (event) => {
    setDocumentName(event.target.value);

  };

  const handleShareDocument = () => {
    // Implement sharing functionality here
    alert('Document shared!');
  };



  return (
    <div className="app">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src={logo} alt="Google Docs Logo" className="logo" />
          <h1>Google Docs</h1>
        </div>
        <ul className="app-links">
          <li>
            <div className="logo-sec">
              <img src={logo} alt="Google Docs Logo" className="logo" />
              <a href="https://docs.google.com/">Docs</a>
            </div>
          </li>

          <li>
            <div className="logo-sec">
              <img src={sheet} alt="Google Docs Logo" className="logo" />
              <a href="https://www.google.com/sheets/about/">Sheets</a>
            </div>
          </li>
          <li>
            <div className="logo-sec">
              <img src={slide} alt="Google Docs Logo" className="logo" />

              <a className="links-data" href="https://www.google.com/slides/about/">Slides</a>
            </div>
          </li>
          <li>
            <div className="logo-sec">
              <img src={form} alt="Google Docs Logo" className="logo" />


              <a href="https://workspace.google.com/forms/free_trial
">Forms</a>
            </div>
          </li>
          <li>
            <div className="logo-sec">
              <img src={photo} alt="Google Docs Logo" className="logo" />


              <a href="https://drive.google.com">Drive</a>
            </div>
          </li>


          {/* Add more app links as needed */}
        </ul>
      </div>
      <div className="content">
        <header className="app-header">

          <h1>{documentName}</h1>



          <button className="toolbar-button share-button" onClick={handleShareDocument}>
            Share
          </button>
          <img src={profile} alt="Google Docs Logo" className="profile-img" />

        </header>
        <p className='menu'>    File   Edit   View   Insert  Format   Tools   Extension  Help</p>
        <div className="editor-container">
          <div className="document-editor">
            <div className="toolbar">
              <input
                type="text"
                value={documentName}
                onChange={handleDocumentNameChange}
                className="document-name-input"
              />
              <FontDropdown />
            </div>
            <div className="editor">
              <Editor content={content} onContentChange={handleContentChange} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Editor = ({ content, onContentChange }) => {
  const handleChange = (newContent) => {

    onContentChange(newContent);
  };

  return (
    <div className="editor">

      <ReactQuill value={content} onChange={handleChange} />

    </div>
  );
};




export default App;
