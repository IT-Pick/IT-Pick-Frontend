import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import IntegratedRanking from "./component/IntegratedRanking";
import LiveDiscussion from "./component/LiveDiscussion";
import CommunityRanking from "./component/CommunityRanking";

const HomePage = () => {
  return (
    <div className="bg-[#F8F9FC]">
      <Header />
      <SearchBar />
      <IntegratedRanking />
      <LiveDiscussion />
      <CommunityRanking />
    </div>
  );
}

export default HomePage;
