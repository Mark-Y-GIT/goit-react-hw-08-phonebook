const getContact = state => state.contacts.contacts;

const getIsLoading = state => state.contacts.isLoading;

const getIsDeleting = state => state.contacts.isDeleting;

const contactsSelectors = { getContact, getIsLoading, getIsDeleting };

export default contactsSelectors;
