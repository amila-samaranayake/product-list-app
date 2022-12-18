function Dropdown(props: any) {
  const onChangeEvent = (event: any) => {
    props.handleChangeValue(event.target.value);
    event.preventDefault();
  };

  return (
    <>
      <label
        htmlFor="title"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {props.title}
      </label>
      <select
        onChange={onChangeEvent}
        id="dropdown"
        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="All">Choose one</option>
        {props.options?.map((option: any, index: any) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
