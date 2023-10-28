"use client";
const ClientComponent = () => {
  return (
    <div>
      <input
        value="click"
        type="button"
        onClick={() => console.log("clicked")}
        className="px-3 py-2 rounded-lg bg-violet-900 capitalize cursor-pointer"
      />
    </div>
  );
};

export default ClientComponent;
