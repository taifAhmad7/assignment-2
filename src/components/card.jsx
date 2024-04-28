const Card = ({ data }) => {
  const { title, description, period, image } = data;

  return (
    <li className="card w-80 lg:w-60 bg-base-100 shadow-xl rounded-md">
      <figure className="w-full h-60 h-40">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </figure>
      <div className="card-body p-4">
        <div className="flex items-center">
          <h2 className="card-title text-md font-normal text-gray-800">
            {title}
          </h2>
          <p className="ml-20 text-gray-600 text-xs">{period} CE</p>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </li>
  );
};

export default Card;
