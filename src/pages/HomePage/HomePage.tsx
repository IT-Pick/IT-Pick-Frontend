import React from 'react';
import Header from "./component/Header";
import { useNavigate } from 'react-router-dom';
import SearchBar from "../../components/SearchBar";
import IntegratedRanking from "./component/IntegratedRanking";
import LiveDiscussion from "./component/LiveDiscussion";
import CommunityRanking from "./component/CommunityRanking";
import GreetingMessage from "./component/GreetingMessage";
import logo from "../../assets/images/etc/logo.png";
import victory_banner from "../../assets/images/victory_banner.png";

const HomePage = () => {
  // 여기에 실제 로그인 상태를 확인하는 로직을 추가해야 함
  // const isLoggedIn = false; 
  const isLoggedIn = true;

  const navigate = useNavigate();

  const handleSearch = (term: string) => {
    navigate('/search', { state: { searchTerm: term } });
  };

  return (
    <div className="bg-[#F8F9FC] w-[390px] mx-auto">
      <Header />
      <GreetingMessage isLoggedIn={isLoggedIn} />
      <div className="flex items-center ml-[24px] mr-[24px] mt-4">
        <img src={logo} alt="Logo Icon" className="w-8 h-8 mr-[14.79px]" />
        <SearchBar placeholder="김현주 열애설" onSearch={handleSearch} onSearchAll={true} />
      </div>
      <IntegratedRanking />
      <LiveDiscussion />
      <img src={victory_banner} alt="victory_banner" className="w-[390px] mx-auto mt-[40px]" />
      <CommunityRanking />
    </div>
  );
}

export default HomePage;
