import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import IntegratedRanking from "./component/IntegratedRanking";
import LiveDiscussion from "./component/LiveDiscussion";
import CommunityRanking from "./component/CommunityRanking";
import GreetingMessage from "./component/GreetingMessage";

const HomePage = () => {
  // 여기에 실제 로그인 상태를 확인하는 로직을 추가해야 함
  // const isLoggedIn = false; 
  const isLoggedIn = true;

  return (
    <div className="bg-[#F8F9FC] w-[390px] mx-auto">
      <Header />
      <GreetingMessage isLoggedIn={isLoggedIn} />
      <SearchBar />
      <IntegratedRanking />
      <LiveDiscussion />
      <CommunityRanking />
    </div>
  );
}

export default HomePage;
