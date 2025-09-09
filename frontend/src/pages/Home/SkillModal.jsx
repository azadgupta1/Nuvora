









// import { useState } from "react";
// import axios from "axios";
// import { X, Plus, ArrowRight, ArrowLeft } from "lucide-react";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const categories = [
//   "Technology",
//   "Music",
//   "Sports",
//   "Languages",
//   "Design",
//   "Cooking",
//   "Art",
//   "Fitness",
//   "Photography",
//   "Business",
//   "Writing",
//   "Life Coach",
// ];

// export default function SkillWizard({ isOpen, onClose }) {
//   const [step, setStep] = useState(1);
//   const [skillsOffered, setSkillsOffered] = useState([]);
//   const [skillsWanted, setSkillsWanted] = useState([]);
//   const [tempSkill, setTempSkill] = useState("");
//   const [tempLearn, setTempLearn] = useState("");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
//   const [error, setError] = useState("");

//   const handleAddSkill = (type) => {
//     if (type === "offered" && tempSkill.trim()) {
//       setSkillsOffered([...skillsOffered, tempSkill.trim()]);
//       setTempSkill("");
//     }
//     if (type === "wanted" && tempLearn.trim()) {
//       setSkillsWanted([...skillsWanted, tempLearn.trim()]);
//       setTempLearn("");
//     }
//   };

//   const handleRemoveSkill = (type, index) => {
//     if (type === "offered") {
//       setSkillsOffered(skillsOffered.filter((_, i) => i !== index));
//     } else {
//       setSkillsWanted(skillsWanted.filter((_, i) => i !== index));
//     }
//   };

//   const handleSubmit = async () => {
//     setError("");
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setError("User is not authenticated.");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         `${backendUrl}/api/skills`,
//         {
//           skillsOffered,
//           skillsWanted,
//           category,
//           description,
//           location,
//           availability: [],
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       console.log("Skill profile saved:", res.data);
//       onClose();
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || "Failed to save skill profile.");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black flex justify-center items-center z-50 px-4">
//       <div className="bg-gray-900 text-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative overflow-hidden">
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-gray-400 hover:text-white"
//           onClick={onClose}
//         >
//           <X className="w-6 h-6" />
//         </button>

//         {/* Step Content */}
//         <div
//           className="transition-all duration-500 ease-in-out"
//           key={step} // ensures animation reset
//         >
//           {step === 1 && (
//             <>
//               <h2 className="text-2xl font-bold mb-4">What skills can you teach?</h2>
//               <div className="flex gap-2 mb-4">
//                 <input
//                   type="text"
//                   value={tempSkill}
//                   onChange={(e) => setTempSkill(e.target.value)}
//                   placeholder="e.g. Guitar, Python"
//                   className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => handleAddSkill("offered")}
//                   className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center gap-2"
//                 >
//                   <Plus size={18} /> Add
//                 </button>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {skillsOffered.map((s, i) => (
//                   <span
//                     key={i}
//                     className="bg-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
//                   >
//                     {s}
//                     <button onClick={() => handleRemoveSkill("offered", i)}>×</button>
//                   </span>
//                 ))}
//               </div>
//               <div className="mt-6 flex justify-end">
//                 <button
//                   disabled={skillsOffered.length === 0}
//                   onClick={() => setStep(2)}
//                   className="bg-indigo-600 px-6 py-2 rounded-lg disabled:opacity-50"
//                 >
//                   Next <ArrowRight className="inline w-4 h-4 ml-2" />
//                 </button>
//               </div>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <h2 className="text-2xl font-bold mb-4">What skills do you want to learn?</h2>
//               <div className="flex gap-2 mb-4">
//                 <input
//                   type="text"
//                   value={tempLearn}
//                   onChange={(e) => setTempLearn(e.target.value)}
//                   placeholder="e.g. Cooking, Design"
//                   className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => handleAddSkill("wanted")}
//                   className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2"
//                 >
//                   <Plus size={18} /> Add
//                 </button>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {skillsWanted.map((s, i) => (
//                   <span
//                     key={i}
//                     className="bg-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
//                   >
//                     {s}
//                     <button onClick={() => handleRemoveSkill("wanted", i)}>×</button>
//                   </span>
//                 ))}
//               </div>
//               <div className="mt-6 flex justify-between">
//                 <button
//                   onClick={() => setStep(1)}
//                   className="bg-gray-700 px-6 py-2 rounded-lg"
//                 >
//                   <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
//                 </button>
//                 <button
//                   disabled={skillsWanted.length === 0}
//                   onClick={() => setStep(3)}
//                   className="bg-purple-600 px-6 py-2 rounded-lg disabled:opacity-50"
//                 >
//                   Next <ArrowRight className="inline w-4 h-4 ml-2" />
//                 </button>
//               </div>
//             </>
//           )}

//           {step === 3 && (
//             <>
//               <h2 className="text-2xl font-bold mb-4">Choose a category</h2>
//               <div className="grid grid-cols-2 gap-3 mb-6">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setCategory(cat)}
//                     className={`px-4 py-2 rounded-lg border ${
//                       category === cat
//                         ? "bg-indigo-600 border-indigo-500"
//                         : "bg-gray-800 border-gray-700 hover:bg-gray-700"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//               <div className="mt-6 flex justify-between">
//                 <button
//                   onClick={() => setStep(2)}
//                   className="bg-gray-700 px-6 py-2 rounded-lg"
//                 >
//                   <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
//                 </button>
//                 <button
//                   disabled={!category}
//                   onClick={() => setStep(4)}
//                   className="bg-indigo-600 px-6 py-2 rounded-lg disabled:opacity-50"
//                 >
//                   Next <ArrowRight className="inline w-4 h-4 ml-2" />
//                 </button>
//               </div>
//             </>
//           )}

