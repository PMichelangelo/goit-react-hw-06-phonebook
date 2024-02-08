export  const getContacts = store => store.contacts

export const getFilterdContacts = store => {
  const {contacts, filter} = store
  if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(({ name, phone }) => {
      const normalizedName = name.toLowerCase();
      const normalizedPhone = phone.trim();

      return (
        normalizedName.includes(normalizedFilter) ||
        normalizedPhone.includes(normalizedFilter)
      );
    });

    return filtredContacts;
}
