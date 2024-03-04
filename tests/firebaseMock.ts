export const db = {
    collection: jest.fn().mockReturnThis(), // Mocking collection() method
    doc: jest.fn().mockReturnThis(), // Mocking doc() method
    set: jest.fn(), // Mocking set() method
    delete: jest.fn(), // Mocking delete() method
    get: jest.fn(), // Mocking get() method
    where: jest.fn().mockReturnThis(), // Mocking where() method
    forEach: jest.fn(), // Mocking forEach() method
  };