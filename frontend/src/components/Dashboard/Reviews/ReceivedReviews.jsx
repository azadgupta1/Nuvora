// // components/ReceivedReviews.jsx
// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { toast } from "react-toastify";


// const backendUrl = import.meta.env.VITE_BACKEND_URL;


// const ReceivedReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch(`${backendUrl}/api/review`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await response.json();
//         console.log("Review list is : ", data);

//         if (response.ok) {
//           setReviews(data);
//         } else {
//           toast.error(data.message || "Failed to fetch reviews");
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//         toast.error("Network error while fetching reviews");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

//   return (
//     <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mt-8">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Received Reviews</h2>

//       {loading ? (
//         <p className="text-gray-500">Loading reviews...</p>
//       ) : reviews.length === 0 ? (
//         <p className="text-gray-500">You haven’t received any reviews yet.</p>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {visibleReviews.map((review) => (
//               <div
//                 key={review.id}
//                 className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="font-semibold text-gray-700">
//                     {review.user.name} on{" "}
//                     <span className="italic text-gray-500">{review.skill.skillsOffered?.[0] || review.skill.category}</span>
//                   </div>
//                   <div className="flex items-center text-yellow-500">
//                     {Array.from({ length: review.rating }, (_, i) => (
//                       <FaStar key={i} />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-2">{review.review}</p>
//                 <p className="text-sm text-gray-400">
//                   {new Date(review.createdAt).toLocaleDateString()}{" "}
//                   {new Date(review.createdAt).toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                   })}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {reviews.length > 2 && (
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="mt-4 text-indigo-600 hover:underline text-sm font-medium"
//             >
//               {showAll ? "See less" : "See more"}
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default ReceivedReviews;





















