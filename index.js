const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const contactList = await contacts.listContacts();
      console.table(contactList);
      break;
    case "take":
      const takeContact = await contacts.getContactById(id);
      console.log(takeContact);
      break;
    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;
    case "add":
      const addContact = await contacts.addContact(name, email, phone);
      console.log(addContact);
      break;
    default:
      console.log("this action does not exist");
      break;
      
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);