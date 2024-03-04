import {
  createUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../functions/customer";

jest.mock("./firebaseMock");

describe("User Functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("createUser function", async () => {
    const result = await createUser("test@example.com", "Test User");
    expect(result).toBe("user created");
  });

  test("deleteUser function", async () => {
    const testCustomerId = "5iY1eC7kR50dDuQ3oUlR";
    const result = await deleteUser(testCustomerId);
    expect(result).toBe("user deleted");
  });

});
