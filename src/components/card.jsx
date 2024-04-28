const Card = ({ data }) => {
  const { title, description, period } = data;

  return (
    <li className="card w-60 bg-base-100 shadow-xl rounded-md">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4">
        <div className="flex items-center">
          <h2 className="card-title text-md font-normal text-gray-800">
            {title}
          </h2>
          <p className="ml-24 text-gray-600 text-xs">{period} CE</p>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </li>
  );
};

export default Card;
