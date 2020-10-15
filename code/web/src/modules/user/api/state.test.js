import user from './state.js';

describe('User State', () => {
  it('should return the initial state', () => {
    const expected = {
      error: null,
      isLoading: false,
      isAuthenticated: false,
      details: null,
      style: null
    };
    const result = user(undefined, {});

    expect(result).toEqual(expected)
  });
  it('should return updated state when SET_USER is called', () => {
    const initialState = {
      error: null,
      isLoading: false,
      isAuthenticated: false,
      details: null,
      style: null
    };

    const action = {
      type: SET_USER, user: {name: 'Taryn', email: 'taryn@turing.io', role: null}
    }

    const newState = {
      error: null,
      isLoading: false,
      isAuthenticated: true,
      details: {name: 'Taryn', email: 'taryn@turing.io', role: null},
      style: null
    };

    const result = user(initialState, action)

    expect(result).toEqual(newState)
  });
  it('should return updated state when LOGIN_REQUEST is called', () => {
    const initialState = {
      error: null,
      isLoading: false,
      isAuthenticated: false,
      details: null,
      style: null
    };

     const action = {
       type: LOGIN_REQUEST,
       isLoading: true
     }

     const newState = {
       error: null,
       isLoading: true,
       isAuthenticated: false,
       details: null,
       style: null
     };

     const result = user(initialState, action)

     expect(result).toEqual(newState)
  });
  it('should return updated state of isLoading change when LOGIN_RESPONSE is called', () => {
    const initialState = {
      error: null,
      isLoading: false,
      isAuthenticated: false,
      details: null,
      style: null
    };

     const action = {
       type: LOGIN_RESPONSE,
     }

     const newState = {
       error: null,
       isLoading: false,
       isAuthenticated: false,
       details: null,
       style: null
     };

     const result = user(initialState, action)

     expect(result).toEqual(newState)

  });
  it('should return updated state of an error when LOGIN_RESPONSE is called', () => {
    const initialState = {
      error: null,
      isLoading: false,
      isAuthenticated: false,
      details: null,
      style: null
    };

     const action = {
       type: LOGIN_RESPONSE,
       error: 'Sorry, there was a problem'
     }

     const newState = {
       error: 'Sorry, there was a problem',
       isLoading: false,
       isAuthenticated: false,
       details: null,
       style: null
     };

     const result = user(initialState, action)

     expect(result).toEqual(newState)
  });
  it('should return updated state when LOGOUT is called', () => {
    const initialState = {
      error: null,
      isLoading: false,
      isAuthenticated: true,
      details: {name: 'Taryn', email: 'taryn@turing.io', role: null},
      style: null
    };

     const action = {
       type: LOGOUT,
     }

     const newState = {
       error: null,
       isLoading: false,
       isAuthenticated: false,
       details: null,
       style: null
     };

     const result = user(initialState, action)

     expect(result).toEqual(newState)
  });
})