// // components/ReceivedReviews.jsx
// import { useEffect, useState } from "react";
// import { FaStar, FaChevronDown } from "react-icons/fa";
// import { toast } from "react-toastify";
// import { MdStarRate, MdStarBorder, MdOutlineStarHalf } from "react-icons/md";
// import clsx from "clsx";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const ReceivedReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("latest");

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch(`${backendUrl}/api/review`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
        

//         const data = await response.json();
//         console.log("Fetched Review data is : ", data);
//         if (response.ok) {
//           setReviews(data);
//         } else {
//           toast.error(data.message || "Failed to fetch reviews");
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//         toast.error("Network error while fetching reviews");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   useEffect(() => {
//     let sorted = [...reviews];
//     if (filter === "latest") {
//       sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     } else if (filter === "top") {
//       sorted.sort((a, b) => b.rating - a.rating);
//     } else if (filter === "oldest") {
//       sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
//     }
//     setFilteredReviews(sorted);
//   }, [reviews, filter]);

//   const visibleReviews = showAll ? filteredReviews : filteredReviews.slice(0, 2);

//   const averageRating =
//     reviews.length > 0
//       ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
//       : null;

//   return (
//     <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-10 shadow-md">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-1">Received Reviews</h2>
//           {averageRating && (
//             <div className="flex items-center text-[#f19812] text-xl font-medium">
//               {Array.from({ length: Math.round(averageRating) }, (_, i) => (
//                 <MdStarRate key={i} className="mr-1" />
//               ))}
//               <span className="text-gray-700 ml-2">
//                 {averageRating} ({reviews.length} review{reviews.length > 1 ? "s" : ""})
//               </span>
//             </div>
//           )}
//         </div>

//         <div className="mt-4 md:mt-0">
//           <label htmlFor="filter" className="sr-only">
//             Sort Reviews
//           </label>
//           <select
//             id="filter"
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             <option value="latest">Latest</option>
//             <option value="top">Top Rated</option>
//             <option value="oldest">Oldest</option>
//           </select>
//         </div>
//       </div>

//       {loading ? (
//         <p className="text-gray-500">Loading reviews...</p>
//       ) : filteredReviews.length === 0 ? (
//         <p className="text-gray-500">You haven’t received any reviews yet.</p>
//       ) : (
//         <>
//           <div className="space-y-5">
//             {visibleReviews.map((review) => (
//               <div
//                 key={review.id}
//                 className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200"
//               >
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="font-semibold text-gray-800">
//                     <img src={review.user.profilePicture} alt="profilePic" className="w-8 h-8 rounded-full" />
//                     {review.user.name}{" "}
//                     <span className="text-gray-500 font-normal">
//                       on{" "}
//                       <span className="italic">
//                         {review.skill.skillsOffered?.[0] || review.skill.category}
//                       </span>
//                     </span>
//                   </div>
//                   <div className="flex items-center text-[#f19812] text-xl">
//                     {Array.from({ length: review.rating }, (_, i) => (
//                       <MdStarRate key={i} />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-3">{review.review}</p>
//                 <p className="text-sm text-gray-400">
//                   {new Date(review.createdAt).toLocaleDateString()}{" "}
//                   {new Date(review.createdAt).toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                   })}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {filteredReviews.length > 2 && (
//             <div className="mt-6 text-center">
//               <button
//                 onClick={() => setShowAll(!showAll)}
//                 className="text-indigo-600 hover:underline text-sm font-medium"
//               >
//                 {showAll ? "See less" : "See more"}
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default ReceivedReviews;

























// // components/ReceivedReviews.jsx
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import {
//   MdStarRate,
//   MdStarBorder,
//   MdOutlineStarHalf,
// } from "react-icons/md";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const ReceivedReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("latest");

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch(`${backendUrl}/api/review`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await response.json();
//         console.log("Fetched Review data is : ", data);
//         if (response.ok) {
//           setReviews(data);
//         } else {
//           toast.error(data.message || "Failed to fetch reviews");
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//         toast.error("Network error while fetching reviews");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   useEffect(() => {
//     let sorted = [...reviews];
//     if (filter === "latest") {
//       sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     } else if (filter === "top") {
//       sorted.sort((a, b) => b.rating - a.rating);
//     } else if (filter === "oldest") {
//       sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
//     }
//     setFilteredReviews(sorted);
//   }, [reviews, filter]);

//   const visibleReviews = showAll ? filteredReviews : filteredReviews.slice(0, 2);

//   const getStarIcons = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
//     const total = hasHalf ? fullStars + 1 : fullStars;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<MdStarRate key={`full-${i}`} />);
//     }

//     if (hasHalf) {
//       stars.push(<MdOutlineStarHalf key="half" />);
//     }

//     for (let i = total; i < 5; i++) {
//       stars.push(<MdStarBorder key={`empty-${i}`} />);
//     }

//     return stars;
//   };

//   const getReadableDate = (dateStr) => {
//     const date = new Date(dateStr);
//     const today = new Date();
//     const yesterday = new Date();
//     yesterday.setDate(today.getDate() - 1);

//     const isSameDay = (d1, d2) =>
//       d1.getFullYear() === d2.getFullYear() &&
//       d1.getMonth() === d2.getMonth() &&
//       d1.getDate() === d2.getDate();

//     if (isSameDay(date, today)) return "Reviewed Today";
//     if (isSameDay(date, yesterday)) return "Reviewed Yesterday";

//     const day = date.getDate();
//     const month = date.toLocaleString("default", { month: "long" });
//     const year = date.getFullYear();

//     const getOrdinal = (n) => {
//       const s = ["th", "st", "nd", "rd"];
//       const v = n % 100;
//       return s[(v - 20) % 10] || s[v] || s[0];
//     };

//     return `Reviewed on ${day}${getOrdinal(day)} ${month} ${year}`;
//   };


//   const averageRating =
//     reviews.length > 0
//       ? (
//           reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
//         ).toFixed(1)
//       : null;

//   const getAverageStars = () => {
//     if (!averageRating) return null;
//     return getStarIcons(parseFloat(averageRating));
//   };

//   return (
//     <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-10 shadow-md pb-0">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800 mb-1">Received Reviews</h2>
//             {averageRating && (
//               <div className="flex items-center text-[#f19812] text-xl font-medium flex-wrap">
//                 {getAverageStars()}
//                 <span className="text-gray-700 ml-2 mt-1 sm:mt-0">
//                   {averageRating} ({reviews.length} review{reviews.length > 1 ? "s" : ""})
//                 </span>
//               </div>
//             )}
//           </div>

//           <div>
//             <select
//               id="filter"
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               className="bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               <option value="latest">Latest</option>
//               <option value="top">Top Rated</option>
//               <option value="oldest">Oldest</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <hr className="text-gray-300" />

//       {loading ? (
//         <p className="text-gray-500">Loading reviews...</p>
//       ) : filteredReviews.length === 0 ? (
//         <p className="text-gray-500">You haven’t received any reviews yet.</p>
//       ) : (
//         <>
//           <div className="space-y-5">
//             {visibleReviews.map((review) => (
//               <div
//                 key={review.id}
//                 className="my-10"
//               >
//                 {/* Row 1: Profile Pic and Name */}
//                 <div className="flex items-center mb-2">
//                   <img
//                     src={review.user.profilePicture}
//                     alt="profilePic"
//                     className="w-8 h-8 rounded-full mr-3"
//                   />
//                   <span className="font-semibold text-gray-800">
//                     {review.user.name}
//                   </span>
//                 </div>

//                 {/* Row 2: Stars and Skill */}
//                 <div className="flex items-center justify-between mb-1">
//                   <div className="flex items-center text-[#f19812] text-xl">
//                     {getStarIcons(review.rating)}
//                   </div>
//                   <div className="text-gray-600 text-sm italic">
//                     on{" "}
//                     {review.skill.skillsOffered?.[0] || review.skill.category}
//                   </div>
//                 </div>

//                 {/* Row 3: Reviewed Date */}
//                 <div className="text-sm text-gray-400 mb-2">
//                   {getReadableDate(review.createdAt)}
//                 </div>


//                 {/* Row 4: Review Message */}
//                 <p className="text-black">{review.review}</p>
//               </div>
//             ))}
//           </div>

//           {filteredReviews.length > 2 && (
//             <div className="mt-6 text-center">
//               <button
//                 onClick={() => setShowAll(!showAll)}
//                 className="text-indigo-600 hover:underline text-sm font-medium"
//               >
//                 {showAll ? "See less" : "See more"}
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default ReceivedReviews;
































import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  MdStarRate,
  MdStarBorder,
  MdOutlineStarHalf,
} from "react-icons/md";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ReceivedReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("latest");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/review`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await response.json();
        console.log("Fetched Review data is : ", data);
        if (response.ok) {
          setReviews(data);
        } else {
          toast.error(data.message || "Failed to fetch reviews");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        toast.error("Network error while fetching reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    let sorted = [...reviews];
    if (filter === "latest") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (filter === "top") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (filter === "oldest") {
      sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    setFilteredReviews(sorted);
  }, [reviews, filter]);

  const visibleReviews = showAll ? filteredReviews : filteredReviews.slice(0, 2);

  const getStarIcons = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
    const total = hasHalf ? fullStars + 1 : fullStars;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<MdStarRate key={`full-${i}`} />);
    }

    if (hasHalf) {
      stars.push(<MdOutlineStarHalf key="half" />);
    }

    for (let i = total; i < 5; i++) {
      stars.push(<MdStarBorder key={`empty-${i}`} />);
    }

    return stars;
  };

  const getReadableDate = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const isSameDay = (d1, d2) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    if (isSameDay(date, today)) return "Reviewed Today";
    if (isSameDay(date, yesterday)) return "Reviewed Yesterday";

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const getOrdinal = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    };

    return `Reviewed on ${day}${getOrdinal(day)} ${month} ${year}`;
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1)
      : null;

  const getAverageStars = () => {
    if (!averageRating) return null;
    return getStarIcons(parseFloat(averageRating));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-10 shadow-md pb-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Received Reviews</h2>
          {averageRating && (
            <div className="flex items-center text-[#f19812] text-xl font-medium flex-wrap">
              {getAverageStars()}
              <span className="text-gray-700 ml-2 mt-1 sm:mt-0">
                {averageRating} ({reviews.length} review{reviews.length > 1 ? "s" : ""})
              </span>
            </div>
          )}
        </div>

        <div>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="latest">Latest</option>
            <option value="top">Top Rated</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <hr className="text-gray-300 mb-6" />

      {/* Review List */}
      {loading ? (
        <p className="text-gray-500">Loading reviews...</p>
      ) : filteredReviews.length === 0 ? (
        <p className="text-gray-500">You haven’t received any reviews yet.</p>
      ) : (
        <>
          <div className="space-y-10">
            {visibleReviews.map((review) => (
              <div key={review.id} className="">
                {/* Row 1: Profile Pic + Name */}
                <div className="flex items-center mb-2">
                  <img
                    src={review.user.profilePicture}
                    alt="profilePic"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span className="font-semibold text-gray-800">
                    {review.user.name}
                  </span>
                </div>

                {/* Row 2: Stars + Skill */}
                <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                  <div className="flex items-center text-[#f19812] text-xl">
                    {getStarIcons(review.rating)}
                  </div>
                  <div className="text-gray-600 text-sm italic">
                    on {review.skill.skillsOffered?.[0] || review.skill.category}
                  </div>
                </div>

                {/* Row 3: Date */}
                <div className="text-sm text-gray-400 mb-2">
                  {getReadableDate(review.createdAt)}
                </div>

                {/* Row 4: Message */}
                <p className="text-black">{review.review}</p>
              </div>
            ))}
          </div>

          {/* Show More / Less */}
          {filteredReviews.length > 2 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-indigo-600 hover:underline text-sm font-medium"
              >
                {showAll ? "See less" : "See more"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ReceivedReviews;
