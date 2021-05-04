export const createContact = (contactData) => {
    return fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
};

export const deleteContact = (contactId) => {
    fetch(`/api/contacts/${contactId}`, {
        method: 'DELETE'
    });
}