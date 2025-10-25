import React, { useState } from "react";
import { updateNote } from "../utils/api";
import toast from "react-hot-toast";

const EditNoteModal = ({ note, onClose, onSave }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [saving, setSaving] = useState(false);

  const handleUpdate = async () => {
    if (!title.trim() || !content.trim()) return alert("Fields required");
    setSaving(true);
    try {
      await updateNote(note._id, { title, content });
      toast.success("Note updated successfully!");
      onSave();
      onClose();
    } catch (err) {
      console.error("Update failed:", err);
       toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4 text-center">Edit Note</h2>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border rounded px-3 py-2 mb-4 h-32 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 hover:scale-95 hover:cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={saving}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-70 hover:scale-95 hover:cursor-pointer"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNoteModal;
