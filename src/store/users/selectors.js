const local = (state) => state.users;
export const getToken = (state) => local(state).token;
export const getLoginType = (state) => local(state).loginType;
export const getAll = (state) => {
    return Object.values(local(state).byId);
};

