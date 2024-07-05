"use client";
import Image from "next/image";
import reward from "../../public/Assets/rsz_8601.jpg";
const rewards = [
  {
    name: "Flatiron School",
    description:
      "The discount is only valid for 365 days after the date of issue. A one-time $500 discount off of the full tuition of the Data Science Career Track",
    value: "$500",
    image: reward,
  },
  {
    name: "Codecademy",
    description: "50% off the first month of a paid subscription",
    value: "50% off",
    image: reward,
  },
  {
    name: "Quizlet",
    description: "20% off your first year of a paid subscription",
    value: "20% off",
    image: reward,
  },
  {
    name: "Brilliant",
    description: "A free 1-month pro membership",
    value: "Free",
    image: reward,
  },
];

const Rewards = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 py-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Congratulations, you&apos;re in the top 10%!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            You&apos;ve scored 90% on the quiz. You can now unlock the following
            rewards:
          </p>
        </div>
        <div className="rounded-lg shadow-lg bg-white p-12">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="flex items-center border-b py-4 flex-col sm:flex-row gap-4 sm:gap-2"
            >
              <Image
                className="h-12 w-12 rounded-full object-cover"
                src={reward.image}
                alt={reward.name}
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {reward.name}
                </h3>
                <p className="text-sm text-gray-600">{reward.description}</p>
              </div>
              <div className="ml-4 text-right">
                <span className="text-lg font-semibold text-gray-900">
                  {reward.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
