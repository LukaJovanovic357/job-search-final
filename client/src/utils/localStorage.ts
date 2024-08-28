import { User } from '../types';

const addUserToLocalStorage = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
};

const removeUserFromLocalStorage = (): void => {
    localStorage.removeItem('user');
};

const getUserFromLocalStorage = (): User | null => {
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : null;
    return user;
};

export {
    addUserToLocalStorage,
    removeUserFromLocalStorage,
    getUserFromLocalStorage
};
