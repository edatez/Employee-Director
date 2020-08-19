function useUserFilter (searchType, search) {
  
  const filterBySearch = user => {

    if (!search) return true;

    const getSearchTypeContent = () => {
      const types = {
        name: () => `${user.name.first} ${user.name.last}`,
        location: () => `${user.location.city}, ${user.location.state}`,
        email: () => `${user.email}`
      };
      return types[searchType] ;
    };
    return getSearchTypeContent(user).toLowerCase().includes (search.toLowerCase());

  }
  return filterBySearch;
}

// const useLocation = () => {
//   return  ( userA, userB) => {
//       if(!sort ) return 0;
//       const locationA = `${userA.location}`
//   }
// }

export default useUserFilter;