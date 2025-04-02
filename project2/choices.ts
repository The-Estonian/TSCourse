enum Role {
  Admin,
  Editor,
  Guest,
}
let userRole: Role = Role.Admin;

const trigger = () => {
  userRole = Role.Guest;
};
