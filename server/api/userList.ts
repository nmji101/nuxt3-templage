export default defineEventHandler((event) => {
  return [
    {
      key: 0,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: 1,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["wow"],
    },
    {
      key: 2,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
});