//           {step === 4 && (
//             <>
//               <h2 className="text-2xl font-bold mb-4">Add a description (optional)</h2>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Briefly describe your skill exchange preference..."
//                 className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 mb-6"
//               />
//               <div className="flex justify-between">
//                 <button
//                   onClick={() => setStep(3)}
//                   className="bg-gray-700 px-6 py-2 rounded-lg"
//                 >
//                   <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
//                 </button>
//                 <button
//                   onClick={() => setStep(5)}
//                   className="bg-indigo-600 px-6 py-2 rounded-lg"
//                 >
//                   Next <ArrowRight className="inline w-4 h-4 ml-2" />
//                 </button>
//               </div>
//               <div className="text-right mt-2">
//                 <button onClick={() => setStep(5)} className="text-sm text-gray-400 underline">
//                   Skip
//                 </button>
//               </div>
//             </>
//           )}

//           {step === 5 && (
//             <>
//               <h2 className="text-2xl font-bold mb-4">Add a location (optional)</h2>
//               <input
//                 type="text"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 placeholder="Online / City Name"
//                 className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 mb-6"
//               />
//               <div className="flex justify-between">
//                 <button
//                   onClick={() => setStep(4)}
//                   className="bg-gray-700 px-6 py-2 rounded-lg"
//                 >
//                   <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg"
//                 >
//                   Finish
//                 </button>
//               </div>
//               <div className="text-right mt-2">
//                 <button onClick={handleSubmit} className="text-sm text-gray-400 underline">
//                   Skip
//                 </button>
//               </div>
//             </>
//           )}
//         </div>

//         {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
//       </div>
//     </div>
//   );
// }
























































import { useState } from "react";
import axios from "axios";
import { X, Plus, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const categories = [
  "Technology",
  "Music",
  "Sports",
  "Languages",
  "Design",
  "Cooking",
  "Art",
  "Fitness",
  "Photography",
  "Business",
  "Writing",
  "Life Coach",
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

      // Show spinner before closing
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onClose();
      }, 1000);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to save skill profile.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50 px-4">
      {/* Spinner Overlay */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black/80 z-50">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
        </div>
      )}

      <div className="bg-gray-900 text-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Step Content */}
        <div className="transition-all duration-500 ease-in-out" key={step}>
          {step === 1 && (
            <>
              <h2 className="text-lg md:text-2xl font-bold mb-4">
                What skills can you teach?
              </h2>
              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  type="text"
                  value={tempSkill}
                  onChange={(e) => setTempSkill(e.target.value)}
                  placeholder="e.g. Guitar, Python"
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700"
                />
                <button
                  type="button"
                  onClick={() => handleAddSkill("offered")}
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsOffered.map((s, i) => (
                  <span
                    key={i}
                    className="bg-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {s}
                    <button onClick={() => handleRemoveSkill("offered", i)}>×</button>
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  disabled={skillsOffered.length === 0}
                  onClick={() => setStep(2)}
                  className="bg-indigo-600 px-6 py-2 rounded-lg disabled:opacity-50"
                >
                  Next <ArrowRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-lg md:text-2xl font-bold mb-4">
                What skills do you want to learn?
              </h2>
              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  type="text"
                  value={tempLearn}
                  onChange={(e) => setTempLearn(e.target.value)}
                  placeholder="e.g. Cooking, Design"
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700"
                />
                <button
                  type="button"
                  onClick={() => handleAddSkill("wanted")}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsWanted.map((s, i) => (
                  <span
                    key={i}
                    className="bg-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {s}
                    <button onClick={() => handleRemoveSkill("wanted", i)}>×</button>
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="bg-gray-700 px-6 py-2 rounded-lg"
                >
                  <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
                </button>
                <button
                  disabled={skillsWanted.length === 0}
                  onClick={() => setStep(3)}
                  className="bg-purple-600 px-6 py-2 rounded-lg disabled:opacity-50"
                >
                  Next <ArrowRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-lg md:text-2xl font-bold mb-4">
                Choose a category
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-lg border ${
                      category === cat
                        ? "bg-indigo-600 border-indigo-500"
                        : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="bg-gray-700 px-6 py-2 rounded-lg"
                >
                  <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
                </button>
                <button
                  disabled={!category}
                  onClick={() => setStep(4)}
                  className="bg-indigo-600 px-6 py-2 rounded-lg disabled:opacity-50"
                >
                  Next <ArrowRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-lg md:text-2xl font-bold mb-4">
                Add a description (optional)
              </h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Briefly describe your skill exchange preference..."
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 mb-6"
              />
              <div className="flex justify-between">
                <button
                  onClick={() => setStep(3)}
                  className="bg-gray-700 px-6 py-2 rounded-lg"
                >
                  <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
                </button>
                <button
                  onClick={() => setStep(5)}
                  className="bg-indigo-600 px-6 py-2 rounded-lg"
                >
                  Next <ArrowRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="text-right mt-2">
                <button
                  onClick={() => setStep(5)}
                  className="text-sm text-gray-400 underline"
                >
                  Skip
                </button>
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <h2 className="text-lg md:text-2xl font-bold mb-4">
                Add a location (optional)
              </h2>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Online / City Name"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 mb-6"
              />
              <div className="flex justify-between">
                <button
                  onClick={() => setStep(4)}
                  className="bg-gray-700 px-6 py-2 rounded-lg"
                >
                  <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg"
                >
                  Finish
                </button>
              </div>
              <div className="text-right mt-2">
                <button
                  onClick={handleSubmit}
                  className="text-sm text-gray-400 underline"
                >
                  Skip
                </button>
              </div>
            </>
          )}
        </div>

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    </div>
  );
}
