import { useState } from "react";
import axios from "axios";
import {
  X,
  Plus,
  ArrowRight,
  ArrowLeft,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import Nuvora from "../../assets/Nuvora_2.png";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const categories = [
  "Technology",
  "Sports",
  "Coding",
  "Languages",
  "Life Coach",
  "Art",
  "Music",
  "Others"
];

export default function SkillWizard({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);
  const [tempSkill, setTempSkill] = useState("");
  const [tempLearn, setTempLearn] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const totalSteps = 5;

  const handleAddSkill = (type) => {
    if (type === "offered" && tempSkill.trim()) {
      setSkillsOffered([...skillsOffered, tempSkill.trim()]);
      setTempSkill("");
    }
    if (type === "wanted" && tempLearn.trim()) {
      setSkillsWanted([...skillsWanted, tempLearn.trim()]);
      setTempLearn("");
    }
  };

  const handleRemoveSkill = (type, index) => {
    if (type === "offered") {
      setSkillsOffered(skillsOffered.filter((_, i) => i !== index));
    } else {
      setSkillsWanted(skillsWanted.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async () => {
    setError("");
    const token = localStorage.getItem("token");
    if (!token) {
      setError("User is not authenticated.");
      return;
    }

    try {
      await axios.post(
        `${backendUrl}/api/skills`,
        {
          skillsOffered,
          skillsWanted,
          category,
          description,
          location,
          availability: [],
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 1800);
      }, 1200);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to save skill profile.");
    }
  };



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-4">
      {/* Spinner Overlay */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white/70 z-50">
          <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
        </div>
      )}

      {/* Success Overlay */}
      {success && (
        <div className="absolute inset-0 flex justify-center items-center bg-white z-50">
          <div className="flex flex-col items-center gap-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            <h2 className="text-xl font-semibold text-gray-800">
              Skill Profile Created!
            </h2>
          </div>
        </div>
      )}

      <div className="bg-white text-gray-800 rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto p-6 md:p-8 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={Nuvora} alt="Nuvora Logo" className="w-16 h-16" />
        </div>

        {/* Progress Stepper */}
        <div className="flex items-center justify-center mb-6">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step > i + 1
                    ? "bg-green-600 text-white"
                    : step === i + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {i + 1}
              </div>
              {i < totalSteps - 1 && (
                <div
                  className={`h-1 w-6 ${
                    step > i + 1 ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="transition-all duration-500 ease-in-out" key={step}>
          {step === 1 && (
            <>
              <h2 className="text-xl font-bold mb-4">
                What skills can you teach?
              </h2>
              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  type="text"
                  value={tempSkill}
                  onChange={(e) => setTempSkill(e.target.value)}
                  placeholder="e.g. Guitar, Python"
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200"
                />
                <button
                  type="button"
                  onClick={() => handleAddSkill("offered")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsOffered.map((s, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {s}
                    <button
                      onClick={() => handleRemoveSkill("offered", i)}
                      className="text-indigo-500 hover:text-indigo-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  disabled={skillsOffered.length === 0}
                  onClick={() => setStep(2)}
                  className="bg-black hover:bg-black/90 text-white px-6 py-2 rounded-lg disabled:opacity-50"
                >
                  Next <ArrowRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-bold mb-4">
                What skills do you want to learn?
              </h2>
              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  type="text"
                  value={tempLearn}
                  onChange={(e) => setTempLearn(e.target.value)}
                  placeholder="e.g. Cooking, Design"
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-purple-200"
                />
                <button
                  type="button"
                  onClick={() => handleAddSkill("wanted")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsWanted.map((s, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {s}
                    <button
                      onClick={() => handleRemoveSkill("wanted", i)}
                      className="text-indigo-500 hover:text-indigo-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg"
                >
                  <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
                </button>
                <button
                  disabled={skillsWanted.length === 0}
                  onClick={() => setStep(3)}
                  className="bg-black hover:bg-black/90 text-white px-6 py-2 rounded-lg disabled:opacity-50"
                >
                  Next <ArrowRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-bold mb-4">Choose a category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-lg border transition ${
                      category === cat
                        ? "bg-indigo-600 text-white border-indigo-500"
                        : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg"
                >
                  <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
                </button>
                <button
                  disabled={!category}
                  onClick={() => setStep(4)}
                  className="bg-black hover:bg-black/90 text-white px-6 py-2 rounded-lg disabled:opacity-50"
                >
                  Next <ArrowRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-xl font-bold mb-4">
                Add a description (optional)
              </h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Briefly describe your skill exchange preference..."
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 mb-6"
              />
              <div className="flex justify-between">
                <button
                  onClick={() => setStep(3)}
                  className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg"
                >
                  <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
                </button>
                <button
                  onClick={() => setStep(5)}
                  className="bg-black hover:bg-black/90 text-white px-6 py-2 rounded-lg"
                >
                  Next <ArrowRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="text-right mt-2">
                <button
                  onClick={() => setStep(5)}
                  className="text-sm text-gray-500 underline"
                >
                  Skip
                </button>
              </div>
            </>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-lg md:text-2xl font-bold mb-4">
                Add a location (optional)
              </h2>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Online / City Name"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 mb-6"
              />
              <div className="flex justify-between">
                <button
                  onClick={() => setStep(4)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
                >
                  <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
                </button>

                <button
                  onClick={async () => {
                    const success = await handleSubmit();
                    if (success) {
                      if (onComplete) onComplete();  // ✅ call parent to close modal + reload
                    }
                  }}
                  className="bg-green-700 hover:bg-green-900 text-white px-6 py-2 rounded-lg"
                >
                  Finish
                </button>


              </div>
              <div className="text-right mt-2">
                <button
                  onClick={async () => {
                    const success = await handleSubmit();
                    if (success && onComplete) onComplete();
                  }}
                  className="text-sm text-gray-500 underline"
                >
                  Skip
                </button>
              </div>
            </div>
          )}

        </div>

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    </div>
  );
}
