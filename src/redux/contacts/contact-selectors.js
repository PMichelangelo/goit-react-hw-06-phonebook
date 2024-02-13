export  const getContacts = store => store.contacts

export const getFilteredContacts = store => {
  const {contacts, filter} = store
  if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(({ name, phone }) => {
      const normalizedName = name.toLowerCase();

      return (normalizedName.includes(normalizedFilter) || phone.includes(normalizedFilter))
    });

    return filtredContacts;
}
