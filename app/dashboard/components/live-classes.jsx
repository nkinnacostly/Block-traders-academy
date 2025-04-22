import Link from "next/link";

export function LiveClasses({ meetings }) {
  if (!meetings?.length) {
    return (
      <div className="text-white text-center py-4">
        No live classes scheduled at the moment.
      </div>
    );
  }
  console.log(meetings, "meetings");
  return (
    <div className="space-y-5">
      {meetings.map((meeting) => (
        <div
          key={meeting.id}
          className="bg-[#1E1E1E99] flex w-full h-[97px] rounded-tr-lg rounded-br-lg text-white hover:bg-[#1E1E1E] transition-colors duration-200"
        >
          <div className="bg-[#D4AF37] w-8"></div>
          <div className="w-[calc(100%-32px)] flex flex-col justify-center">
            <div className="flex justify-start space-x-5 w-[80%] mt-2 border-b-2 ml-3">
              <p className="font-medium">{meeting.topic}</p>
              <p className="capitalize">{meeting.type}</p>
              <p>{meeting.duration}min</p>
            </div>
            <div className="flex justify-start ml-3 space-x-5">
              <p>Meeting Link</p>
              <Link
                className="text-[#A0A0FF] hover:underline"
                href={meeting.join_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {meeting.join_url}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
