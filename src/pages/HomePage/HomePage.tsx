import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import IntegratedRanking from "./component/IntegratedRanking";
import LiveDiscussion from "./component/LiveDiscussion";
import CommunityRanking from "./component/CommunityRanking";

const HomePage=()=>{
  return (
    <>
    <div>
    <Header/>
      <div className="bg-white flex flex-col items-center w-screen"> {/*background color: white && applied to minimum height */}
        <SearchBar/>
        <IntegratedRanking/>
        <LiveDiscussion/>
        <CommunityRanking/>
      </div>
    </div>

    </>
  );
}

export default HomePage;
