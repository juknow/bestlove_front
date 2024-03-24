import CommunityCard from "../components/CommunityCard";

const communityData = [{ id: 1, title: "첫 번째 카드", content: "첫 번째 카드 내용입니다." }];

export default function CommunityPage() {
  return (
    <>
      <div className="h-3"></div>
      <div className="container flex-column d-flex align-items-center w-screen">
        {communityData.map((item) => (
          <CommunityCard key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}
