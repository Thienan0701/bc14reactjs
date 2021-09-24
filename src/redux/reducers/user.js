import * as ActionType from "../constants";

const initialState = {
  userList: [
    {
      id: 1,
      fullname: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "123456789",
      type: "VIP",
    },
    {
      id: 2,
      fullname: "Nguyen Van A",
      username: "vana",
      email: "vana@gmail.com",
      phoneNumber: "123456789",
      type: "USER",
    },
  ],
  keyword: "",
  userEdit: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DELETE_USER: {
      let userList = [...state.userList];
      const index = userList.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        userList.splice(index, 1);
        //Cap nhat lai mang userList trong state
        state.userList = userList;
      }
      return { ...state };
    }
    case ActionType.GET_KEYWORD: {
      state.keyword = action.payload;
      return { ...state };
    }

    case ActionType.EDIT_USER: {
      state.userEdit = action.payload;
      return { ...state };
    }

    // eslint-disable-next-line no-fallthrough
    case ActionType.ON_SUBMIT_USER: {
      let userList = [...state.userList];
      if (action.payload.id) {
        //update
        const index = userList.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          userList[index] = { ...action.payload };
        }
      } else {
        const userNew = { ...action.payload, id: new Date().getTime() };
        // userList.push(userNew);
        userList = [...state.userList, userNew];
      }
      state.userList = userList;
      return { ...state };
    }

    // eslint-disable-next-line no-fallthrough
    default: {
      return { ...state };
    }
  }
};
export default userReducer;
