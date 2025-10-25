import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNotes } from "../utils/api";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import CreateNoteModal from "../components/CreateNoteModal";
import { Plus } from "lucide-react";

export default function NotesList() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const res = await getNotes();
      setNotes(res.data);
    } catch (err) {
      console.error("Failed to fetch notes:", err);
      if (err?.response?.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-gray-500">Create Notes with ease</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800
            hover:cursor-pointer hover:scale-95"
          >
            <div className="flex gap-1">
             <Plus />
             <p className="text-md">Create Note</p>
            </div>
          </button>
        </div>

        {notes.length === 0 ? (
          <div className="bg-gray-700 border-2 border-gray-400 p-6 rounded-lg shadow text-center text-gray-200">
            No notes yet. Click “Create Note” to add your first note.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} onChange={fetchNotes} />
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <CreateNoteModal
          closeModal={() => setShowModal(false)}
          onNoteCreated={fetchNotes}
        />
      )}
    </div>
  );
}
