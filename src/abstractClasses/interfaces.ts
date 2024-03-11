/**
 *
 * INTERFACES -
 * similar to custom types
 *
 */

enum UserRoles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

enum PermissionsList {
  read = "read",
  write = "write",
  execute = "execute",
}

interface UserPermissionsInterface {
  permissions: PermissionsList[];
}

interface UserRolesInterface {
  role: UserRoles;
}

interface UserInterface {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

/**
 * MULTIPLE INHERITANCE
 */
interface AdminUserInterface
  extends UserInterface,
    UserRolesInterface,
    UserPermissionsInterface {
  numberOfUsersReporting: number;
}

const rob: AdminUserInterface = {
  name: "John",
  email: "john@gmail.com",
  phone: 1234567891,
  gender: "Male",
  role: UserRoles.admin,
  permissions: [
    PermissionsList.read,
    PermissionsList.write,
    PermissionsList.execute,
  ],
  numberOfUsersReporting: 5,
};

interface UserWithAddress extends UserInterface {
  address: string;
}

const userInterface: UserInterface = {
  name: "John",
  email: " John@gmail.com",
  phone: 1234567891,
  gender: "Male",
};

const userWithAddressInterface: UserWithAddress = {
  name: "Mark",
  email: " mark@gmail.com",
  phone: 1234567812,
  gender: "Male",
  address: "This is an address",
};

console.log(userInterface);
console.log(userWithAddressInterface);
console.log(rob);
