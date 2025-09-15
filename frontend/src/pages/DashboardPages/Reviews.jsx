import ReceivedReviews from "../../components/Dashboard/Reviews/ReceivedReviews";
import UserCard from "../../components/Dashboard/Settings/UserCard";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 sm:py-10">
      <div>
          <h1 className="text-3xl text-center font-bold">My Recieved Reviews</h1>
        </div>
      <div className="flex flex-col sm:flex-row items-start gap-2">
        {/* UserCard (hidden on mobile) */}
        <div className="hidden sm:block w-full sm:w-1/3 max-w-xs">
          <UserCard />
        </div>

        {/* ReceivedReviews */}
        <div className="w-full sm:w-2/3 max-w-3xl">
          <ReceivedReviews />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
