import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const submitNote = (event) => {
    event.preventDefault();
    if (note.title === "" || note.content === "") {
      alert("Enter title and content for your note!");
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          value={note.content}
          placeholder="Write a note..."
          rows={isExpanded ? "3" : "1"}
          onChange={handleChange}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AiOutlinePlus />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
