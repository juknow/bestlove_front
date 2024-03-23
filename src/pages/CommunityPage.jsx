import CommunityCard from "../components/CommunityCard";
import Navigator from "../components/Navigatior";

const communityData = [
  { id: 1, title: "첫 번째 카드", content: "첫 번째 카드 내용입니다." },
  { id: 2, title: "두 번째 카드", content: "두 번째 카드 내용입니다." },
  { id: 3, title: "세 번째 카드", content: "세 번째 카드 내용입니다." },
];

export default function CommunityPage() {
  return (
    <>
      <header>커뮤니티</header>
      <Navigator />
      <div style={{ height: 8 }}></div>
      <div className="container flex-column d-flex align-items-center">
        {communityData.map((item) => (
          <CommunityCard key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}
