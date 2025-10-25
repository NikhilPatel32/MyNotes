import React, { useState } from "react";
import { createNote } from "../utils/api";
import { X } from "lucide-react";
import toast from "react-hot-toast";

export default function CreateNoteModal({ closeModal, onNoteCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Both title and content are required.");
      return null;
    }

    setLoading(true);
    try {
      await createNote({ title, content });
      toast.success("Note created!")
      onNoteCreated(); 
      closeModal();
    } catch (err) {
     toast.error("Failed to create note. Please try again.")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      
      <div
        className="absolute inset-0 backdrop-blur-sm"
        onClick={closeModal}
      ></div>

     
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-t-lg">
          <h2 className="text-lg font-semibold text-white">Create Note</h2>
          <button
            onClick={closeModal}
            className="text-white hover:cursor-pointer hover:scale-95"
          >
               <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4"
            placeholder="Note title"
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="w-full border rounded px-3 py-2 mb-4"
            placeholder="Write your note..."
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 rounded bg-gray-400 hover:cursor-pointer hover:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-70
              hover:cursor-pointer hover:scale-95"
            >
              {loading ? "Saving..." : "Save Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
