import React, { useState } from "react";
import { deleteNote } from "../utils/api";
import toast from "react-hot-toast";
import { Pencil, Trash2 } from "lucide-react";
import EditNoteModal from "./EditNoteModal";

const NoteCard = ({ note, onChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Delete this note?")) return;
    try {
      await deleteNote(note._id);
      toast.success("Note deleted scuccessfully");
      onChange();
    } catch (err) {
      toast.error("Failed to delete Note. Please try again.")
    }
  };

  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition hover:scale-105 border-2 border-gray-600">
        <h4 className="font-semibold text-lg mb-1 text-white">{note.title}</h4>
        <p className="text-gray-400 mb-3 whitespace-pre-wrap">{note.content}</p>

        <div className="flex justify-end gap-3 text-sm">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white font-medium hover:scale-95 hover:cursor-pointer"
          >
            <Pencil />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 font-medium hover:text-red-600 hover:cursor-pointer hover:scale-95"
          >
            <Trash2 />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <EditNoteModal
          note={note}
          onClose={() => setIsModalOpen(false)}
          onSave={onChange}
        />
      )}
    </>
  );
};

export default NoteCard;
