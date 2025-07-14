import openings from "../career/openings.json";
const Openings = () => {
  return (
    <div className="overflow-x-auto px-4">
      <table className="table-auto w-full border border-gray-200 shadow-md">
        <thead className="bg-gray-100 text-[20px]">
          <tr>
            <th className="px-6 py-3 text-left font-semibold border-b">
              Name of The Position
            </th>
            <th className="px-6 py-3 text-left font-semibold border-b">
              Deadline
            </th>
            <th className="px-6 py-3 text-left font-semibold border-b">
              Apply Procedure
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-[17px]">
          {openings.map((i, index) => (
            <tr key={index}>
              <td className="px-6 py-4">{i.post_title}</td>
              <td className="px-6 py-4">{i.deadline}</td>
              <td className="px-6 py-4">
                <a
                  className="font-semibold text-shadow-blue-50 text-[19px]"
                  href={i.form_link}
                >
                  Apply
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Openings;
