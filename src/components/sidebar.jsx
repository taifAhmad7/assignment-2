import Filters from './filters';

const Sidebar = ({ children, onFilterChange, showSidebar, setShowSidebar }) => {
  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        checked={showSidebar}
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {children}
        {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-full lg:w-[500px] min-h-full bg-base-200 text-base-content">
          <Filters
            onFilterChange={onFilterChange}
            setShowSidebar={setShowSidebar}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
