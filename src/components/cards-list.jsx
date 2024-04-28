const CardList = ({ children }) => {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-5 justify-items-center mt-12 gap-y-10">
      {children}
    </ul>
  );
};

export default CardList;
