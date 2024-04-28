import Sidebar from './components/sidebar';
import Card from './components/card';
import Header from './components/header';
import CardList from './components/cards-list';
import CARDS_DATA from './data';
import { useState } from 'react';

function App() {
  const [filteredCards, setFilteredCards] = useState(CARDS_DATA);
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const onSearchInputChange = (searchInput) => {
    setFilteredCards(
      CARDS_DATA.filter((card) => {
        return card.title.includes(searchInput);
      })
    );
  };

  const onFilterChange = (filter) => {
    setFilteredCards(
      CARDS_DATA.filter((card) => {
        return card.period > filter[0] && card.period < filter[1];
      })
    );

    setShowSidebar(false);
  };

  return (
    <div>
      <Sidebar
        onFilterChange={onFilterChange}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      >
        <Header
          setShowSidebar={setShowSidebar}
          setSearchInput={setSearchInput}
          onSearchInputChange={onSearchInputChange}
        />
        <CardList>
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => <Card data={card} key={card.period} />)
          ) : (
            <p className="ml-6">
              No results found. Search for something else...{' '}
            </p>
          )}
        </CardList>
      </Sidebar>
    </div>
  );
}

export default App;
