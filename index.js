// 1. Thao tác khai báo đối tượng (dùng ngoặc nhọn {})

const student = {}; // Khai báo 1 đối tượng rỗng

// Các thành phần trong 1 đối tượng: key: value
const user = {
  name: "Nguyễn Văn A",
  age: 30,
  address: "Thanh Xuân, Hà nội",
  email: "nva@gmail.com",
};

// 2. Thao tác truy cập giá trị trong đối tượng
// 2.1. Cách 1: Dùng object_name.key
console.log("Giá trị của name: ", user.name);
console.log("Giá trị của age: ", user.age);
console.log("Giá trị của address: ", user.address);

// 2.2. Cách 2: Dùng object_name[key_name]
console.log("Giá trị của name: ", user["name"]);

// 3. Lấy ra danh sách các key và value trong object
// Lấy danh sách key của object
console.log(Object.keys(user));

// Lấy danh sách value của object
console.log(Object.values(user));

// 4. Thao tác thêm key: value vào trong object (nếu key chưa tồn tại thì sẽ làm thao tác thêm)
console.log("object user trước khi thêm: ", user);
user.gender = "Nam";

console.log("object user sau khi thêm: ", user);

// 5. Thao tác cập nhật giá trị (nếu key đã tồn tại thì sẽ làm thao tác sửa)
user.gender = "Nữ";
console.log("object user sau khi sửa: ", user);

// 6. Thao tác xóa key: value ra khỏi đối tượng
delete user.age;
console.log("object user sau khi xóa key: ", user);

// 7. Khai báo mảng đối tượng
// Khai báo danh sách nhân viên của 1 công ty
// Nhân viên gồm: id, name, age, email
const employees = [
  {
    age: 20,
    name: "Nguyễn Văn A",
    email: "nva@gmail.com",
    id: 1,
  },
  {
    name: "Nguyễn Văn B",
    id: 2,
    email: "nvb@gmail.com",
    age: 22,
  },
  {
    name: "Nguyễn Văn C",
    id: 4,
    email: "nvc@gmail.com",
    age: 22,
  },
];

// Thao tác duyệt danh sách nhân viên
console.log("===== DANH SÁCH NHÂN VIÊN BAN ĐẦU =====");
for (let i = 0; i < employees.length; i++) {
  console.log("Thông tin của nhân viên thứ ", i + 1);

  console.log("Id: ", employees[i].id);
  console.log("Name: ", employees[i].name);
  console.log("Age: ", employees[i].age);
  console.log("Email: ", employees[i].email);
}

// Thao tác thêm nhân viên vào trong mảng
const newEmployee = {
  id: 3,
  name: "Lê Văn A",
  age: 30,
  email: "lva@gmail.com",
};

// Validate dữ liệu

employees.push(newEmployee);
console.log("===== DANH SÁCH NHÂN VIÊN SAU KHI THÊM =====");
for (let i = 0; i < employees.length; i++) {
  console.log("Thông tin của nhân viên thứ ", i + 1);

  console.log("Id: ", employees[i].id);
  console.log("Name: ", employees[i].name);
  console.log("Age: ", employees[i].age);
  console.log("Email: ", employees[i].email);
}

// Thao tác sửa
// validate dữ liệu
// Tìm kiếm thông tin của nhân viên cần cập nhật
// Gán lại giá trị mới cho từng key trong đối tượng
employees[0].name = "Lê Nam Anh";
employees[0].age = 40;
employees[0].email = "lenamanh@gmail.com";

console.log("===== DANH SÁCH NHÂN VIÊN SAU KHI CẬP NHẬT =====");
for (let i = 0; i < employees.length; i++) {
  console.log("Thông tin của nhân viên thứ ", i + 1);

  console.log("Id: ", employees[i].id);
  console.log("Name: ", employees[i].name);
  console.log("Age: ", employees[i].age);
  console.log("Email: ", employees[i].email);
}

// Thao tác xóa
employees.splice(0, 1);
console.log("===== DANH SÁCH NHÂN VIÊN SAU KHI XÓA =====");
for (let i = 0; i < employees.length; i++) {
  console.log("Thông tin của nhân viên thứ ", i + 1);

  console.log("Id: ", employees[i].id);
  console.log("Name: ", employees[i].name);
  console.log("Age: ", employees[i].age);
  console.log("Email: ", employees[i].email);
}

// Thao tác tìm kiếm (theo id)
let flag = false;
// B1: Duyệt mảng
for (let i = 0; i < employees.length; i++) {
  // B2: Thông qua từng đối tượng, kiểm tra id của từng đối tượng với id cần tìm kiếm
  if (employees[i].id === 2) {
    // B3: Nếu tìm thấy thì in ra thông tin của object, nếu không tìm thấy thì thông báo không tim thấy
    console.log(employees[i]);

    // Gán lại cờ để xác định đã tìm thấy
    flag = true;

    // Thoát khỏi vòng lặp để không tìm kiếm nữa
    break;
  }
}

if (!flag) {
  console.log("Không tìm thấy nhân viên");
}
