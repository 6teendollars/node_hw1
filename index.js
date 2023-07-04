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
      const tContact = await contacts.getContactById(id);
      console.log(tContact);
      break;
    case "remove":
      const rContact = await contacts.removeContact(id);
      console.log(rContact);
      break;
    case "add":
      const nContact = await contacts.addContact(name, email, phone);
      console.log(nContact);
      break;
    default:
      console.log("this action does not exist");
      break;
      
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);